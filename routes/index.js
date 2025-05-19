import app from "../app.js";
import express from "express";
const Router = express.Router();
import userRouter from "./user.js";
import jobRouter from "./job.js";
Router.get("/", (req, res) => {
  res.send("Hello");
});

Router.use("/user", userRouter);
Router.use("/job", jobRouter);
export default Router;
