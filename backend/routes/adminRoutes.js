const express = require("express");
const jwt = require("jsonwebtoken");
const { protect } = require("../middleware/authMiddleware");
const Admin = require("../models/Admin");
const router = express.Router();

// ✅ Register admin
router.post("/register", async (req, res) => {
  const { name, email, phone, businessName, password } = req.body;

  try {
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: "Admin already exists" });
    }

    const newAdmin = new Admin({
      name,
      email,
      phone,
      businessName,
      password
    });

    await newAdmin.save();
    res.status(201).json({ message: "Admin registered successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

// ✅ Login admin
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const admin = await Admin.findOne({ email });
    if (!admin || admin.password !== password) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({
      token,
      name: admin.name,
      email: admin.email,
      profileImage: admin.profileImage || "/images/default-avatar.png"
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

// ✅ Get Admin profile
router.get("/profile", protect, async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin._id).select("name email phone businessName password profileImage");
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.json(admin);
  } catch (error) {
    res.status(500).json({ message: "Error fetching profile" });
  }
});

// ✅ Update profile (editable: name, phone)
router.put("/profile", protect, async (req, res) => {
  try {
    const admin = await Admin.findById(req.admin._id);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    admin.name = req.body.name || admin.name;
    admin.phone = req.body.phone || admin.phone;

    await admin.save();
    res.json({ message: "Profile updated successfully", admin });
  } catch (error) {
    console.error("Error updating profile", error);
    res.status(500).json({ message: "Error updating profile" });
  }
});

module.exports = router;
