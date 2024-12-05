//  Connecting to a NoSQL Database (MongoDB)
// Step 1: Install MongoDB Node.js driver
// Use the mongoose package, which is an ODM (Object Document Mapper) for MongoDB.
//npm install mongoose
// Example Code to Connect to MongoDB
const mongoose = require('mongoose');

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/test_db', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Define a schema for the data
const userSchema = new mongoose.Schema({
  name: String,
  age: Number
});

// Create a model using the schema
const User = mongoose.model('User', userSchema);

// Create a new user
const newUser = new User({ name: 'John Doe', age: 30 });

// Save the user to the database
newUser.save()
  .then(() => console.log('User saved to MongoDB'))
  .catch((err) => console.error('Error saving user:', err));
