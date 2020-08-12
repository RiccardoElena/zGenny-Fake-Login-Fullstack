const mongoose = require("mongoose"),
  UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    acc_type: String
  })


module.exports = mongoose.model("User", UserSchema)