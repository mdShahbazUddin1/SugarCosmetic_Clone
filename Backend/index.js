const express = require("express");
const twilio = require("twilio");
const cors = require("cors");
const { connection } = require("./config/DB");
const { UserModel } = require("./model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

// Twilio credentials
const accountSid = "AC15b4450db39fe7206fd5cb9cad091569";
const authToken = "9f37da3ac1903ec84481b72a1aad9af4";
const twilioClient = twilio(accountSid, authToken);

// Generate a random 6-digit OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

app.post("/send-otp", async (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  // Generate and store OTP
  const otp = generateOTP();
  const hasOtp = await bcrypt.hash(otp, 12);

  try {
    // Update the user model with the generated OTP
    const user = new UserModel({ phoneNumber, otp: hasOtp });

    await user.save();

    // Send OTP via Twilio SMS
    twilioClient.messages
      .create({
        body: `Your OTP is: ${otp}`,
        from: "+17012039075",
        to: phoneNumber,
      })
      .then((message) => {
        console.log(`OTP sent to ${phoneNumber}: ${message.sid}`);
        res.send("OTP sent successfully");
      })
      .catch((error) => {
        console.error(`Error sending OTP: ${error.message}`);
        res.status(500).send("Error sending OTP");
      });
  } catch (error) {
    console.error(`Error updating user: ${error.message}`);
    res.status(500).send("Error updating user");
  }
});
app.post("/verify-otp", async (req, res) => {
  const userEnteredOTP = req.body.otp;

  try {
    // Retrieve the user from the database using the OTP
    const user = await UserModel.findOne({ otp: userEnteredOTP });

    if (!user) {
      return res.status(404).send("OTP is incorrect");
    }

    // Compare user-entered OTP with stored hashed OTP
    if (bcrypt.compareSync(userEnteredOTP, user.otp)) {
      // Clear the OTP in the user model after successful verification
      user.otp = undefined;
      await user.save();

      // Generate a JWT token and send it in the response
      const token = await jwt.sign({ userId: user._id }, "batman");
      res.status(200).send({ msg: "OTP Verified", token });
    } else {
      res.status(400).send("Invalid OTP");
    }
  } catch (error) {
    console.error(`Error verifying OTP: ${error.message}`);
    res.status(500).send("Error verifying OTP");
  }
});

app.listen(8080, async () => {
  try {
    await connection;
    console.log("DB is connected");
  } catch (error) {}
  console.log("Server is running");
});
