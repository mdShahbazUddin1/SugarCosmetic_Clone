const express = require("express");
const twilio = require("twilio");
const cors = require("cors");
const { connection } = require("./config/DB");
const { UserModel } = require("./model/user.model");
const { parsePhoneNumberFromString } = require("libphonenumber-js");

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

  try {
    // Update the user model with the generated OTP
    const user = new UserModel({ phoneNumber, otp });

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

app.listen(8080, async () => {
  try {
    await connection;
    console.log("DB is connected");
  } catch (error) {}
  console.log("Server is running");
});
