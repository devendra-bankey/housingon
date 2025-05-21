import mongoose from "mongoose";
const Schema = mongoose.Schema;
const landlordSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  fullname: {
    type: String,
  },
  email: {
    type: String,
  },
  properties: [
    {
      type: Schema.Types.ObjectId,
      ref: "Property",
    },
  ],
});

export default mongoose.model("Landlord", landlordSchema);
