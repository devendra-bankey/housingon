import express from "express";
const subJobRouter = express.Router();
import { authenticateUser } from "../middlewares/authMiddleware.js";
import { Roles, authorizeRoles } from "../middlewares/authorizeRoles.js";

// single update,read,delete sub job by id
// assign contractor
// attachments

// create,read,udpate,delete jobs
subJobRouter
  .route("/")
  .get(authenticateUser) // get all sub jobs
  .post(authenticateUser); // create a job

subJobRouter
  .route("/:id")
  .post(authenticateUser) //single get a sub job by id
  .put(authenticateUser) //single update a sub job by id
  .delete(authenticateUser); //single delete a sub job by id

subJobRouter
  .route("/:id/status")
  .post(authenticateUser) // get sub job status
  .patch(authenticateUser); // update sub job status //patch for single

subJobRouter.route("/:id/attachments").post(authenticateUser);
subJobRouter.route("/:id/open").post(authenticateUser);
subJobRouter.route("/:id/hold").post(authenticateUser);
subJobRouter.route("/:id/completed").post(authenticateUser);
subJobRouter.route("/:id/archive").post(authenticateUser);

export default subJobRouter;
