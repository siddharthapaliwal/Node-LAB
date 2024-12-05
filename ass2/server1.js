// Import the http module
const http = require('http');

// Define the port for the server
const PORT = 3000;

// Sample JSON array of users
const users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com' }
];

// Create the server
const server = http.createServer((req, res) => {
    // Log the requested URL and method
    console.log(`Requested URL: ${req.url}, Method: ${req.method}`);

    // Handle GET requests to /api/users
    if (req.method === 'GET' && req.url === '/api/users') {
        // Set the Content-Type header to application/json
        res.setHeader('Content-Type', 'application/json');

        // Respond with the JSON array of users
        res.writeHead(200);
        res.end(JSON.stringify(users));
    } else {
        // Default response for unknown routes
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
