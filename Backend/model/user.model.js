const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  phoneNumber: String,
  otp: String,
});

const UserModel = mongoose.model("User", userSchema);

module.exports = {
  UserModel,
};
