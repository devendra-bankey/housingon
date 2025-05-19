import express from "express";
const adminRouter = express.Router();
import { authenticateUser } from "../middlewares/authMiddleware.js";
import {
  addTenant,
  getTenantList,
  deleteTenant,
  updateTenant,
  getTenant,
} from "../controllers/admin.js";

// add,update,delete,read tenant,properties,contractor

// tenants managed by admin
adminRouter
  .route("/tenant")
  .get(authenticateUser, getTenantList) //get tenants
  .post(authenticateUser, addTenant); //create a tenant

// benefit of usting route() we can add multiple diff type of methods on single route(should not be similar type of method)
adminRouter
  .route("/tenant/:id")
  .post(authenticateUser, getTenant) // get single tenant by id
  .put(authenticateUser, updateTenant) // udpate single tenant by id
  .delete(authenticateUser, deleteTenant); // delete single delete by id

// landlords managed by admin
adminRouter
  .route("/landlord")
  .get(authenticateUser, getTenantList) // get landlords
  .post(authenticateUser, addTenant); //create a landlord

adminRouter
  .route("/landlord/:id")
  .post(authenticateUser, getTenants) // get single landlord by id
  .put(authenticateUser, updateTenant) // udpate single contractor by id
  .delete(authenticateUser, deleteTenant); // delete single contractor by id

// contractors managed by admin
adminRouter
  .route("/contractor")
  .get(authenticateUser, getTenantList) //get contractors
  .post(authenticateUser, addTenant); //create a contractor

adminRouter
  .route("/contractor/:id")
  .post(authenticateUser, getTenant) // get single contractor
  .put(authenticateUser, updateTenant) // udpate single contractor by id
  .delete(authenticateUser, deleteTenant); // delete single contractor by id

export default adminRouter;
