import mongoose from "mongoose";
const Schema = mongoose.Schema;

const jobCounterSchema = new Schema({
  id: {
    type: String,
    required: true,
    default: "jobId",
  },
  seq: {
    type: Number,
    default: 0,
  },
});

const JobCounter = mongoose.model("JobCounter", jobCounterSchema);
export default JobCounter;
