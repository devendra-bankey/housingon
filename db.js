import mongoose from "mongoose";

const ConnectToDB = async () => {
  try {
    const instance = await mongoose.connect(process.env.MONGOURI);
    console.log("DB ✓");
    return instance;
  } catch (err) {
    console.log(err);
  }
};

export default ConnectToDB;
