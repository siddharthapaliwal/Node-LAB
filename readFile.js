// Load the fs (File System) module
const fs = require('fs');

// Use fs.readFile to read the sample.txt file asynchronously
fs.readFile('./sample.text', 'utf8', (err, data) => {
    if (err) {
        // Handle any errors that occur while reading the file
        return console.error('Error reading the file:', err);
    }

    // Log the contents of the file to the console
    console.log('File Contents:');
    console.log(data);
});
// cd C:\Users\Dell\OneDrive\Desktop\ass1
// node readFile.js
