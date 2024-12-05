const express = require('express');
const app = express();

app.use(express.json());

// GET route
app.get('/api/hello', (req, res) => {
    res.status(200).json({ message: 'Hello, world!' });
});

// POST route
app.post('/api/echo', (req, res) => {
    const { data } = req.body;
    if (data) {
        res.status(200).json({ echoed: data });
    } else {
        res.status(400).json({ error: 'No data provided' });
    }
});

module.exports = app;
