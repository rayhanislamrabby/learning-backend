import express, { Router } from "express";

import { OrderController } from "./orders.controller.js";

const router: Router = express.Router();

// create order
router.post("/", OrderController.createOrder);

// get all orders
router.get("/", OrderController.getAllOrders);

export const OrderRoutes = router;