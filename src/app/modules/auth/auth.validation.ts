import { z } from "zod";

// creat user  

export const UserCreateSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(100, "Full name is too long"),

  email: z.email("Invalid email address"),

  password: z.string().min(6, "Password must be at least 6 characters"),
});

//  login 

export const UserLoginSchema = z.object({
  email: z.email(),

  password: z.string(),
});

// verify email  

export const EmailVerifySchema = z.object({
  email: z.email(),

  otp: z.string().regex(/^\d{6}$/, "OTP must be 6 digits"),
});

//typs

export type UserCreate = z.infer<typeof UserCreateSchema>;

export type UserLogin = z.infer<typeof UserLoginSchema>;

export type EmailVerify = z.infer<typeof EmailVerifySchema>;
