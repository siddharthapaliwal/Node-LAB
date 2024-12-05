// index.js

// Import the express module
const express = require('express');

// Create an Express application
const app = express();

// Define the port number
const port = 3000;

// Define a simple GET endpoint
app.get('/api', (req, res) => {
    // Send a JSON response
    res.json({ message: 'Welcome to the API!' });
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
//http/localhost:3000/api