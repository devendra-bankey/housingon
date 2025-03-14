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
  assignedContractorId: {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
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
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
