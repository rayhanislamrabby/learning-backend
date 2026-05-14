import dotenv from "dotenv";

dotenv.config();

export const envVars = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
};
