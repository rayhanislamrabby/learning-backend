import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    description: String,

    quantity: Number,

    image: String,
  },
  {
    timestamps: true,
  },
);

export const Product =
  mongoose.models.Product ||
  mongoose.model("Product", productSchema);