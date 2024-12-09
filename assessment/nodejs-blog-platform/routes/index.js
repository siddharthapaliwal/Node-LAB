const express = require("express");
const router = express.Router();

// Dummy blog data
const blogs = [
  { id: 1, title: "Blog Post 1", content: "This is the first blog post." },
  { id: 2, title: "Blog Post 2", content: "This is the second blog post." },
];

// Home Route
router.get("/", (req, res) => {
  res.render("home", { blogs });
});

// About Us Route
router.get("/about", (req, res) => {
  res.render("about");
});

// Contact Us Route
router.get("/contact", (req, res) => {
  res.render("contact");
});

module.exports = router;
