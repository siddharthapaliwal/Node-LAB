const express = require('express');
const rateLimiter = require('./middlewares/rateLimiter');
const itemsRoutes = require('./routes/items');

const app = express();

// Apply the rate limiter only to the /api/items route
app.use('/api', rateLimiter, itemsRoutes);

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
