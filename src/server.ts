import { Server } from "http";
import app from "./app.js";
import { envVars } from "./config/env.js";
import connectDB from "../lib/mongoose.js";

let server: Server;

process.on("uncaughtException", (error) => {
  console.log("Uncaught Exception Detected");
  console.log(error);
  process.exit(1);
});

async function bootstrap() {
  try {
    // mongodbcannect
    await connectDB();

    server = app.listen(envVars.PORT, () => {
      console.log(`Server running on port ${envVars.PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
}

(async () => {
  await bootstrap();
})();

process.on("unhandledRejection", (error) => {
  console.log("Unhandled Rejection Detected");
  console.log(error);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

process.on("SIGTERM", () => {
  console.log("Server is shutting down!");

  if (server) {
    server.close(() => {
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
});

process.on("SIGINT", () => {
  console.log("Server is shutting down!");

  if (server) {
    server.close(() => {
      process.exit(0);
    });
  } else {
    process.exit(0);
  }
});
