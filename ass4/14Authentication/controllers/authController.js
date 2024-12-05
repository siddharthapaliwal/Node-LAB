const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const users = []; // Temporary in-memory user store (replace with a database)

const JWT_SECRET = 'your_jwt_secret_key'; // Replace with an environment variable

// User Registration
exports.registerUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  // Save user (replace this with database logic)
  users.push({ username, password: hashedPassword });

  res.status(201).json({ message: 'User registered successfully' });
};

// User Login
exports.loginUser = async (req, res) => {
  const { username, password } = req.body;

  // Find user (replace this with database logic)
  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Verify password
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Invalid password' });
  }

  // Generate JWT
  const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '1h' });

  res.status(200).json({ message: 'Login successful', token });
};
