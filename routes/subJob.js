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
  .get(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER)) // get all sub jobs
  .post(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER)); // create a job

subJobRouter
  .route("/:id")
  .post(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER)) //single get a sub job by id
  .put(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER)) //single update a sub job by id
  .delete(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER)); //single delete a sub job by id

subJobRouter
  .route("/:id/status")
  .post(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER)) // get sub job status
  .patch(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER)); // update sub job status //patch for single

subJobRouter
  .route("/:id/attachments")
  .post(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER));
subJobRouter
  .route("/:id/open")
  .post(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER));
subJobRouter
  .route("/:id/hold")
  .post(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER));
subJobRouter
  .route("/:id/completed")
  .post(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER));
subJobRouter
  .route("/:id/archive")
  .post(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER));

export default subJobRouter;
