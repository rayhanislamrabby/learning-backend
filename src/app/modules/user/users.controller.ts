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

// get single
const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.getSingleUser(req.params.id as string);

  ApiResponse.success(res, result, "User fetched successfully");
});

// update
const updateUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.updateUser(
    req.params.id as string,
    req.body,
  );

  ApiResponse.success(res, result, "User updated successfully");
});

// delete
const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.deleteUser(req.params.id as string);

  ApiResponse.success(res, result, "User deleted successfully");
});

export const UserController = {
  createUser,
  getAllUsers,
  getSingleUser,
  updateUser,
  deleteUser,
};
