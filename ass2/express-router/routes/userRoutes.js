const express = require("express");
const router = express.Router();

// Mock user data
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

// Route to GET all users
router.get("/", (req, res) => {
  res.json({
    success: true,
    message: "List of users",
    data: users,
  });
});

// Route to POST (add) a new user
router.post("/", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      message: "Name is required",
    });
  }

  const newUser = {
    id: users.length + 1,
    name: name,
  };

  users.push(newUser);

  res.status(201).json({
    success: true,
    message: "User added successfully",
    data: newUser,
  });
});

module.exports = router;
