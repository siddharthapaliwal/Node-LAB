// Importing required modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an instance of express app
const app = express();

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Set up POST route to handle user data
app.post('/api/users', (req, res) => {
  const userData = req.body; // Accessing the user data from the request body
  
  if (!userData.name || !userData.email) {
    return res.status(400).json({ message: "Name and email are required!" });
  }

  // Sending a success response with the received data
  res.status(200).json({
    message: 'User data received successfully!',
    userData: userData
  });
});

// Start the server on a specific port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
