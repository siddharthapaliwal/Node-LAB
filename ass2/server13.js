// Import express
const express = require('express');

// Initialize the app
const app = express();

// Define the port
const port = 3000;

// Create the /api/search route
app.get('/api/search', (req, res) => {
    // Extract the query parameter 'q' from the request
    const searchTerm = req.query.q;

    // Log the query parameter to the console
    console.log(`Received search term: ${searchTerm}`);

    // Respond with a JSON object
    res.json({
        query: searchTerm,
        message: "Search received"
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// http://localhost:3000/api/search?q=example
// url--
