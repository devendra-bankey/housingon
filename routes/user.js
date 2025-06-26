import express from "express";
const userRouter = express.Router();
import { authenticateUser } from "../middlewares/authMiddleware.js";
import {
  loginUser,
  registerUser,
  forgetPassword,
  resetAccessToken,
  getUserById,
  updateUser,
  deleteUser,
  logoutUser,
} from "../controllers/user.js";

userRouter.get("/me", authenticateUser, (req, res) => {
  res.status(200).json({
    user: req.user, // comes from JWT decoding middleware
  });
});
userRouter.route("/reset-access-token").post(resetAccessToken);
userRouter.route("/login").post(loginUser);
userRouter.route("/logout").post(authenticateUser, logoutUser);
userRouter.route("/register").post(registerUser);
userRouter.route("/forget-password").post(authenticateUser, forgetPassword);
userRouter.route("/reset-password").post(authenticateUser, forgetPassword);
userRouter.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

export default userRouter;
