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
} from "../controllers/user.js";

userRouter.route("/reset-access-token").post(resetAccessToken);
userRouter.route("/login").post(loginUser);
userRouter.route("/register").post(registerUser);
userRouter.route("/forget-password").post(authenticateUser, forgetPassword);
userRouter.route("/reset-password").post(authenticateUser, forgetPassword);
userRouter.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

export default userRouter;
