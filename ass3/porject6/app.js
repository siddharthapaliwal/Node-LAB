// npm install cors
const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for all origins
// Uncomment below line if you want to allow all origins
// app.use(cors());

// Configure CORS to allow specific origins
const allowedOrigins = ['http://localhost:4000', 'http://example.com']; // Add allowed origins here

const corsOptions = {
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps, Postman)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};

app.use(cors(corsOptions));

// Example route
app.get('/', (req, res) => {
    res.send('CORS is configured!');
});

// Example protected route
app.get('/protected', (req, res) => {
    res.send('This is a protected route!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
