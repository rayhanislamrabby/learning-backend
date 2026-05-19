import type { Request, Response } from "express";

import catchAsync from "../../../utils/tryCatch.js";
import { ApiResponse } from "../../../utils/apiResponse.js";

import { OrderService } from "./orders.service.js";

// create order
const createOrder = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.createOrder(req.body);

  ApiResponse.success(res, result, "Order created successfully");
});

// get all orders
const getAllOrders = catchAsync(async (req: Request, res: Response) => {
  const result = await OrderService.getAllOrders();

  ApiResponse.success(res, result, "Orders fetched successfully");
});

export const OrderController = {
  createOrder,
  getAllOrders,
};