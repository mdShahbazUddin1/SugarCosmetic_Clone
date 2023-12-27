const express = require("express");
const twilio = require("twilio");
const cors = require("cors");
const { connection } = require("./config/DB");
const { UserModel } = require("./model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

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

app.post("/send-otp", async (req, res) => {
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
      res.send(result);
    } else {
      // User does not exist, register the user with the provided phone number and OTP
      const otp = generateOTP();
      const hashedOtp = await bcrypt.hash(otp, 12);

      const newUser = new UserModel({ phoneNumber, otp: hashedOtp });
      await newUser.save();

      // Send OTP via Twilio
      const result = await sendTwilioOTP(phoneNumber, otp);
      res.send(result);
    }
  } catch (error) {
    console.error(`Error checking/updating user: ${error.message}`);
    res.status(500).send("Error checking/updating user");
  }
});

app.post("/verify-otp", async (req, res) => {
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
      const token = await jwt.sign({ userId: user._id }, "batman");
      res.status(200).json({ message: "OTP Verified", token });
    } else {
      res.status(400).json({ error: "Invalid OTP" });
    }
  } catch (error) {
    console.error(`Error verifying OTP: ${error.message}`);
    res.status(500).json({ error: "Error verifying OTP" });
  }
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("DB is connected");
  } catch (error) {}
  console.log("Server is running");
});
