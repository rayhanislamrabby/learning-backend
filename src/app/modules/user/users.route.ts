import express, { Router } from "express";

import { UserController } from "./users.controller.js";

const router: Router = express.Router();

// create user
router.post("/", UserController.createUser);

// get all users
router.get("/", UserController.getAllUsers);

// get single user
router.get("/:id", UserController.getSingleUser);

// update user
router.patch("/:id", UserController.updateUser);

// delete user
router.delete("/:id", UserController.deleteUser);

export const UserRoutes = router;