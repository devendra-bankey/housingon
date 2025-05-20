import express from "express";
const Router = express.Router();
import userRouter from "./user.js";
import jobRouter from "./job.js";
import subJobRouter from "./subJob.js";
import landlordRouter from "./landlord.js";
import contractorRouter from "./contractor.js";
Router.get("/", (req, res) => {
  res.send("Hello");
});

Router.use("/user", userRouter);
Router.use("/job", jobRouter);
Router.use("/sub-job", subJobRouter);
Router.use("/landlord", landlordRouter);
Router.use("/contractor", contractorRouter);
export default Router;
