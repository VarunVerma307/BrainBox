const mongoose = require("mongoose");

const OTPSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    expires: 5 * 60,
  },
});
async function sendVerficationEmail(email, otp) {
  try {
    const mailResponse = await mailSender(
      email,
      "verificatin email from BrainBox",
      otp
    );
    console.log("Email sent Successfuly ", mailResponse);
  } catch (error) {
    console.log("error occurred while sending mail ", error);
    throw error;
  }
}
OTPSchema.pre("save", async function (next) {
    await sendVerficationEmail(this.email,this.otp);
    next();
});
module.exports = mongoose.model("OTP", OTPSchema);
