const http = require('http');

// Middleware function for logging requests
const logger = (req, res, next) => {
  const logMessage = `${new Date().toISOString()} - ${req.method} ${req.url}`;
  console.log(logMessage);

  // Call the next middleware or route handler
  if (next) next();
};

// Server creation
const server = http.createServer((req, res) => {
  // Call the logger middleware
  logger(req, res);

  // Handle different routes
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the Home Page');
  } else if (req.method === 'GET' && req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('About Page');
  } else if (req.method === 'POST' && req.url === '/submit') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      console.log(`Received Data: ${body}`);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Data Submitted Successfully');
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page Not Found');
  }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
