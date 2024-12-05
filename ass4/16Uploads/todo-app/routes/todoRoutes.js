const express = require('express');
const router = express.Router();

// If using MongoDB
const Todo = require('../models/Todo');

// In-memory storage (if not using MongoDB)
// const todos = [];

// GET /api/todos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find(); // Use `todos` array for in-memory
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST /api/todos
router.post('/', async (req, res) => {
    try {
        const { title, completed } = req.body;
        const newTodo = new Todo({ title, completed }); // Push to `todos` array for in-memory
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// PUT /api/todos/:id
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTodo = await Todo.findByIdAndUpdate(id, req.body, {
            new: true,
        }); // Update in `todos` array for in-memory
        res.json(updatedTodo);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE /api/todos/:id
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id); // Filter and remove from `todos` array for in-memory
        res.json({ message: 'Todo deleted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
