const express = require('express');
const authRoutes = require('./routes/authRoutes');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;
