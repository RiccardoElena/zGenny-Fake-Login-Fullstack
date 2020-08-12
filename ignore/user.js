const mongoose = require("mongoose"),
  passportLocalMongoose = require("passport-local-mongoose"),
  UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    acc_type: String
  })

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("User", UserSchema)