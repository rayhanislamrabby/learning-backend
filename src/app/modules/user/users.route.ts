import express, { Router } from "express";

import { UserController } from "./users.controller.js";

const router: Router = express.Router();

// create user
router.post("/", UserController.createUser);

// get all users
router.get("/", UserController.getAllUsers);

export const UserRoutes = router;