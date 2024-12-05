const express = require('express');
const app = express();

// Custom middleware to log the request method and URL
const logRequestDetails = (req, res, next) => {
  console.log(`${req.method} request made to: ${req.originalUrl}`);
  next();  // Pass control to the next middleware or route handler
};

// Use the custom middleware globally
app.use(logRequestDetails);

// Route 1: Home Page
app.get('/', (req, res) => {
  res.send('Home Page');
});

// Route 2: About Page
app.get('/about', (req, res) => {
  res.send('About Page');
});

// Route 3: Contact Page
app.get('/contact', (req, res) => {
  res.send('Contact Page');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
