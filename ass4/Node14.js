//mkdir nodejs-app
//cd nodejs-app
//npm init -y
// Install Required Packages
// Install Required Packages
// Now, install the required packages:

// express: A minimal and flexible Node.js web application framework.
// mongoose: MongoDB object modeling for Node.js.
// nodemon: A utility that monitors for file changes and automatically restarts the server.
// npm install express mongoose
// npm install --save-dev nodemon

// Import express and mongoose
//npm install mongoose
const express = require('express');
const mongoose = require('mongoose');

// Initialize express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Connect to MongoDB using mongoose
mongoose.connect('mongodb://localhost:27017/test_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Error connecting to MongoDB:', error));

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Set up the server to listen on a specified port
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
//Connected to MongoDB
//node app.js  # If using regular Node.js
//Connected to MongoDB
// Server is running on http://localhost:3000


