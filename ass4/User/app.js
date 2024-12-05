const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');  // Import the User model

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// MongoDB Atlas connection string
const dbURI = 'mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority';

// Connect to MongoDB using Mongoose
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error.message));

// POST route to create a new user
app.post('/users', async (req, res) => {
  try {
    // Create a new user from the request body
    const { name, email, password } = req.body;
    const newUser = new User({ name, email, password });

    // Save the user to the database
    await newUser.save();
    res.status(201).send('User created successfully');
  } catch (error) {
    res.status(500).send('Error creating user: ' + error.message);
  }
});

// Set up the server to listen on a specified port
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
// npm run dev
// {
//     "name": "John Doe",
//     "email": "john.doe@example.com",
//     "password": "password123"
//   }
