const twilio = require("twilio");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { UserModel } = require("../model/user.model");
const { BlackListModel } = require("../model/blacklisttoken");
require("dotenv").config();

// Twilio credentials
const accountSid = process.env.accountSid;
const authToken = process.env.authToken;
const twilioClient = twilio(accountSid, authToken);

// Generate a random 6-digit OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const sendTwilioOTP = async (phoneNumber, otp) => {
  try {
    // Send OTP via Twilio SMS
    const message = await twilioClient.messages.create({
      body: `Your OTP is: ${otp}`,
      from: "+17012039075",
      to: phoneNumber,
    });

    console.log(`OTP sent to ${phoneNumber}: ${message.sid}`);
    return "OTP sent successfully";
  } catch (error) {
    console.error(`Error sending OTP: ${error}`);
    throw new Error("Error sending OTP");
  }
};

const sendOtp = async (req, res) => {
  const phoneNumber = req.body.phoneNumber;

  try {
    // Check if the user already exists in the database
    const existingUser = await UserModel.findOne({ phoneNumber });

    if (existingUser) {
      // User already exists, just send the OTP
      const otp = generateOTP();
      const hashedOtp = await bcrypt.hash(otp, 12);

      existingUser.otp = hashedOtp;
      await existingUser.save();

      // Send OTP via Twilio
      const result = await sendTwilioOTP(phoneNumber, otp);
      res.status(200).send(result);
    } else {
      // User does not exist, register the user with the provided phone number and OTP
      const otp = generateOTP();
      const hashedOtp = await bcrypt.hash(otp, 12);

      const newUser = new UserModel({ phoneNumber, otp: hashedOtp });
      await newUser.save();

      // Send OTP via Twilio
      const result = await sendTwilioOTP(phoneNumber, otp);
      res.status(200).send(result);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const verifyOtp = async (req, res) => {
  const userEnteredOTP = req.body.otp;
  const phoneNumber = req.body.phoneNumber;

  try {
    // Retrieve the user from the database using the phone number
    const user = await UserModel.findOne({ phoneNumber: phoneNumber });
    console.log("User Object:", user);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    console.log("Stored OTP:", user.otp);
    console.log("Entered OTP:", userEnteredOTP);
    // Check if the user has an OTP stored
    if (user.otp === undefined) {
      return res.status(400).json({ error: "OTP not available for the user" });
    }

    // Compare user-entered OTP with stored hashed OTP
    const otpVerify = await bcrypt.compare(userEnteredOTP, user.otp);

    if (otpVerify) {
      // Clear the OTP in the user model after successful verification
      user.otp = undefined;
      await user.save();

      // Generate a JWT token and send it in the response
      const token = await jwt.sign(
        { userId: user._id },
        process.env.accessToken
      );
      res.status(200).json({ message: "OTP Verified", token, user });
    } else {
      res.status(400).json({ error: "Invalid OTP" });
    }
  } catch (error) {
    console.error(`Error verifying OTP: ${error.message}`);
    res.status(500).json({ error: "Error verifying OTP" });
  }
};

const addAddress = async (req, res) => {
  const userId = req.userId;

  try {
    const user = await UserModel.findById(userId);

    if (!user) return res.status(404).json({ error: "User not found" });

    const newAddress = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      phonenumber: req.body.phonenumber,
      houseno: req.body.houseno,
      area: req.body.area,
      pincode: req.body.pincode,
      state: req.body.state,
      city: req.body.city,
      setdefault: req.body.setdefault || false,
    };
    user.addresses.push(newAddress);
    await user.save();
    res
      .status(201)
      .json({ message: "Address added successfully", address: newAddress });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateAddress = async (req, res) => {
  const userId = req.userId;
  const { addressId } = req.params;

  try {
    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    const addressToUpdate = user.addresses.id(addressId);

    if (!addressToUpdate) {
      return res.status(404).json({ error: "Address not found" });
    }

    // Update other properties based on req.body
    addressToUpdate.firstname = req.body.firstname || addressToUpdate.firstname;
    addressToUpdate.lastname = req.body.lastname || addressToUpdate.lastname;
    addressToUpdate.phonenumber =
      req.body.phonenumber || addressToUpdate.phonenumber;
    addressToUpdate.houseno = req.body.houseno || addressToUpdate.houseno;
    addressToUpdate.area = req.body.area || addressToUpdate.area;
    addressToUpdate.pincode = req.body.pincode || addressToUpdate.pincode;

    // Update setdefault if provided in req.body
    if (req.body.hasOwnProperty("setdefault")) {
      addressToUpdate.setdefault = req.body.setdefault;

      // If setting as default, set others to false
      if (req.body.setdefault) {
        user.addresses.forEach((address) => {
          if (address._id.toString() !== addressId) {
            address.setdefault = false;
          }
        });
      }
    }

    await user.save();

    res.status(200).json({
      message: "Address updated successfully",
      address: addressToUpdate,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteAddress = async (req, res) => {
  const userId = req.userId;
  const { addressId } = req.params;

  try {
    const user = await UserModel.findById(userId);
    if (!user) return res.status(404).send("User not found");

    const addressToDelete = user.addresses.id(addressId);
    if (!addressToDelete) {
      return res.status(404).json({ error: "Address not found" });
    }

    // Using pull method to remove the subdocument
    user.addresses.pull({ _id: addressId });
    await user.save();

    res.status(200).json({
      message: "Address deleted successfully",
      address: addressToDelete,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getAddress = async (req, res) => {
  const userId = req.userId; // Assuming you have middleware to extract userId from the token

  try {
    // Find the user by ID
    const user = await UserModel.findById(userId);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Retrieve all addresses for the user
    const addresses = user.addresses;

    // Send the addresses in the response
    res.status(200).json({ addresses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const logout = async (req, res) => {
  try {
    const token = req.headers?.authorization;
    if (!token) {
      return res.status(400).json({ msg: "Token is invalid or not provided" });
    }

    const blacklistToken = new BlackListModel({
      token: token,
    });

    await blacklistToken.save();

    res.status(200).json({ msg: "Logout success" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  sendOtp,
  verifyOtp,
  addAddress,
  updateAddress,
  deleteAddress,
  logout,
  getAddress,
};
