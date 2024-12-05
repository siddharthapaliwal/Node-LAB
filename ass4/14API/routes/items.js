const express = require('express');
const router = express.Router();

// Example route for fetching items
router.get('/items', (req, res) => {
  res.json({ message: 'Welcome to the items API!' });
});

module.exports = router;
