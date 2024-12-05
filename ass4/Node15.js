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

// POST route to create a new user
app.post('/users', async (req, res) => {
  try {
    // Destructure the data from the request body
    const { name, email, password } = req.body;

    // Check if all required fields are provided
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Please provide name, email, and password.' });
    }

    // Create a new user instance
    const newUser = new User({
      name,
      email,
      password,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Send the created user data as the response
    res.status(201).json({
      message: 'User created successfully!',
      user: savedUser,
    });

  } catch (error) {
    // Handle any errors that occur during the process
    console.error('Error creating user:', error.message);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Set up the server to listen on a specified port
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// curl -X POST http://localhost:3000/users \
// -H "Content-Type: application/json" \
// -d '{"name": "John Doe", "email": "john.doe@example.com", "password": "password123"}'
