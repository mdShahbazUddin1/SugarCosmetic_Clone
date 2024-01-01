const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  phoneNumber: { type: String, require: true },
  otp: { type: String, require: true },
  addresses: [
    {
      firstname: { type: String, require: true },
      lastname: { type: String, require: true },
      email: { type: String, require: true },
      phonenumber: { type: String, require: true },
      houseno: { type: String, require: true },
      area: { type: String, require: true },
      pincode: { type: String, require: true },
      state: { type: String, require: true },
      city: { type: String, require: true },
      setdefault: { type: Boolean, require: true, default: false },
    },
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.model("User", userSchema);

module.exports = {
  UserModel,
};
