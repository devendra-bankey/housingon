import express from "express";
import {
  getAllJobs,
  createJob,
  getJobById,
  updateJobById,
  deleteJobById,
  getJobStatus,
  updateJobStatus,
  assignContractor,
  uploadAttachments,
  closeJob,
  openJob,
  holdJob,
  archiveJob,
  changePriority,
} from "../controllers/job.js";

const jobRouter = express.Router();
import { authenticateUser } from "../middlewares/authMiddleware.js";
import { authorizeRoles, Roles } from "../middlewares/authorizeRoles.js";

// Define routes (same as before, just hook to controllers)
jobRouter
  .route("/")
  .get(authenticateUser, getAllJobs)
  .post(authenticateUser, createJob);

jobRouter
  .route("/:id")
  .get(authenticateUser, getJobById)
  .put(authenticateUser, updateJobById)
  .delete(
    authenticateUser,

    deleteJobById
  );

jobRouter.route("/:id/status").get(authenticateUser, getJobStatus).patch(
  authenticateUser,

  updateJobStatus
);

jobRouter.post(
  "/assign-contractor",
  authenticateUser,

  assignContractor
);
jobRouter.post(
  "/:id/attachments",
  authenticateUser,

  uploadAttachments
);
jobRouter.post(
  "/:id/close",
  authenticateUser,

  closeJob
);
jobRouter.post(
  "/:id/open",
  authenticateUser,

  openJob
);
jobRouter.post(
  "/:id/hold",
  authenticateUser,

  holdJob
);
jobRouter.post(
  "/:id/archive",
  authenticateUser,

  archiveJob
);
jobRouter.post(
  "/:id/priority",
  authenticateUser,

  changePriority
);

export default jobRouter;
