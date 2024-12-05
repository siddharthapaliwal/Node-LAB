const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());

// In-memory data store (array of books)
let books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: '1984', author: 'George Orwell' },
];

// CREATE: Add a new book
app.post('/x', (req, res) => {
    const { title, author } = req.body;
    const newBook = { id: books.length + 1, title, author };
    books.push(newBook);
    res.status(201).json(newBook);
});

// READ: Get all books
app.get('/api/books', (req, res) => {
    res.json(books);
});

// READ: Get a specific book by ID
app.get('/api/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
});

// UPDATE: Update an existing book
app.put('/api/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) return res.status(404).json({ message: 'Book not found' });

    const { title, author } = req.body;
    book.title = title || book.title;
    book.author = author || book.author;

    res.json(book);
});

// DELETE: Delete a book
app.delete('/api/books/:id', (req, res) => {
    const index = books.findIndex(b => b.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Book not found' });

    books.splice(index, 1);
    res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

//  http://localhost:3000/api/books
//  http://localhost:3000/x
//  http://localhost:3000//api/books/:id