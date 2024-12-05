const express = require('express');
const connectDB = require('./db'); // MongoDB connection file
const Item = require('./models/Item'); // Mongoose model
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// CRUD Routes

// 1. Create Item
app.post('/api/items', async (req, res) => {
  try {
    const newItem = new Item(req.body); // Create a new item instance
    await newItem.save(); // Save the item to the database
    res.status(201).json({ success: true, data: newItem });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// 2. Read All Items
app.get('/api/items', async (req, res) => {
  try {
    const items = await Item.find(); // Retrieve all items
    res.json({ success: true, data: items });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 3. Read Single Item
app.get('/api/items/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id); // Retrieve item by ID
    if (!item) {
      return res.status(404).json({ success: false, message: 'Item not found' });
    }
    res.json({ success: true, data: item });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// 4. Update Item
app.put('/api/items/:id', async (req, res) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedItem) {
      return res.status(404).json({ success: false, message: 'Item not found' });
    }
    res.json({ success: true, data: updatedItem });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

// 5. Delete Item
app.delete('/api/items/:id', async (req, res) => {
  try {
    const deletedItem = await Item.findByIdAndDelete(req.params.id);
    if (!deletedItem) {
      return res.status(404).json({ success: false, message: 'Item not found' });
    }
    res.json({ success: true, message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
