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
    return res.status(404).json({ message: 'Item not found' });
  }

  item.name = req.body.name || item.name;
  item.description = req.body.description || item.description;

  res.json(item);
});

// Route: DELETE /api/items/:id - Delete an item by ID
app.delete('/api/items/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex((item) => item.id === id);

  if (itemIndex === -1) {
    return res.status(404).json({ message: 'Item not found' });
  }

  const deletedItem = items.splice(itemIndex, 1);
  res.json(deletedItem[0]);
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
