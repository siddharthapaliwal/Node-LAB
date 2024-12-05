// Import necessary packages
require('dotenv').config();  // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Get the environment variables
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbName = process.env.DB_NAME;
const port = process.env.PORT || 3000;

// MongoDB connection string
const dbConnectionString = `mongodb://${dbUser}:${dbPass}@${dbHost}/${dbName}`;

// Connect to the MongoDB database
mongoose.connect(dbConnectionString, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to the database'))
    .catch(err => console.error('Database connection error:', err));

// Sample route
app.get('/', (req, res) => {
    res.send('Hello, Express app running with environment variables!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
