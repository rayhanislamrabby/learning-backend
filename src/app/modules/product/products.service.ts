import { Product } from "./products.model.js";

// create product
const createProduct = async (payload: any) => {
  const product = await Product.create(payload);

  return product;
};

// get all products
const getAllProducts = async () => {
  const products = await Product.find();

  return products;
};

export const ProductService = {
  createProduct,
  getAllProducts,
};