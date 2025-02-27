import mongoose from "mongoose";
const Schema = mongoose.Schema;
const landlordSchema = new Schema({
  landlordId: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
