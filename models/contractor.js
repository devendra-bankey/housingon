import mongoose from "mongoose";
const Schema = mongoose.Schema;
const contractorSchema = new Schema(
  {
    fullname: { type: String, required: true, trim: true },
    company: { type: String, required: true },
    vatRegistered: { type: Boolean, required: true, default: false },
    skillTypes: [{ type: String, required: true, trim: true }],
    phone: { type: String },
    supervisor: {
      type: Schema.Types.ObjectId,
      ref: "Contractor",
      default: undefined,
    },
    supervisorUserId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: undefined,
    },
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Contractor", landlordSchema);
