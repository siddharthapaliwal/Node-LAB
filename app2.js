// app.js
const add = require('./mathModule');          // Import the add function from mathModule
const capitalize = require('./stringModule'); // Import the capitalize function from stringModule
const getFormattedDate = require('./dateModule'); // Import the getFormattedDate function from dateModule

// Use the functions
const sum = add(5, 3); // Adding numbers
console.log(`Sum of 5 and 3 is: ${sum}`);

const capitalizedName = capitalize('john'); // Capitalizing a string
console.log(`Capitalized name is: ${capitalizedName}`);

const formattedDate = getFormattedDate(); // Get the formatted date
console.log(`Today's date is: ${formattedDate}`);
