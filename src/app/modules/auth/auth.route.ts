import express, { Router } from "express";

import validateRequest from "../../middleware/validateSchema.js";

import { AuthController } from "./auth.controller.js";
import tryCatch from "../../../utils/tryCatch.js";
import { EmailVerifySchema, UserCreateSchema, UserLoginSchema } from "./auth.validation.js";

const router: Router = express.Router();

router.post(
  "/register",
  validateRequest(UserCreateSchema),
  tryCatch(AuthController.register),
);

router.post(
  "/login",
  validateRequest(UserLoginSchema),
  tryCatch(AuthController.login),
);

router.post(
  "/verify-email",
  validateRequest(EmailVerifySchema),
  tryCatch(AuthController.verifyEmail),
);

export const AuthRoutes = router;
