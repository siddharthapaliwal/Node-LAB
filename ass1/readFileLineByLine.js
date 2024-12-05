// your-project-folder/
// ├── sample.txt  (with content)
// └── readFileLineByLine.js
// Load the fs (File System) module
const fs = require('fs');

// Read the file asynchronously
fs.readFile('sample.txt', 'utf8', (err, data) => {
    if (err) {
        // Handle any errors that occur during the read operation
        return console.error('Error reading the file:', err);
    }

    // Split the file contents into an array of lines
    const lines = data.split('\n');

    // Loop through the lines and log each one to the console
    console.log('File Contents:');
    lines.forEach((line, index) => {
        console.log(`Line ${index + 1}: ${line}`);
    });
});
