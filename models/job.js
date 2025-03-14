import mongoose from "mongoose";
const Schema = mongoose.Schema;
const jobSchema = new Schema({
  jobId: {
    type: String,
    required: true,
  },
  issue: {
    type: String,
    required: true,
  },
  subIssue: {
    type: String,
    required: true,
  },
  completionDate: {
    type: Date,
    required: true,
  },
  certExpiryDate: {
    type: Date,
  },
  description: {
    type: String,
  },
  assignedContractorId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
  },
  status: {
    type: String,
    enum: [
      "1", // new open job
      "2", // hold job
      "3", // completed
      "4", // rejected
      "5", // closed
    ],
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
  },
  tenant: {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
  },
  address: {
    type: String,
    required: true,
  },
  attachments: [
    {
      type: String,
      enum: ["image", "pdf", "video", "excel", "doc"],
    },
  ],
  preJobAttachments: [
    {
      type: String,
      enum: ["image", "pdf", "video", "excel", "doc"],
    },
  ],
  postJobAttachments: [
    {
      type: String,
      enum: ["image", "pdf", "video", "excel", "doc"],
    },
  ],
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
