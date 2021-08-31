const express = require("express");

const cors = require("cors");

const axios = require("axios");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());

const mongoose = require("mongoose");

const {
  getUsers,
  getUser,
  createUser,
  seedData,
  addToFav,
} = require("./controllers/user.controller");

const port = process.env.PORT;
const userName = process.env.MONGOUSER;
const passWord = process.env.MONGOPASS;

mongoose
  .connect(
    `mongodb+srv://${userName}:${passWord}@cluster0.cpgnx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    // @ts-ignore
    { useNewUrlParser: true }
  )
  .then((item) => console.log("Connected"))
  .catch((err) => console.log("there was an error in db"));

app.get("/", (req, res) => {
  res.status(201).send("Your API is Working");
});
app.get("/user", getUsers);
app.get("/user/?:email", getUser);

app.post("/user/?:email", createUser);

app.put("/user/?:email", addToFav);

// enable this function to seed the data base ---------------------
// seedData();

app.listen(port, () => console.log(`You Are Now listening to port ${port}`));
