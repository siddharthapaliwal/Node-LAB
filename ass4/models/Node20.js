const mongoose = require('mongoose');

// Define the schema for User
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Create the model
const User = mongoose.model('User', userSchema);

// Export the model
module.exports = User;
