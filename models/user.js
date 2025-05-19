import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullname: {
    type: String,
    // default: "",
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  password: {
    type: String,
  },
  userType: {
    type: String,
    enum: ["1", "2", "3", "4"], // 1.Property manager, 2.Contractor, 3.Tenant, 4.Landlord
  },
  accessKey: {
    type: String,
  },
  refreshKey: {
    type: String,
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

UserSchema.methods.matchPassword = async function (enteredPasswrod) {
  return await bcrypt.compare(this.password, enteredPasswrod);
};
export default mongoose.model("User", UserSchema);
// default se bhejte hai to kisi bhi naam se import kr skte hai lekin default nhi lgya to vhai naam se import karne padega
