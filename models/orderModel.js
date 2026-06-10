import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "Product",
      },
    ],
    buyer: {
      type: mongoose.ObjectId,
      ref: "User",
    },
    address: {
      type: String,
      required: true,
    },
    payment: {
      method: {
        type: String,
        default: "COD",
      },
      status: {
        type: String,
        default: "Placed",
      },
    },
    status: {
      type: String,
      default: "Processing",
      enum: ["Processing", "Shipped", "Delivered", "Cancelled"],
    },
  },
  { timestamps: true }
);

const orderModel = mongoose.model("Order", orderSchema);

export default orderModel;
