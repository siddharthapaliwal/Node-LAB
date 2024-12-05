// Steps:
// Create a new JavaScript file for your server (e.g., server.js).
// Use the http module to create a server.
// Handle incoming GET requests and respond with a "Hello World" message.
// Listen on a specific port to start the server.
// Load the built-in http module
const http = require('http');

// Define the server
const server = http.createServer((req, res) => {
  // Check if the request is a GET request
  if (req.method === 'GET') {
    // Set the response header to indicate the content type as plain text
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    
    // Write the response body with the "Hello World" message
    res.end('Hello World');
  } else {
    // For other HTTP methods, send a 404 response
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

// Define the port and host for the server to listen on
const PORT = 3000;
const HOST = '127.0.0.1';

// Start the server
server.listen(PORT, HOST, () => {
  console.log(`Server is running at http://${HOST}:${PORT}/`);
});
