const express = require('express');
const app = express();
const PORT = 3000;

// Sample data
const items = [
  { id: 1, name: 'Laptop', description: 'A portable computer' },
  { id: 2, name: 'Phone', description: 'A mobile device' },
  { id: 3, name: 'Tablet', description: 'A touch-screen device' },
  { id: 4, name: 'Headphones', description: 'Audio listening device' },
];

// GET /api/items route
app.get('/api/items', (req, res) => {
  const { search } = req.query; // Retrieve the search query parameter

  // If no query provided, return all items
  if (!search) {
    return res.json({ success: true, data: items });
  }

  // Filter items based on the search keyword (case-insensitive)
  const filteredItems = items.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
  );

  // If no matches found, send a message
  if (filteredItems.length === 0) {
    return res.status(404).json({
      success: false,
      message: `No items found matching the search keyword: '${search}'`,
    });
  }

  // Return the filtered items
  res.json({ success: true, data: filteredItems });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
