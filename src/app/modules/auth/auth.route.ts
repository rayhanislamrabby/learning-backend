import express, { Router } from "express";

import validateRequest from "../../middleware/validateSchema.js";

import { AuthController } from "./auth.controller.js";

import {
  EmailVerifySchema,
  UserCreateSchema,
  UserLoginSchema,
} from "./auth.validation.js";
import catchAsync from "../../../utils/tryCatch.js";

const router: Router = express.Router();

router.post(
  "/register",
  validateRequest(UserCreateSchema),
  catchAsync(AuthController.register),
);

router.post(
  "/login",
  validateRequest(UserLoginSchema),
  catchAsync(AuthController.login),
);

router.post(
  "/verify-email",
  validateRequest(EmailVerifySchema),
  catchAsync(AuthController.verifyEmail),
);

router.get("/allusers", AuthController.getAllUsers);







export const AuthRoutes = router;
