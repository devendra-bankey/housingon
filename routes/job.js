import express from "express";
const jobRouter = express.Router();
import { authenticateUser } from "../middlewares/authMiddleware.js";
import { authorizeRoles, Roles } from "../middlewares/authorizeRoles.js";
// single update,read,delete job by id
// assign contractor
// attachments

// create,read,udpate,delete jobs
jobRouter
  .route("/")
  .get(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER)) // get all jobs
  .post(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER)); // create a job

jobRouter
  .route("/:id")
  .get(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER)) //single get a job by id
  .put(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER)) //single update a job by id
  .delete(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER)); //single delete a job by id

jobRouter
  .route("/:id/status")
  .get(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER)) // get job status
  .patch(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER)); // update job status //patch for single

jobRouter
  .route("/assign-contractor")
  .post(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER)); // assign a contractor
jobRouter
  .route("/:id/attachments")
  .post(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER));
jobRouter
  .route("/:id/close")
  .post(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER));
jobRouter
  .route("/:id/open")
  .post(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER));
jobRouter
  .route("/:id/hold")
  .post(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER));
jobRouter
  .route("/:id/archive")
  .post(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER));
jobRouter
  .route("/:id/priority")
  .post(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER)); // change priority [low, medium, high]

export default jobRouter;
