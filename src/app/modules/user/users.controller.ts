import type { Request, Response } from "express";

import catchAsync from "../../../utils/tryCatch.js";
import { ApiResponse } from "../../../utils/apiResponse.js";

import { UserService } from "./users.service.js";

// create
const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.createUser(req.body);

  ApiResponse.success(res, result, "User created successfully");
});

// get all
const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getAllUsers();

  ApiResponse.success(res, result, "Users fetched successfully");
});

export const UserController = {
  createUser,
  getAllUsers,
};