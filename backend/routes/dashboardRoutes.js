// backend/routes/dashboardRoutes.js

const express = require("express");
const router = express.Router();

// Import your models
const Product = require("../models/Product");
const Category = require("../models/Category");
const Order = require("../models/orderModel");

// GET /api/dashboard
router.get("/", async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    const totalCategories = await Category.countDocuments();
    const totalOrders = await Order.countDocuments();

    res.json({
      totalProducts,
      totalCategories,
      totalOrders
    });
  } catch (error) {
    console.error("Dashboard error:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

// export default router;
module.exports = router;
