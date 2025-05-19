import mongoose from "mongoose";
import Counter from "./JobCounter.js";
const Schema = mongoose.Schema;
const jobSchema = new Schema(
  {
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
      name: String,
      phone: String,
      email: String,
    },
    contractor: {
      name: String,
      phone: String,
      email: String,
    },
    landlord: {
      name: String,
      phone: String,
      email: String,
    },

    address: {
      type: String,
      required: true,
    },
    attachments: [
      {
        type: String,
        enum: ["image", "pdf", "video", "excel", "doc"],
        url: String,
      },
    ],
    preJobAttachments: [
      {
        type: String,
        enum: ["image", "pdf", "video", "excel", "doc"],
        url: String,
      },
    ],
    postJobAttachments: [
      {
        type: String,
        enum: ["image", "pdf", "video", "excel", "doc"],
        url: String,
      },
    ],
  },
  { timestamps: true }
);

jobSchema.pre("save", async function (next) {
  if (this.isNew) {
    const counter = await Counter.findOneAndUpdate(
      { id: "job" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );

    const padded = String(counter.seq).padStart(4, "0");
    this.jobId = `JOB-${padded}`;
  }

  next();
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
