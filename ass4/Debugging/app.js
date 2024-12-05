const express = require('express');
const app = express();

app.use(express.json());

// Route 1: GET /api/hello
app.get('/api/hello', (req, res) => {
  res.status(200).json({ message: 'Hello, world!' });
});

// Route 2: POST /api/add
app.post('/api/add', (req, res) => {
  const { a, b } = req.body;
  if (typeof a === 'number' && typeof b === 'number') {
    return res.status(200).json({ result: a + b });
  }
  return res.status(400).json({ error: 'Invalid input' });
});

// Start server (if not in test mode)
if (require.main === module) {
  app.listen(3000, () => console.log('Server running on port 3000'));
}

module.exports = app;
