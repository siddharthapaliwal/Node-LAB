const express = require("express");
const app = express();
const userRoutes = require("./routes/userRoutes");

// Middleware to parse JSON requests
app.use(express.json());

// Use the user-related routes
app.use("/api/users", userRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
