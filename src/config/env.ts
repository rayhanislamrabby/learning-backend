import dotenv from "dotenv";

dotenv.config();

export const envVars = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL as string,
  MONGOOSE_URL: process.env.MONGOOSE_URL as string,

  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASS: process.env.EMAIL_PASS,
};
