const express = require("express");
const router = express.Router();
const Order = require("../models/orderModel");
const Product = require("../models/Product");

// Create new order
router.post("/", async (req, res) => {
  try {
    const { products } = req.body;

    let total = 0;
    for (const item of products) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return res.status(400).json({error: "Invalid product ID"});
      }
      total += product.price * item.quantity;
    }

    const order = new Order({
      products,
      total,
    });

    await order.save();
    res.status(201).json(order);
  } catch (err) {
    console.error("Order creation error", err);
    res.status(500).json({ error: err.message });
  }
});

// Get all orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find()
    .sort({ createdAt : -1 })
    .populate("products.productId", "name");
    res.json(orders);
  } catch (err) {
    console.error("Error fetching orders", err);
    res.status(500).json({ error: err.message });
  }
});

// Toggle Received Status
router.put("/received/:id", async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });

    order.received = !order.received;
    await order.save();
    res.json({ message: "Order Updated", received: order.received });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete an order
router.delete("/:id", async (req, res) => {
  try {
    const deletedOrder = await Order.findByIdAndDelete(req.params.id);
    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }
    res.json({ message: "Order Deleted Successfully" });
  } catch (err) {
    console.error("Error deleting order", err);
    res.status(500).json({ error: err.message });
  }
})

// export default router;
module.exports = router;
