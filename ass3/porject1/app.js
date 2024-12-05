const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware to parse JSON data
app.use(bodyParser.json());

// Hardcoded credentials for simplicity
const validCredentials = {
    username: "admin",
    password: "password123",
};

// Login route
app.post("/login", (req, res) => {
    const { username, password } = req.body;

    // Validate credentials
    if (username === validCredentials.username && password === validCredentials.password) {
        res.status(200).json({ message: "Login successful!" });
    } else {
        res.status(401).json({ message: "Invalid username or password." });
    }
});

// Default route
app.get("/", (req, res) => {
    res.send("Basic Authentication Login System");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
