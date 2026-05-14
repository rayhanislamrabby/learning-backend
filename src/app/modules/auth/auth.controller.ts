import type { Request, Response } from "express";
import { AuthService } from "./auth.service.js";
import { ApiResponse } from "../../../utils/apiResponse.js";

const login = async (req: Request, res: Response) => {
  const result = await AuthService.login(req.body);

  ApiResponse.success(res, result, "Successfully login");
};

export const AuthController = {
  login,
};
