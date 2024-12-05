const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory array to store items
let items = [
  { id: 1, name: 'Item 1', description: 'Description for Item 1' },
  { id: 2, name: 'Item 2', description: 'Description for Item 2' },
];

// Route: GET /api/items - Get all items
app.get('/api/items', (req, res) => {
  res.json(items);
});

// Route: POST /api/items - Add a new item
app.post('/api/items', (req, res) => {
  if (!req.body.name || !req.body.description) {
    return res.status(400).json({ error: 'Name and description are required' });
  }

  const newItem = {
    id: items.length + 1,
    name: req.body.name,
    description: req.body.description,
  };

  items.push(newItem);
  res.status(201).json(newItem);
});

// Route: PUT /api/items/:id - Update an item by ID
app.put('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find((item) => item.id === id);

  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }

  if (req.body.name) item.name = req.body.name;
  if (req.body.description) item.description = req.body.description;

  res.json(item);
});

// Route: DELETE /api/items/:id - Delete an item by ID
app.delete('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex((item) => item.id === id);

  if (itemIndex === -1) {
    return res.status(404).json({ error: 'Item not found' });
  }

  const deletedItem = items.splice(itemIndex, 1);
  res.json(deletedItem[0]);
});

// Middleware: Handle 404 errors for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ error: 'Page not found!' });
});

// Middleware: Handle server errors
app.use((err, req, res, next) => {
  console.error(`Server Error: ${err.message}`); // Log the error to the console
  res.status(500).json({ error: 'Internal Server Error' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
