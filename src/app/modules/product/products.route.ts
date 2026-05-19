import express, { Router } from "express";

import { ProductController } from "./products.controller.js";

const router: Router = express.Router();

// create product
router.post("/", ProductController.createProduct);

// get all products
router.get("/", ProductController.getAllProducts);

export const ProductRoutes = router;