const mongoose = require('mongoose');

// Define Item Schema
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
});

// Create Item Model
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
