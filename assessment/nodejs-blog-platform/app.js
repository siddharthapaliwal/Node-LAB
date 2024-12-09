const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();

// Set up Handlebars as the view engine
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

// Load Routes
const indexRoutes = require("./routes/index");
app.use("/", indexRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
// node -v
// pwd
// C:\Users\Dell\OneDrive\Desktop\assessment\nodejs-blog-platform
// ls