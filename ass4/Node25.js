const jwt = require('jsonwebtoken');

// Middleware to protect routes
const authenticate = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret');
        req.user = decoded; // Attach the decoded user to the request object
        next(); // Call the next middleware/route handler
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

// Protect the /users route
app.get('/users', authenticate, async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error: error.message });
    }
});
