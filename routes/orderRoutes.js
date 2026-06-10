import express from "express";
import { requiresSignIn } from "../middlewares/authMiddleware.js";
import Order from "../models/orderModel.js";

const router = express.Router();

// POST route for creating an order
router.post("/create-order", requiresSignIn, async (req, res) => {
  try {
    const { products, buyer, address, payment } = req.body;

    const order = new Order({
      products,
      buyer,
      address,
      payment,
    });

    await order.save();

    res.status(200).send({
      success: true,
      message: "Order Placed Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Order creation failed", error });
  }
});

// GET route to fetch orders for a specific user
router.get("/:userId", requiresSignIn, async (req, res) => {
  try {
    const orders = await Order.find({ buyer: req.params.userId })
      .populate("products.product", "name price")  // Populate the product details
      .exec();

    if (!orders) {
      return res.status(404).json({ message: "No orders found" });
    }

    res.status(200).json({ orders });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch orders" });
  }
});

export default router;
