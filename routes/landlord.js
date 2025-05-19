import express from "express";
const landlordRouter = express.Router();
import { authenticateUser } from "../middlewares/authMiddleware.js";
// add,update,delete,read his properties
// read tenants data leased his properities
// read jobs on his properties

landlordRouter
  .route("/:id/property/:propertyId")
  .post(authenticateUser) //get my property by id
  .put(authenticateUser) //update my property by id
  .delete(authenticateUser); //delete my property by id

landlordRouter.route("/:id/properties").post(authenticateUser); //get my all properties
landlordRouter.route("/:id/jobs").post(authenticateUser); //get all jobs on my properties
landlordRouter.route("/:id/job/:jobId").post(authenticateUser); //get a job on my properties using job id
landlordRouter.route("/:id/jobs/:propertyId").post(authenticateUser); //get all jobs on single property by propertyId

landlordRouter.route("/:id/tenants").post(authenticateUser); //get all tenants using landlord id
landlordRouter.route("/:id/tenant/:propertyId").post(authenticateUser); //get tenant on single property by propertyId
export default landlordRouter;
