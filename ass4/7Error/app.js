const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Example Route
app.get('/test', (req, res) => {
  res.send('API is working!');
});

// Route to Simulate an Error
app.get('/error', (req, res, next) => {
  // Simulate an error
  const err = new Error('Something went wrong!');
  err.status = 500; // Custom status code
  next(err); // Pass the error to the error-handling middleware
});

// Centralized Error-Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = err.status || 500; // Default to 500 if no status is set
  res.status(statusCode).json({
    success: false,
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined, // Hide stack trace in production
  });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
// http://localhost:3000/test
// http://localhost:3000/error

// node app.js
