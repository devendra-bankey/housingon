import express from "express";
const contractorRouter = express.Router();
import { authenticateUser } from "../middlewares/authMiddleware.js";
import { authorizeRoles, Roles } from "../middlewares/authorizeRoles.js";
import {
  getAllJobs,
  createOrUpdateJob,
  acceptJob,
  rejectJob,
  updateVisit,
  scheduleJob,
  postChatMessage,
  getChatMessages,
  getNotifications,
  getEditProfile,
  addQuotation,
  getQuotation,
  updateQuotation,
  addInvoice,
  getInvoice,
  addJobAttachments,
  getJobAttachments,
  addPreJobAttachments,
  getPreJobAttachments,
  addPostJobAttachments,
  getPostJobAttachments,
} from "../controllers/contractor.js";
// read update jobs
// chat
// add attachments
// accept reject job
// add,update quotation
// add invoice
// schedule
// visit update
contractorRouter
  .route("/:id/jobs")
  .get(authenticateUser, authorizeRoles(Roles.CONTRACTOR), getAllJobs); // Get all jobs for contractor

contractorRouter
  .route("/:id/job/:jobId")
  .post(authenticateUser, authorizeRoles(Roles.CONTRACTOR), createOrUpdateJob); // Create or update job details

contractorRouter
  .route("/:id/job/:jobId/accept")
  .post(authenticateUser, authorizeRoles(Roles.CONTRACTOR), acceptJob); // Accept a job

contractorRouter
  .route("/:id/job/:jobId/reject")
  .post(authenticateUser, authorizeRoles(Roles.CONTRACTOR), rejectJob); // Reject a job

contractorRouter
  .route("/:id/job/:jobId/visit-udpate")
  .post(authenticateUser, authorizeRoles(Roles.CONTRACTOR), updateVisit); // Update visit info for job

contractorRouter
  .route("/:id/job/:jobId/schedule")
  .post(authenticateUser, authorizeRoles(Roles.CONTRACTOR), scheduleJob); // Schedule a job visit

contractorRouter
  .route("/:jobid/chat")
  .post(authenticateUser, authorizeRoles(Roles.CONTRACTOR), postChatMessage); // Post chat message for job

contractorRouter
  .route("/:jobid/messages")
  .get(authenticateUser, authorizeRoles(Roles.CONTRACTOR), getChatMessages); // Get chat messages for job

contractorRouter
  .route("/notifications")
  .get(authenticateUser, authorizeRoles(Roles.CONTRACTOR), getNotifications); // Get contractor notifications

contractorRouter
  .route("/edit-profile")
  .get(authenticateUser, authorizeRoles(Roles.CONTRACTOR), getEditProfile); // Get contractor profile for editing

contractorRouter
  .route("/:id/job/:jobId/quotation")
  .post(authenticateUser, authorizeRoles(Roles.CONTRACTOR), addQuotation) // add quotation
  .get(authenticateUser, authorizeRoles(Roles.CONTRACTOR), getQuotation) // get quotation
  .patch(authenticateUser, authorizeRoles(Roles.CONTRACTOR), updateQuotation); // update quotation

contractorRouter
  .route("/:id/job/:jobId/invoice")
  .post(authenticateUser, authorizeRoles(Roles.CONTRACTOR), addInvoice) // add invoice
  .get(authenticateUser, authorizeRoles(Roles.CONTRACTOR), getInvoice); // get invoice

contractorRouter
  .route("/:id/job/:jobId/attachments")
  .post(authenticateUser, authorizeRoles(Roles.CONTRACTOR), addJobAttachments) // add attachments
  .get(authenticateUser, authorizeRoles(Roles.CONTRACTOR), getJobAttachments); // get attachments

contractorRouter
  .route("/:id/job/:jobId/pre-job-attachments")
  .post(
    authenticateUser,
    authorizeRoles(Roles.CONTRACTOR),
    addPreJobAttachments
  ) // add pre-job attachments
  .get(
    authenticateUser,
    authorizeRoles(Roles.CONTRACTOR),
    getPreJobAttachments
  ); // get pre-job attachments

contractorRouter
  .route("/:id/job/:jobId/post-job-attachments")
  .post(
    authenticateUser,
    authorizeRoles(Roles.CONTRACTOR),
    addPostJobAttachments
  ) // add post-job attachments
  .get(
    authenticateUser,
    authorizeRoles(Roles.CONTRACTOR),
    getPostJobAttachments
  ); // get post-job attachments

export default contractorRouter;
