import mongoose from "mongoose";
const Schema = mongoose.Schema;

const subJobSchema = new Schema(
  {
    subJobId: {
      type: String,
      required: true,
      unique: true,
    },
    parentJobId: {
      type: Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    issue: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["1", "2", "3", "4", "5"], // use same status code as main job
      default: "1",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium",
    },
    description: {
      type: String,
    },
    completionDate: {
      type: Date,
    },
    attachments: [
      {
        type: String,
        enum: ["image", "pdf", "video", "excel", "doc"],
      },
    ],
  },
  { timestamps: true }
);

const SubJob = mongoose.model("SubJob", subJobSchema);

export default SubJob;
