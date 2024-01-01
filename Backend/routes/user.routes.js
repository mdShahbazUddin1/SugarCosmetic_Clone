const express = require("express");
const userRoute = express.Router();
const userController = require("../controller/user.controller");
const { auth } = require("../middleware/auth");

userRoute.post("/send-otp", userController.sendOtp);
userRoute.post("/verify-otp", userController.verifyOtp);
userRoute.post("/addadress", auth, userController.addAddress);
userRoute.put("/updateAddress/:addressId", auth, userController.updateAddress);
userRoute.delete(
  "/deleteAddress/:addressId",
  auth,
  userController.deleteAddress
);
userRoute.get("/logout", auth, userController.logout);
userRoute.get("/getaddress", auth, userController.getAddress);

module.exports = { userRoute };
