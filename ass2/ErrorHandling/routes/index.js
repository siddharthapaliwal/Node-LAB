const express = require("express");
const router = express.Router();

// A route that works fine
router.get("/", (req, res) => {
  res.json({ message: "Welcome to the homepage!" });
});

// A route that simulates an error
router.get("/error", (req, res, next) => {
  const error = new Error("Something went wrong!");
  error.status = 500; // Set the HTTP status code for the error
  next(error); // Pass the error to the error-handling middleware
});

module.exports = router;
