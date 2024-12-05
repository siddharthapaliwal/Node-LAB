const http = require('http');
const url = require('url');

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url.startsWith('/api/search')) {
    // Parse the query parameters
    const queryObject = url.parse(req.url, true).query;

    // Log the query parameters to the console
    console.log('Received Query Parameters:', queryObject);

    // Extract the 'q' parameter
    const searchQuery = queryObject.q;

    if (searchQuery) {
      // Respond with a JSON object containing the search query
      const response = {
        query: searchQuery,
        message: `You searched for: ${searchQuery}`,
      };

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(response));
    } else {
      // Handle missing 'q' parameter
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({
          error: 'Missing query parameter "q". Please provide a search query.',
        })
      );
    }
  } else {
    // Handle undefined routes
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Route not found' }));
  }
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
