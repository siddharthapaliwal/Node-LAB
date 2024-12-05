const express = require('express');
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Sample data to simulate a simple database (in-memory storage)
let items = [
  { id: 1, name: 'Item 1', description: 'This is item 1' },
  { id: 2, name: 'Item 2', description: 'This is item 2' },
  { id: 3, name: 'Item 3', description: 'This is item 3' },
];

// 1. GET route - Get all items or filter by query parameters
app.get('/items', (req, res) => {
  const { search } = req.query;  // Query string parameter "search"

  if (search) {
    // Filter items based on the search query
    const filteredItems = items.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    res.json(filteredItems);
  } else {
    // Return all items if no search query is provided
    res.json(items);
  }
});

// 2. POST route - Add a new item
app.post('/items', (req, res) => {
  const { name, description } = req.body;  // Body parameters "name" and "description"

  // Ensure that both name and description are provided
  if (!name || !description) {
    return res.status(400).json({ message: 'Name and description are required.' });
  }

  // Create a new item and add it to the items array
  const newItem = {
    id: items.length + 1,
    name,
    description,
  };
  items.push(newItem);

  res.status(201).json(newItem);  // Respond with the newly created item
});

// 3. DELETE route - Delete an item by ID
app.delete('/items/:id', (req, res) => {
  const { id } = req.params;  // Path parameter "id"

  // Find the item by ID
  const itemIndex = items.findIndex(item => item.id === parseInt(id));

  if (itemIndex === -1) {
    return res.status(404).json({ message: 'Item not found' });
  }

  // Remove the item from the array
  const deletedItem = items.splice(itemIndex, 1);

  res.json({ message: 'Item deleted', item: deletedItem });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
