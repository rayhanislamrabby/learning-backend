import type { Request, Response } from "express";

import { AuthService } from "./auth.service.js";
import { ApiResponse } from "../../../utils/apiResponse.js";


//registation 
const register = async (req: Request, res: Response) => {
  const result = await AuthService.register(req.body);

  ApiResponse.success(res, result, "User created successfully");
};


//login

const login = async (req: Request, res: Response) => {
  const result = await AuthService.login(req.body);

  ApiResponse.success(res, result, "Successfully login");
};


// verify

const verifyEmail = async (req: Request, res: Response) => {
  const result = await AuthService.verifyEmail(req.body);

  ApiResponse.success(res, result, "Email verified successfully");
};


export const AuthController = {
  register,
  login,
  verifyEmail,
};