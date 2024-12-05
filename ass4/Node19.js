const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); // Assuming User model is located in models/User.js

const app = express();

// Middleware to parse JSON data
app.use(express.json());

// MongoDB connection string (replace with your actual connection URL)
mongoose.connect('mongodb://localhost:27017/yourdb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// GET route to retrieve users, with optional query parameters
app.get('/users', async (req, res) => {
  try {
    // Extract query parameters (e.g., name, email) from the request
    const { name, email } = req.query;

    // Build the filter object based on query parameters
    const filter = {};
    if (name) {
      filter.name = { $regex: name, $options: 'i' }; // Case-insensitive search for name
    }
    if (email) {
      filter.email = { $regex: email, $options: 'i' }; // Case-insensitive search for email
    }

    // Retrieve users based on the filter object
    const users = await User.find(filter);

    // If no users are found, return a message
    if (users.length === 0) {
      return res.status(404).json({ message: 'No users found matching the criteria' });
    }

    // Return the filtered users as JSON
    res.status(200).json(users);
  } catch (error) {
    // Handle errors such as database issues
    res.status(500).json({ message: 'Error retrieving users', error: error.message });
  }
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
