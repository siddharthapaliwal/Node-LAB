// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Initialize express app
const app = express();

// Use body-parser middleware to parse JSON request bodies
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/userdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Failed to connect to MongoDB', err));

// Define the User model
const User = mongoose.model('User', new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
}));

// POST route to save user data
app.post('/api/users', async (req, res) => {
    const { name, email } = req.body;
    try {
        const newUser = new User({ name, email });
        await newUser.save();
        res.status(201).json({ message: 'User saved successfully', user: newUser });
    } catch (error) {
        res.status(400).json({ message: 'Error saving user', error });
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
