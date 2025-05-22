import express from "express";
const landlordRouter = express.Router();
import { authenticateUser } from "../middlewares/authMiddleware.js";
import { Roles, authorizeRoles } from "../middlewares/authorizeRoles.js";
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
} from "../controllers/landlord.js";

// add,update,delete,read his properties
// read tenants data leased his properities
// read jobs on his properties

landlordRouter
  .route("/:id/property/:propertyId")
  .get(authenticateUser, authorizeRoles(Roles.LANDLORD), getPropertyById) //get my property by id
  .put(authenticateUser, authorizeRoles(Roles.LANDLORD), updatePropertyById) //update my property by id
  .delete(authenticateUser, authorizeRoles(Roles.LANDLORD), deletePropertyById); //delete my property by id

landlordRouter
  .route("/:id/properties")
  .get(authenticateUser, authorizeRoles(Roles.LANDLORD), getAllProperties); //get my all properties

landlordRouter
  .route("/:id/jobs")
  .get(
    authenticateUser,
    authorizeRoles(Roles.LANDLORD),
    getAllJobsOnProperties
  ); //get all jobs on my properties

landlordRouter
  .route("/:id/job/:jobId")
  .get(authenticateUser, authorizeRoles(Roles.LANDLORD), getJobById); //get a job on my properties using job id

landlordRouter
  .route("/:id/jobs/:propertyId")
  .get(authenticateUser, authorizeRoles(Roles.LANDLORD), getAllJobsOnProperty); //get all jobs on single property by propertyId

landlordRouter
  .route("/:id/tenants")
  .post(authenticateUser, authorizeRoles(Roles.LANDLORD), getAllTenants); //get all tenants using landlord id

landlordRouter
  .route("/:id/tenant/:propertyId")
  .post(authenticateUser, authorizeRoles(Roles.LANDLORD), getTenantByProperty); //get tenant on single property by propertyId

export default landlordRouter;
