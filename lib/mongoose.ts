import mongoose from "mongoose";
import { envVars } from "../src/config/env.js";

const connectDb = async () => {
  try {
    await mongoose.connect(envVars.MONGO_URL);

    console.log("MongoDB Connected");
  } catch (err) {
    console.log(err);
  }
};

export default connectDb;
