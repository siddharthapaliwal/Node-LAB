const express = require('express');
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

// GET route to retrieve all users
app.get('/users', async (req, res) => {
  try {
    // Use Mongoose's find() method to fetch all users
    const users = await User.find();

    // If no users found, send a message indicating that
    if (users.length === 0) {
      return res.status(404).json({ message: 'No users found.' });
    }

    // Return the list of users as a JSON response
    res.status(200).json({ users });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error('Error retrieving users:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Set up the server to listen on a specified port
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
//curl http://localhost:3000/users
//node Node16.js
