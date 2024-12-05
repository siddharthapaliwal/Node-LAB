// Import the http module
const http = require('http');

// Function to create and start the server
const startServer = (port) => {
    const server = http.createServer((req, res) => {
        // Log the requested URL
        console.log(`Requested URL: ${req.url}`);

        // Handle different routes
        if (req.url === '/') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Welcome to the Home Page!');
        } else if (req.url === '/about') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('This is the About Page.');
        } else if (req.url === '/contact') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('This is the Contact Page.');
        } else {
            // Handle 404 - Not Found
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        }
    });

    // Start listening on the specified port
    server.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
};

// Export the server function
module.exports = startServer;
