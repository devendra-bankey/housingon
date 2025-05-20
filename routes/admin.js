import express from "express";
import { authenticateUser } from "../middlewares/authMiddleware.js";
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
  .get(authenticateUser, getTenantList) // get all tenants
  .post(authenticateUser, addTenant); // create tenant

adminRouter
  .route("/tenant/:id")
  .post(authenticateUser, getTenant) // get single tenant
  .put(authenticateUser, updateTenant) // update tenant
  .delete(authenticateUser, deleteTenant); // delete tenant

// ========== LANDLORD ROUTES ==========
adminRouter
  .route("/landlord")
  .get(authenticateUser, getLandlordList) // get all landlords
  .post(authenticateUser, addLandlord); // create landlord

adminRouter
  .route("/landlord/:id")
  .post(authenticateUser, getLandlord) // get single landlord
  .put(authenticateUser, updateLandlord) // update landlord
  .delete(authenticateUser, deleteLandlord); // delete landlord

// ========== CONTRACTOR ROUTES ==========
adminRouter
  .route("/contractor")
  .get(authenticateUser, getContractorList) // get all contractors
  .post(authenticateUser, addContractor); // create contractor

adminRouter
  .route("/contractor/:id")
  .post(authenticateUser, getContractor) // get single contractor
  .put(authenticateUser, updateContractor) // update contractor
  .delete(authenticateUser, deleteContractor); // delete contractor

export default adminRouter;
