import { Order } from "./orders.model.js";

// create order
const createOrder = async (payload: any) => {
  const order = await Order.create(payload);

  return order;
};

// get all orders
const getAllOrders = async () => {
  const orders = await Order.find()
    .populate("userId")
    .populate("productId");

  return orders;
};

export const OrderService = {
  createOrder,
  getAllOrders,
};