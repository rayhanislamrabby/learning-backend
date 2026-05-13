import express, { Router } from "express";

import validateRequest from "../../middleware/validateSchema.js";
import { EmailEschema } from "./auth.validation.js";
import { AuthController } from "./auth.controller.js";

const router: Router = express.Router();

router.post("/login", validateRequest(EmailEschema), AuthController.login);

export const AuthRoutes = router;
