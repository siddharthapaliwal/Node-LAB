// Importing required modules
const express = require('express');
const axios = require('axios');

// Initialize the Express app
const app = express();

// Define a route to fetch posts from JSONPlaceholder
app.get('/posts', async (req, res) => {
  try {
    // Fetch data from the JSONPlaceholder API using axios
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    
    // Return the fetched data as JSON
    res.json(response.data);
  } catch (error) {
    // In case of an error, send a 500 status with an error message
    res.status(500).send("Error fetching data.");
  }
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
