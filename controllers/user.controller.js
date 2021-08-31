const user = require("../models/user.model");

const getUsers = (req, res) => {
  user
    .find({})
    .then((item) => res.status(200).send(item))
    .catch((err) => res.status(500).send("There was problem in the Data base"));
};

const getUser = (req, res) => {
  user
    .find({ email: req.params.email })
    .then((item) => res.status(200).send(item))
    .catch((err) => res.status(500).send("There was problem in the Data base"));
};

const createUser = (req, res) => {
  let newUser = new user({
    email: req.params.email,
  });
  newUser
    .save()
    .then(() => user.find({}).then((item) => res.status(201).send(item)))
    .catch((error) => res.status(401).send("Duplicate User"));
};

const addToFav = (req, res) => {
  user
    .findOneAndUpdate({ email: req.params.email }, { $push: req.body })
    .then(() => {
      res.status(201).send("Successfully Updated");
    })
    .catch((err) => res.status(500).send("there was problem"));
};

const seedData = () => {
  let mamoon = new user({
    email: "mamoon.husen1006@gmail.com",
    fav: [],
  });
  let yihya = new user({
    email: "v.salvatore7.gs@gmail.com",
    fav: [],
  });
  mamoon
    .save()
    .then(() => console.log("Seed Mamoon"))
    .catch((err) => console.log("sedded mamoon before"));
  yihya
    .save()
    .then(() => console.log("Seed yihya"))
    .catch((err) => console.log("sedded yihia before"));
};

module.exports = { getUsers, getUser, createUser, seedData, addToFav };
