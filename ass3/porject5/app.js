const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Middleware to parse JSON data
app.use(bodyParser.json());

// Example of a simple route
app.get('/', (req, res) => {
    res.send("CORS is enabled on this server!");
});

// Example of a protected route with specific CORS configuration
const corsOptions = {
    origin: 'http://allowed-origin.com',  // Replace with the specific allowed origin
    methods: ['GET', 'POST'],            // Allow only specific HTTP methods
    allowedHeaders: ['Content-Type'],    // Allow only specific headers
};

app.get('/protected', cors(corsOptions), (req, res) => {
    res.send("This route is CORS-enabled for a specific origin.");
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
