import mongoose from "mongoose";
const Schema = mongoose.Schema;
const tenantSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    fullname: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    loginAccess: {
      type: Boolean,
      default: false,
    },
    stayDetails: [
      {
        propertyId: {
          type: Schema.Types.ObjectId,
          ref: "Property",
        },
        startDate: { type: Date },
        endDate: { type: Date },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Tenant", tenantSchema);
