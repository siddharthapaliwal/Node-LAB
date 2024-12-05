const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
  if (req.url === '/old-url') {
    // Redirect from /old-url to /new-url
    res.writeHead(301, { Location: '/new-url' }); // 301 Moved Permanently
    res.end(); // End the response
  } else if (req.url === '/new-url') {
    // Handle the new URL
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to the new URL!');
  } else {
    // Handle undefined routes
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page Not Found');
  }
});

// Start the server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
