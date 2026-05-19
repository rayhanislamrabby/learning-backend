import type { Request, Response } from "express";

import { AuthService } from "./auth.service.js";
import { ApiResponse } from "../../../utils/apiResponse.js";
import catchAsync from "../../../utils/tryCatch.js";

//registation
const register = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.register(req.body);

  ApiResponse.success(res, result, "User created successfully");
});
// verify

const verifyEmail = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.verifyEmail(req.body);

  ApiResponse.success(res, result, "Email verified successfully");
});

//login

const login = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.login(req.body);

  ApiResponse.success(res, result, "Successfully login");
});

// all users

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.getAllUsers();

  ApiResponse.success(res, result, "Users fetched successfully");
});

const mongo = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.mongo;
});

export const AuthController = {
  register,
  login,
  verifyEmail,
  getAllUsers,
};
