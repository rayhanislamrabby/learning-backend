import type { Request, Response } from "express";

import catchAsync from "../../../utils/tryCatch.js";
import { ApiResponse } from "../../../utils/apiResponse.js";

import { ProductService } from "./products.service.js";

// create product
const createProduct = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.createProduct(req.body);

  ApiResponse.success(res, result, "Product created successfully");
});

// get all products
const getAllProducts = catchAsync(async (req: Request, res: Response) => {
  const result = await ProductService.getAllProducts();

  ApiResponse.success(res, result, "Products fetched successfully");
});

export const ProductController = {
  createProduct,
  getAllProducts,
};