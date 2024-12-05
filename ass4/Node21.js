const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User'); // Assuming User model is located in models/User.js

const app = express();

// MongoDB connection string (replace with your actual connection URL)
mongoose.connect('mongodb://localhost:27017/yourdb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// Middleware to parse JSON data
app.use(express.json());

// GET route to retrieve users with pagination
app.get('/users', async (req, res) => {
  try {
    // Get the page and limit query parameters from the request
    let { page = 1, limit = 10 } = req.query;

    // Convert the parameters to integers
    page = parseInt(page);
    limit = parseInt(limit);

    // Calculate the number of documents to skip
    const skip = (page - 1) * limit;

    // Retrieve users with pagination
    const users = await User.find()
      .skip(skip)
      .limit(limit);

    // Return the paginated users
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving users', error: error.message });
  }
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
