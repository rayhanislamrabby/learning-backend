// import { envVars } from './../src/config/env';

// import mongoose from "mongoose";
// import { envVars } from "../src/config/env.js";

// const connectDb = async () => {
//   try {
//     await mongoose.connect(envVars.DATABASE_URL);

//     console.log("MongoDB Connected");
//   } catch (err) {
//     console.log(err);
//   }
// };

// export default connectDb;




import mongoose from "mongoose";
import { envVars } from "../src/config/env.js";

const MONGODB_URI = envVars.MONGOOSE_URL;

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

declare global {
  // eslint-disable-next-line no-var
  var mongoose: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongoose || {
  conn: null,
  promise: null,
};

if (!global.mongoose) {
  global.mongoose = cached;
}

async function connectDB() {
  if (!MONGODB_URI) {
    throw new Error(
      "Please define the MONGOOSE_URL environment variable inside .env",
    );
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongooseInstance) => {
        console.log("MongoDB Connected 🚀");

        return mongooseInstance;
      });
  }

  try {
    cached.conn = await cached.promise;
  } catch (error) {
    cached.promise = null;

    throw error;
  }

  return cached.conn;
}

export default connectDB;