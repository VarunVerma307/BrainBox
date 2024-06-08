// const User = require("../models/User");
// const mailsender = require("../utils/mailSender");
// const bcyrpt=require("bcrypt");

// exports.resetPasswordToken = async (req, res) => {
//   try {
//     const {email} = req.body();

//     const user = await User.findOne({ email: email });

//     if (!user) {
//       return res.status(400).json({
//         success: false,
//         message: "Email not registered",
//       });
//     }

//     const token = crypto.randomUUID();

//     const Updatedetail = await User.findOneAndUpdate(
//       {
//         email: email,
//       },
//       {
//         token: token,
//         resetpasswordExpiresin: Date.now() + 5 * 1000 * 60,
//       },
//       {
//         new: true,
//       }
//     );

//     const url = `https://localhost:3000/update-password/${token}`;

//     await mailsender(
//       email,
//       "Password Reset Link",
//       `Password Reset Link : ${url}`
//     );
//     return res.status(400).json({
//       success: true,
//       message: "Email sent successfuly please check mail and send password",
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// exports.resetPassword = async (req, res) => {
//   try {
//     const { email, password, confirmPassword } = req.body();

//     if (password !== confirmPassword) {
//       return res.status(500).json({
//         success: false,
//         message: "Password not matching",
//       });
//     }

//     const userDetails = await User.findOne({ token: token });

//     if (!userDetails) {
//       return res.status(500).json({
//         success: false,
//         message: "Token is invalid",
//       });
//     }

//     if(userDetails.resetpasswordExpiresin<Date.now()){
//         return res.status(500).json({
//             success: false,
//             message: "Token is expired ,plase regenerate your token",
//           });
//     }

//     const hashedPassword=await bcyrpt.hash(password,10);

//     await User.findOneAndUpdate(
//         {token:token},
//         {password:hashedPassword},
//         {new:true},
//     )
//     return res.status(200).json({
//         success: true,
//         message: "Password changed successfuly",
//       });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };



const User = require("../models/User")
const mailSender = require("../utils/mailSender")
const bcrypt = require("bcrypt")
const crypto = require("crypto")
exports.resetPasswordToken = async (req, res) => {
  try {
    const email = req.body.email
    const user = await User.findOne({ email: email })
    if (!user) {
      return res.json({
        success: false,
        message: `This Email: ${email} is not Registered With Us Enter a Valid Email `,
      })
    }
    const token = crypto.randomBytes(20).toString("hex")

    const updatedDetails = await User.findOneAndUpdate(
      { email: email },
      {
        token: token,
        resetPasswordExpires: Date.now() + 3600000,
      },
      { new: true }
    )
    console.log("DETAILS", updatedDetails)

    // const url = `http://localhost:3000/update-password/${token}`
    const url = `https://studynotion-edtech-project.vercel.app/update-password/${token}`

    await mailSender(
      email,
      "Password Reset",
      `Your Link for email verification is ${url}. Please click this url to reset your password.`
    )

    res.json({
      success: true,
      message:
        "Email Sent Successfully, Please Check Your Email to Continue Further",
    })
  } catch (error) {
    return res.json({
      error: error.message,
      success: false,
      message: `Some Error in Sending the Reset Message`,
    })
  }
}

exports.resetPassword = async (req, res) => {
  try {
    const { password, confirmPassword, token } = req.body

    if (confirmPassword !== password) {
      return res.json({
        success: false,
        message: "Password and Confirm Password Does not Match",
      })
    }
    const userDetails = await User.findOne({ token: token })
    if (!userDetails) {
      return res.json({
        success: false,
        message: "Token is Invalid",
      })
    }
    if (!(userDetails.resetPasswordExpires > Date.now())) {
      return res.status(403).json({
        success: false,
        message: `Token is Expired, Please Regenerate Your Token`,
      })
    }
    const encryptedPassword = await bcrypt.hash(password, 10)
    await User.findOneAndUpdate(
      { token: token },
      { password: encryptedPassword },
      { new: true }
    )
    res.json({
      success: true,
      message: `Password Reset Successful`,
    })
  } catch (error) {
    return res.json({
      error: error.message,
      success: false,
      message: `Some Error in Updating the Password`,
    })
}
}