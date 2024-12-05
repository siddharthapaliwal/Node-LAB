const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
app.use(express.json());

const JWT_SECRET = "your_secret_key"; // Replace with a strong secret
const users = []; // Store users in-memory (replace with DB for production)

// Register Route
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password are required." });
  }

  const hashedPassword = await bcrypt.hash(password, 10); // Hash password
  users.push({ username, password: hashedPassword });

  res.status(201).json({ message: "User registered successfully." });
});

// Login Route
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);
  if (!user) {
    return res.status(401).json({ message: "Invalid username or password." });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid username or password." });
  }

  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });
  res.status(200).json({ message: "Login successful.", token });
});

// Middleware to Protect Routes
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Authorization token is required." });
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach user info to request
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid or expired token." });
  }
};

// Public Route
app.get("/", (req, res) => {
  res.send("Public route: No authentication needed.");
});

// Protected Route
app.get("/protected", authenticateJWT, (req, res) => {
  res.send(`Protected route: Welcome, ${req.user.username}!`);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
//http://localhost:3000/protected
// http://localhost:3000/