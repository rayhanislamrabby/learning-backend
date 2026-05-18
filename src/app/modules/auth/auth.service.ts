import bcrypt from "bcrypt";

import type { UserCreate, UserLogin, EmailVerify } from "./auth.validation.js";
import prisma from "../../../../lib/prisma.js";
import { sendEmail } from "../../../utils/sendEmail.js";

// register 

const register = async (payload: UserCreate) => {
  // check existing user
  const isUserExist = await prisma.users.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (isUserExist) {
    throw new Error("User already exists");
  }

  // hash password
  const hashedPassword = await bcrypt.hash(payload.password, 10);

  // generate otp
  const otp = Math.floor(100000 + Math.random() * 900000).toString();

  // create user
  const user = await prisma.users.create({
    data: {
      name: payload.name,
      email: payload.email,
      password: hashedPassword,

      otp,
      isVerified: false,
    },
  });

  // send otp email
  await sendEmail(
    payload.email,
    "Email Verification",
    `Your OTP is ${otp}`,
  );

  return user;
};
// login 

const login = async (payload: UserLogin) => {
  // find user
  const user = await prisma.users.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  // compare password
  const isPasswordMatched = await bcrypt.compare(
    payload.password,
    user.password,
  );

  if (!isPasswordMatched) {
    throw new Error("Password incorrect");
  }

  return user;
};

// verify email 

const verifyEmail = async (payload: EmailVerify) => {
  const user = await prisma.users.findUnique({
    where: {
      email: payload.email,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  // match otp
  if (user.otp !== payload.otp) {
    throw new Error("Invalid OTP");
  }

  // verify user
  await prisma.users.update({
    where: {
      email: payload.email,
    },
    data: {
      isVerified: true,
      otp: null,
    },
  });

  return null;
};

export const AuthService = {
  register,
  login,
  verifyEmail,
};
