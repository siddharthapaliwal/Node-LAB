// Load the fs (File System) module
const fs = require('fs');

// Sample data to write to the file
const data = 'This is some sample data that will be written to the file.\nHello, world!';

// Use fs.writeFile to create and write data to output.txt
fs.writeFile('output.txt', data, (err) => {
    if (err) {
        // Handle any errors that occur during the write operation
        return console.error('Error writing to file:', err);
    }

    // Log a success message when the write operation is complete
    console.log('Data successfully written to output.txt');
});
// node readFile.js