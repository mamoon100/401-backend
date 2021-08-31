const mongoose = require("mongoose");

const user = new mongoose.Schema({
  email: { type: String, unique: true, dropDups: true },
  fav: Array,
});

module.exports = mongoose.model("user", user);
