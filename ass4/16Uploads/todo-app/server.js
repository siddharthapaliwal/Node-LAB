const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const todoRoutes = require('./routes/todoRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());

// MongoDB Connection (comment out if using in-memory storage)
mongoose
  .connect('mongodb://127.0.0.1:27017/todoApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error(err));

// Routes
app.use('/api/todos', todoRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
