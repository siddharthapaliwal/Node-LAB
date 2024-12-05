const express = require('express');
const app = express();

// Import routes for v1 and v2
const v1ItemsRoutes = require('./routes/v1/items');
const v2ItemsRoutes = require('./routes/v2/items');

// Use routes for each version
app.use('/api/v1', v1ItemsRoutes);
app.use('/api/v2', v2ItemsRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('Welcome to the API! Use /api/v1/items or /api/v2/items');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
