import express from "express";
const tenantRouter = express.tenantRouter();

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
  .get(authenticateUser, getAllJobsForTenant) // View all job requests
  .post(authenticateUser, createJobForTenant); // Raise a job issue

tenantRouter
  .route("/:tenantId/job/:jobId")
  .get(authenticateUser, getSingleJob) // Get single job
  .put(authenticateUser, updateJobForTenant); // Optional update

tenantRouter
  .route("/:tenantId/job/:jobId/attachments")
  .post(authenticateUser, uploadJobAttachments); // Add photos/videos

tenantRouter
  .route("/:tenantId/job/:jobId/status")
  .get(authenticateUser, getJobStatus); // Track job status

tenantRouter
  .route("/:tenantId/rent-statements")
  .get(authenticateUser, getRentStatements);

tenantRouter.route("/:tenantId/rent-due").get(authenticateUser, getRentDueInfo);

tenantRouter
  .route("/:tenantId/pay-rent")
  .post(authenticateUser, initiateRentPayment);

tenantRouter
  .route("/:tenantId/maintenance-deductions")
  .get(authenticateUser, getMaintenanceDeductions);

tenantRouter
  .route("/:tenantId/property")
  .get(authenticateUser, getTenantPropertyDetails);

tenantRouter
  .route("/:tenantId/lease-details")
  .get(authenticateUser, getLeaseDetails);

export default tenantRouter;
