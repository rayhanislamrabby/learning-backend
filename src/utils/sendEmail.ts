import nodemailer from "nodemailer";

import { envVars } from "../config/env.js";

export const sendEmail = async (
  to: string,
  subject: string,
  text: string,
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",

    auth: {
      user: envVars.EMAIL_USER,
      pass: envVars.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: envVars.EMAIL_USER,
    to,
    subject,
    text,
  });
};