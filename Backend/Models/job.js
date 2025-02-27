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
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
