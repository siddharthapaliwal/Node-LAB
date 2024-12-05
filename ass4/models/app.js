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

// DELETE route to delete a user by ID
app.delete('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;  // Extract user ID from URL parameters

    // Attempt to find and delete the user by their ID
    const user = await User.findByIdAndDelete(userId);

    // Check if the user was found and deleted
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return a success message
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    // Handle errors such as invalid ID format or database issues
    res.status(500).json({ message: 'Error deleting user', error: error.message });
  }
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
