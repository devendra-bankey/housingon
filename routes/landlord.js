import express from "express";
const landlordRouter = express.Router();
import { authenticateUser } from "../middlewares/authMiddleware.js";
import authenticateUser from "../middleware/authenticateUser.js";
import {
  getPropertyById,
  updatePropertyById,
  deletePropertyById,
  getAllProperties,
  getAllJobsOnProperties,
  getJobById,
  getAllJobsOnProperty,
  getAllTenants,
  getTenantByProperty,
} from "../controllers/landlordController.js";

// add,update,delete,read his properties
// read tenants data leased his properities
// read jobs on his properties

landlordRouter
  .route("/:id/property/:propertyId")
  .get(authenticateUser, getPropertyById) //get my property by id
  .put(authenticateUser, updatePropertyById) //update my property by id
  .delete(authenticateUser, deletePropertyById); //delete my property by id

landlordRouter.route("/:id/properties").get(authenticateUser, getAllProperties); //get my all properties

landlordRouter.route("/:id/jobs").get(authenticateUser, getAllJobsOnProperties); //get all jobs on my properties

landlordRouter.route("/:id/job/:jobId").get(authenticateUser, getJobById); //get a job on my properties using job id

landlordRouter
  .route("/:id/jobs/:propertyId")
  .get(authenticateUser, getAllJobsOnProperty); //get all jobs on single property by propertyId

landlordRouter.route("/:id/tenants").post(authenticateUser, getAllTenants); //get all tenants using landlord id

landlordRouter
  .route("/:id/tenant/:propertyId")
  .post(authenticateUser, getTenantByProperty); //get tenant on single property by propertyId

export default landlordRouter;
