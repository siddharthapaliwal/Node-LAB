const express = require("express");
const app = express();
const indexRoutes = require("./routes/index");
const errorHandler = require("./Middleware/errorHandler");

// Middleware to parse JSON
app.use(express.json());

// Register routes
app.use("/", indexRoutes);

// Error handling middleware (should be last middleware)
app.use(errorHandler);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
