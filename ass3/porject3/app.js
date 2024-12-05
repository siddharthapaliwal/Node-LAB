const express = require('express');
const bodyParser = require('body-parser');
const rateLimit = require('express-rate-limit');  // Import the rate limit package

const app = express();

// Middleware to parse JSON data
app.use(bodyParser.json());

// Set up rate limiting: 100 requests per hour from a single IP
const limiter = rateLimit({
    windowMs: 60 * 60 * 1000, // 1 hour
    max: 100, // Limit each IP to 100 requests per hour
    message: "Too many requests from this IP, please try again after an hour",
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Apply rate limiting middleware globally or to specific routes
app.use(limiter);

// Sample route
app.get('/', (req, res) => {
    res.send("Welcome to the rate-limited API!");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
