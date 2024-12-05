const express = require('express');
const app = express();

// Middleware to parse JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Handles form submissions

// Hardcoded credentials for simplicity
const USERNAME = 'admin';
const PASSWORD = 'password123';

// GET /login route to serve an HTML form
app.get('/login', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Login</title>
    </head>
    <body>
      <h1>Login Form</h1>
      <form action="/login" method="POST">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <br><br>
        <button type="submit">Login</button>
      </form>
    </body>
    </html>
  `);
});

// POST /login route to handle login logic
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Check if username and password are provided
  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  // Validate credentials
  if (username === USERNAME && password === PASSWORD) {
    return res.status(200).json({ message: 'Login successful!' });
  } else {
    return res.status(401).json({ message: 'Invalid username or password.' });
  }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
