const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  // Set custom headers
  res.setHeader('X-Powered-By', 'Node.js');
  res.setHeader('Content-Type', 'text/plain');

  // Log the custom headers
  console.log('Response Headers:', res.getHeaders());

  // Respond to the request
  res.writeHead(200); // OK status code
  res.end('Custom headers set successfully!');
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
