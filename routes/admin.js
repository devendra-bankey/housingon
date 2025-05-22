import express from "express";
import { authenticateUser } from "../middlewares/authMiddleware.js";
import { authorizeRoles, Roles } from "../middlewares/authorizeRoles.js";
import {
  // Tenants
  addTenant,
  getTenantList,
  getTenant,
  updateTenant,
  deleteTenant,
  // Landlords
  addLandlord,
  getLandlordList,
  getLandlord,
  updateLandlord,
  deleteLandlord,
  // Contractors
  addContractor,
  getContractorList,
  getContractor,
  updateContractor,
  deleteContractor,
} from "../controllers/admin.js";

const adminRouter = express.Router();

// ========== TENANT ROUTES ==========
adminRouter
  .route("/tenant")
  .get(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER), getTenantList) // get all tenants
  .post(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER), addTenant); // create tenant

adminRouter
  .route("/tenant/:id")
  .post(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER), getTenant) // get single tenant
  .put(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER), updateTenant) // update tenant
  .delete(
    authenticateUser,
    authorizeRoles(Roles.PROPERTY_MANAGER),
    deleteTenant
  ); // delete tenant

// ========== LANDLORD ROUTES ==========
adminRouter
  .route("/landlord")
  .get(
    authenticateUser,
    authorizeRoles(Roles.PROPERTY_MANAGER),
    getLandlordList
  ) // get all landlords
  .post(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER), addLandlord); // create landlord

adminRouter
  .route("/landlord/:id")
  .post(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER), getLandlord) // get single landlord
  .put(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER), updateLandlord) // update landlord
  .delete(
    authenticateUser,
    authorizeRoles(Roles.PROPERTY_MANAGER),
    deleteLandlord
  ); // delete landlord

// ========== CONTRACTOR ROUTES ==========
adminRouter
  .route("/contractor")
  .get(
    authenticateUser,
    authorizeRoles(Roles.PROPERTY_MANAGER),
    getContractorList
  ) // get all contractors
  .post(
    authenticateUser,
    authorizeRoles(Roles.PROPERTY_MANAGER),
    addContractor
  ); // create contractor

adminRouter
  .route("/contractor/:id")
  .post(authenticateUser, authorizeRoles(Roles.PROPERTY_MANAGER), getContractor) // get single contractor
  .put(
    authenticateUser,
    authorizeRoles(Roles.PROPERTY_MANAGER),
    updateContractor
  ) // update contractor
  .delete(
    authenticateUser,
    authorizeRoles(Roles.PROPERTY_MANAGER),
    deleteContractor
  ); // delete contractor

export default adminRouter;
