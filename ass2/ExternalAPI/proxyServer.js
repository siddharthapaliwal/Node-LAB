const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Initialize Express
const app = express();

// The external API endpoint you want to proxy (JSONPlaceholder in this case)
const targetAPI = 'https://jsonplaceholder.typicode.com';

// Middleware to log requests and responses
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`);
  const oldSend = res.send;
  res.send = function (data) {
    console.log('Response data:', data);
    oldSend.apply(res, arguments);
  };
  next();
});

// Proxy setup for GET requests to /api/posts to JSONPlaceholder API
app.use('/api/posts', createProxyMiddleware({
  target: targetAPI,
  changeOrigin: true,   // Modify the origin of the request
  logLevel: 'debug',    // Log request details to the console
  pathRewrite: {
    '^/api/posts': '/posts',  // Rewrite the URL path to match the target API
  },
}));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Proxy server running at http://localhost:${PORT}`);
});
