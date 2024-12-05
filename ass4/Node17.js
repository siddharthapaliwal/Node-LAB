// curl -X PUT http://localhost:3000/users/<user-id> -H "Content-Type: application/json" -d '{"name": "John Updated", "email": "john.updated@example.com"}'
//const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');  // Import the User model

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// MongoDB Atlas connection string (replace with your actual connection string)
const dbURI = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority';

// Connect to MongoDB using Mongoose
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error.message));

// PUT route to update a user by ID
app.put('/users/:id', async (req, res) => {
  const { id } = req.params;  // Get the user ID from the URL parameter
  const updatedData = req.body;  // Get the updated user data from the request body

  try {
    // Find the user by ID and update their information
    const updatedUser = await User.findByIdAndUpdate(id, updatedData, { new: true });

    // If the user is not found, return a 404 error
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found.' });
    }

    // Return the updated user data in the response
    res.status(200).json({ updatedUser });
  } catch (error) {
    // Handle any errors that occur during the update process
    console.error('Error updating user:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Set up the server to listen on a specified port
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

