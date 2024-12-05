// mkdir models
// touch models/User.js

const mongoose = require('mongoose');

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, // Trim any leading/trailing whitespace
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique in the collection
    lowercase: true, // Convert the email to lowercase before saving
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Ensure password is at least 6 characters
  },
});

// Create the model based on the schema
const User = mongoose.model('User', userSchema);

// Export the User model to use it in other parts of the application
module.exports = User;
