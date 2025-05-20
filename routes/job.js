import express from "express";
const jobRouter = express.Router();
import { authenticateUser } from "../middlewares/authMiddleware.js";

// single update,read,delete job by id
// assign contractor
// attachments

// create,read,udpate,delete jobs
jobRouter
  .route("/")
  .get(authenticateUser) // get all jobs
  .post(authenticateUser); // create a job

jobRouter
  .route("/:id")
  .get(authenticateUser) //single get a job by id
  .put(authenticateUser) //single update a job by id
  .delete(authenticateUser); //single delete a job by id

jobRouter
  .route("/:id/status")
  .get(authenticateUser) // get job status
  .patch(authenticateUser); // update job status //patch for single

jobRouter.route("/assign-contractor").post(authenticateUser); // assign a contractor
jobRouter.route("/:id/attachments").post(authenticateUser);
jobRouter.route("/:id/close").post(authenticateUser);
jobRouter.route("/:id/open").post(authenticateUser);
jobRouter.route("/:id/hold").post(authenticateUser);
jobRouter.route("/:id/archive").post(authenticateUser);
jobRouter.route("/:id/priority").post(authenticateUser); // change priority [low, medium, high]

export default jobRouter;
