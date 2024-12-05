const express = require('express');
const router = express.Router();

// Example route for v2 with enhancements
router.get('/items', (req, res) => {
  res.json({
    version: 'v2',
    items: [
      { id: 1, name: 'item1', price: 10 },
      { id: 2, name: 'item2', price: 20 },
      { id: 3, name: 'item3', price: 30 },
    ],
  });
});

module.exports = router;
