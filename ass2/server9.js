const http = require('http');
const fs = require('fs');
const querystring = require('querystring');

// Function to serve the form
const serveForm = (res) => {
  fs.readFile('form.html', (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
      return;
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
};

// Create the server
const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    // Serve the HTML form
    serveForm(res);
  } else if (req.method === 'POST' && req.url === '/submit') {
    // Handle form submission
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const formData = querystring.parse(body);

      // Log the submitted data
      console.log('Form Data Received:', formData);

      // Respond with a success message
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(`
        <h1>Form Submission Successful</h1>
        <p>Name: ${formData.name}</p>
        <p>Email: ${formData.email}</p>
        <a href="/">Go back</a>
      `);
    });
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
// node server9.js
