// src/index.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory array to store items
let items = [
    { id: 1, name: 'Item 1', description: 'Description for Item 1' },
    { id: 2, name: 'Item 2', description: 'Description for Item 2' },
];

// Retrieve all items
app.get('/api/items', (req, res) => {
    res.json(items);
});

// Retrieve a single item by ID
app.get('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = items.find((item) => item.id === id);
    if (!item) {
        return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
});

// Create a new item
app.post('/api/items', (req, res) => {
    const { name, description } = req.body;
    const newItem = {
        id: items.length + 1,
        name,
        description,
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

// Update an existing item by ID
app.put('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, description } = req.body;
    const itemIndex = items.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
        return res.status(404).json({ message: 'Item not found' });
    }
    items[itemIndex] = { id, name, description };
    res.json(items[itemIndex]);
});

// Delete an item by ID
app.delete('/api/items/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const itemIndex = items.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
        return res.status(404).json({ message: 'Item not found' });
    }
    items.splice(itemIndex, 1);
    res.json({ message: `Item with id ${id} deleted` });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
// http:/localhost:3000/api/items
// http:/localhost:3000/api/items/:id
// http:/localhost:3000/api/items
// http:/localhost:3000/api/items/:id