const mongoose = require("mongoose");

const MONGO_URI = "mongodb://localhost:27017/your-database-name"; // Replace with your MongoDB URI

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

module.exports = db;
