const express = require("express");
const db = require("./db"); // MongoDB connection
const folderRoutes = require("./routes/folders");
const fileRoutes = require("./routes/files");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use(folderRoutes);
app.use(fileRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
