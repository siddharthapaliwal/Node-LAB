const express = require('express');
const router = express.Router();

// Example route for v1
router.get('/items', (req, res) => {
  res.json({ version: 'v1', items: ['item1', 'item2', 'item3'] });
});

module.exports = router;
