const express = require('express');
const app = express();

// Logging Middleware
const requestLogger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const timestamp = new Date().toISOString();

    console.log(`[${timestamp}] ${method} ${url}`);

    next(); // Pass control to the next middleware
};

// Apply middleware to all routes
app.use(requestLogger);

// Sample Routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

// Start Server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
