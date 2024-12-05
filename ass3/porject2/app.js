const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Middleware to parse JSON data
app.use(bodyParser.json());

// Secret key for JWT (should be in environment variables)
const SECRET_KEY = process.env.SECRET_KEY || "yourSecretKey";

// Mock database (for simplicity, we'll use an in-memory user object)
let users = [];

// Registration route - generates a JWT
app.post('/register', (req, res) => {
    const { username, password } = req.body;

    // Check if user already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: "User already exists." });
    }

    // Create a new user (store username and password for simplicity)
    const newUser = { username, password };
    users.push(newUser);

    // Generate JWT token
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });

    res.status(201).json({ message: "User registered successfully", token });
});

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Bearer <token>

    if (!token) {
        return res.status(403).json({ message: "Token is required" });
    }

    // Verify the token
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token" });
        }
        req.user = decoded; // Attach decoded user info to request
        next();
    });
};

// Protected route
app.get('/api/protected', verifyToken, (req, res) => {
    res.status(200).json({ message: `Welcome, ${req.user.username}! You have access to this protected route.` });
});

// Default route
app.get('/', (req, res) => {
    res.send("JWT Authentication System");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
