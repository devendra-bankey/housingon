import user from "../models/user.js";
import jwt from "jsonwebtoken";
import { MailerSend, EmailParams, Recipient } from "mailersend";

const getAccessToken = (user) => {
  return jwt.sign(
    { id: user._id, userType: user.userType },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "59m" }
  );
  0;
};
const getRefreshToken = (user) => {
  return jwt.sign(
    { id: user._id, userType: user.userType },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const currentUser = await user.findOne({ email });
    if (!currentUser)
      return res.status(404).json({ message: "User not Found" });
    const isMatch = currentUser.matchPassword(password);
    if (!isMatch) res.status(401).json({ message: "Invalid Credentials" });
    const accessKey = getAccessToken(currentUser);
    const refreshKey = getRefreshToken(currentUser);
    currentUser.accessKey = accessKey;
    currentUser.refreshKey = refreshKey;
    await currentUser.save();
    res.status(200).json({
      message: "Login Success",
      user: {
        id: currentUser._id,
        fullname: currentUser.fullname,
        email: currentUser.email,
        userType: currentUser.userType,
      },
      accessKey,
      refreshKey,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Failed to Login", err });
  }
};
const registerUser = async (req, res) => {
  try {
    const { fullname, email, phone, password, userType } = req.body;
    const existingUser = await user.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered",
      });
    }
    const newUser = new user({
      fullname,
      email,
      phone,
      password,
      userType,
    });
    await newUser.save();
    res.status(201).json({
      message: "Registration successful",
      user: {
        id: newUser._id,
        fullname,
        email,
        phone,
        userType,
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Failed to Register" });
  }
};
const mailersend = new MailerSend({
  apiKey: process.env.MAIL_SENDER_TOKEN,
});

const forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const currentUser = await user.findOne({ email });
    if (!currentUser) {
      return res.status(404).json({ message: "User Not Found" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const expiry = new Date(Date.now() + 10 * 60 * 1000);

    currentUser.otpCode = otp;
    currentUser.otpExpiresAt = expiry;
    await currentUser.save();

    const recipients = [
      new Recipient(currentUser.email, currentUser.fullname || "User"),
    ];
    const emailParams = new EmailParams();
    emailParams.from = {
      email: "veerji481999@gmail.com",
      name: "Property Management App",
    };
    emailParams.to = recipients;
    emailParams.subject = "Password Reset Code";
    emailParams.html = `<p>Your OTP to reset password is <b>${otp}</b>. It will expire in 10 minutes.</p>`;
    emailParams.text = `Your OTP to reset password is ${otp}. It will expire in 10 minutes.`;

    await mailersend.email.send(emailParams);

    res.status(200).json({ message: "OTP sent to your email." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error sending reset password email." });
  }
};

const logoutUser = async (req, res) => {
  try {
    if (!currentUser) {
      return res.status(404).json({ message: "User not found" });
    }
    currentUser.accessKey = null;
    currentUser.refreshKey = null;
    await currentUser.save();

    return res.status(200).json({ message: "Logout successful" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "Logout failed", error: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
  } catch (err) {}
};
const updateUser = async (req, res) => {
  try {
  } catch (err) {}
};
const deleteUser = async (req, res) => {
  try {
  } catch (err) {}
};
const resetAccessToken = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(401).json({ message: "Refresh token missing" });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    // Optional: validate refreshToken exists in DB
    const currentUser = await User.findById(decoded.id);
    if (!currentUser || currentUser.refreshKey !== refreshToken) {
      return res.status(403).json({ message: "Refresh token invalid" });
    }

    const newAccessToken = jwt.sign(
      { id: decoded.id, userType: decoded.userType },
      process.env.JWT_SECRET,
      { expiresIn: "59m" }
    );

    currentUser.accessKey = newAccessToken;
    await currentUser.save();

    res.json({ accessKey: newAccessToken });
  } catch (err) {
    return res
      .status(403)
      .json({ message: "Refresh token expired or invalid" });
  }
};

export {
  loginUser,
  registerUser,
  forgetPassword,
  logoutUser,
  getUserById,
  updateUser,
  deleteUser,
  resetAccessToken,
};
