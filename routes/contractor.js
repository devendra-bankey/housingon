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
contractorRouter.route("/:id/jobs").get(authenticateUser, getAllJobs); // Get all jobs for contractor

contractorRouter
  .route("/:id/job/:jobId")
  .post(authenticateUser, createOrUpdateJob); // Create or update job details

contractorRouter
  .route("/:id/job/:jobId/accept")
  .post(authenticateUser, acceptJob); // Accept a job

contractorRouter
  .route("/:id/job/:jobId/reject")
  .post(authenticateUser, rejectJob); // Reject a job

contractorRouter
  .route("/:id/job/:jobId/visit-udpate")
  .post(authenticateUser, updateVisit); // Update visit info for job

contractorRouter
  .route("/:id/job/:jobId/schedule")
  .post(authenticateUser, scheduleJob); // Schedule a job visit

contractorRouter.route("/:jobid/chat").post(authenticateUser, postChatMessage); // Post chat message for job

contractorRouter
  .route("/:jobid/messages")
  .get(authenticateUser, getChatMessages); // Get chat messages for job

contractorRouter
  .route("/notifications")
  .get(authenticateUser, getNotifications); // Get contractor notifications

contractorRouter.route("/edit-profile").get(authenticateUser, getEditProfile); // Get contractor profile for editing

contractorRouter
  .route("/:id/job/:jobId/quotation")
  .post(authenticateUser, addQuotation) // add quotation
  .get(authenticateUser, getQuotation) // get quotation
  .patch(authenticateUser, updateQuotation); // update quotation

contractorRouter
  .route("/:id/job/:jobId/invoice")
  .post(authenticateUser, addInvoice) // add invoice
  .get(authenticateUser, getInvoice); // get invoice

contractorRouter
  .route("/:id/job/:jobId/attachments")
  .post(authenticateUser, addJobAttachments) // add attachments
  .get(authenticateUser, getJobAttachments); // get attachments

contractorRouter
  .route("/:id/job/:jobId/pre-job-attachments")
  .post(
    authenticateUser,

    addPreJobAttachments
  ) // add pre-job attachments
  .get(
    authenticateUser,

    getPreJobAttachments
  ); // get pre-job attachments

contractorRouter
  .route("/:id/job/:jobId/post-job-attachments")
  .post(
    authenticateUser,

    addPostJobAttachments
  ) // add post-job attachments
  .get(
    authenticateUser,

    getPostJobAttachments
  ); // get post-job attachments

export default contractorRouter;
