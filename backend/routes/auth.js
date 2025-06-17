const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");

// Register Route
router.post("/register", async (req, res) => {
  try {
    const { accountNumber, fullName, mobileNumber, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ accountNumber }, { mobileNumber }],
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this account or mobile number" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save user
    const newUser = new User({
      accountNumber,
      fullName,
      mobileNumber,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });

  } catch (err) {
    console.error("Registration error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { mobileNumber, password } = req.body;

  try {
    // Find user by mobile number
    const user = await User.findOne({ mobileNumber });

    if (!user) {
      return res.status(400).json({ success: false, message: "Mobile number not registered" });
    }

    // Compare password using bcrypt
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Incorrect password" });
    }

    // Send response with user data
    res.json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        name: user.fullName,
        mobileNumber: user.mobileNumber,
      },
    });
  } catch (err) {
    console.error("Error during login:", err);
    res.status(500).json({ success: false, message: "Server error. Please try again later." });
  }
});

// Export the router
module.exports = router;
