import express from "express";
const tenantRouter = express.tenantRouter();
import { authenticateUser } from "../middlewares/authMiddleware";
import { Roles, authorizeRoles } from "../middlewares/authorizeRoles";
// read job issue
// See current and past rent statements
// See due date and amount
// Pay rent online (Stripe/PayPal/etc.)
// View maintenance deductions
// Flat/Unit details (address, landlord)
// Lease start/end date
// Rent breakdown (base rent, maintenance, etc.)
// Contract/lease copy (PDF)

// raise job issue request (accept/reject manage by admin)
// Report problems (leakage, electricity, etc.)

// Select category (plumbing, electrical, etc.)
// Add photos/videos
// Track issue status (Pending → In Progress → Resolved)
tenantRouter
  .route("/:tenantId/jobs")
  .get(authenticateUser, authorizeRoles(Roles.TENANT), getAllJobsForTenant) // View all job requests
  .post(authenticateUser, authorizeRoles(Roles.TENANT), createJobForTenant); // Raise a job issue

tenantRouter
  .route("/:tenantId/job/:jobId")
  .get(authenticateUser, authorizeRoles(Roles.TENANT), getSingleJob) // Get single job
  .put(authenticateUser, authorizeRoles(Roles.TENANT), updateJobForTenant); // Optional update

tenantRouter
  .route("/:tenantId/job/:jobId/attachments")
  .post(authenticateUser, authorizeRoles(Roles.TENANT), uploadJobAttachments); // Add photos/videos

tenantRouter
  .route("/:tenantId/job/:jobId/status")
  .get(authenticateUser, authorizeRoles(Roles.TENANT), getJobStatus); // Track job status

tenantRouter
  .route("/:tenantId/rent-statements")
  .get(authenticateUser, authorizeRoles(Roles.TENANT), getRentStatements);

tenantRouter
  .route("/:tenantId/rent-due")
  .get(authenticateUser, authorizeRoles(Roles.TENANT), getRentDueInfo);

tenantRouter
  .route("/:tenantId/pay-rent")
  .post(authenticateUser, authorizeRoles(Roles.TENANT), initiateRentPayment);

tenantRouter
  .route("/:tenantId/maintenance-deductions")
  .get(
    authenticateUser,
    authorizeRoles(Roles.TENANT),
    getMaintenanceDeductions
  );

tenantRouter
  .route("/:tenantId/property")
  .get(
    authenticateUser,
    authorizeRoles(Roles.TENANT),
    getTenantPropertyDetails
  );

tenantRouter
  .route("/:tenantId/lease-details")
  .get(authenticateUser, authorizeRoles(Roles.TENANT), getLeaseDetails);

export default tenantRouter;
