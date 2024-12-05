// server.js
const express = require('express');
const app = express();
const PORT = 5000;

let todos = []; // In-memory array to store todos

// Middleware
app.use(express.json());

// Routes
app.get('/api/todos', (req, res) => res.json(todos));

app.post('/api/todos', (req, res) => {
  const { title } = req.body;
  const newTodo = { id: Date.now(), title, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const todoIndex = todos.findIndex((todo) => todo.id == id);

  if (todoIndex !== -1) {
    todos[todoIndex] = { ...todos[todoIndex], title, completed };
    res.json(todos[todoIndex]);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

app.delete('/api/todos/:id', (req, res) => {
  const { id } = req.params;
  todos = todos.filter((todo) => todo.id != id);
  res.status(204).end();
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
