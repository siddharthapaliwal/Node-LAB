const express = require('express');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid'); // For generating unique IDs

const app = express();
app.use(bodyParser.json()); // Middleware to parse JSON request bodies

// In-memory array to store todos
let todos = [];

// Routes

// 1. GET /api/todos - Retrieve the list of todos
app.get('/api/todos', (req, res) => {
    res.status(200).send(todos);
});

// 2. POST /api/todos - Create a new todo
app.post('/api/todos', (req, res) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).send({ message: 'Title and description are required' });
    }

    const newTodo = {
        id: uuidv4(), // Generate a unique ID
        title,
        description,
        completed: false, // Default to incomplete
    };

    todos.push(newTodo);
    res.status(201).send(newTodo);
});

// 3. PUT /api/todos/:id - Update a todo by ID
app.put('/api/todos/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    const todo = todos.find((t) => t.id === id);

    if (!todo) {
        return res.status(404).send({ message: 'Todo not found' });
    }

    // Update the todo fields
    if (title !== undefined) todo.title = title;
    if (description !== undefined) todo.description = description;
    if (completed !== undefined) todo.completed = completed;

    res.status(200).send(todo);
});

// 4. DELETE /api/todos/:id - Delete a todo by ID
app.delete('/api/todos/:id', (req, res) => {
    const { id } = req.params;

    const todoIndex = todos.findIndex((t) => t.id === id);

    if (todoIndex === -1) {
        return res.status(404).send({ message: 'Todo not found' });
    }

    const deletedTodo = todos.splice(todoIndex, 1);
    res.status(200).send(deletedTodo);
});

// Default route
app.get('/', (req, res) => {
    res.send('Welcome to the Todo API!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
// npm install mongoose
// npm install jois