const http = require('http');

// In-memory store for request counts
const requestCounts = {};

// Rate limit parameters
const RATE_LIMIT = 5; // Max requests per time window
const TIME_WINDOW = 60 * 1000; // 1 minute in milliseconds

// Middleware function for rate-limiting
const rateLimiter = (req, res, next) => {
  const userIP = req.connection.remoteAddress; // Get the user's IP address (could also use headers for identification)

  // Initialize the user's request count if it doesn't exist
  if (!requestCounts[userIP]) {
    requestCounts[userIP] = { count: 0, lastRequestTime: Date.now() };
  }

  const userRequestData = requestCounts[userIP];

  // Check if the time window has passed
  const timeElapsed = Date.now() - userRequestData.lastRequestTime;
  if (timeElapsed > TIME_WINDOW) {
    // Reset request count and last request time after the time window
    userRequestData.count = 0;
    userRequestData.lastRequestTime = Date.now();
  }

  // Check if the user has exceeded the request limit
  if (userRequestData.count >= RATE_LIMIT) {
    res.writeHead(429, { 'Content-Type': 'text/plain' });
    res.end('Too many requests, please try again later.');
  } else {
    // Increment the request count
    userRequestData.count++;
    next(); // Continue to the next middleware or request handler
  }
};

// Create the server
const server = http.createServer((req, res) => {
  // Apply rate limiting middleware
  rateLimiter(req, res, () => {
    // If not rate-limited, proceed to handle the request
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Request successful!');
  });
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
