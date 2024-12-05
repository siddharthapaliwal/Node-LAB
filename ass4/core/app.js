const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const apiRoutes = require('./routes/api');

// CORS Configuration
const corsOptions = {
    origin: ['http://example.com', 'http://localhost:4000'], // Allowed origins
    methods: ['GET', 'POST'],
    credentials: true,
};

// Apply CORS and JSON middleware
app.use(cors(corsOptions));
app.use(express.json());

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/api', apiRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
