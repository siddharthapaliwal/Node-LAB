// your-project-folder/
// ├── append.txt  (with initial content)
// └── appendFile.js
// Load the fs (File System) module
const fs = require('fs');

// Data to append to the file
const newData = '\nThis is the new data being appended to the file.';

// Use fs.appendFile to append data to append.txt
fs.appendFile('append.txt', newData, (err) => {
    if (err) {
        // Handle any errors that occur during the append operation
        return console.error('Error appending data to file:', err);
    }

    // Log a success message once the data is appended
    console.log('Data successfully appended to append.txt');

    // After appending, read and log the updated contents of the file
    fs.readFile('append.txt', 'utf8', (err, data) => {
        if (err) {
            // Handle any errors during reading the file
            return console.error('Error reading the file:', err);
        }
        console.log('Updated File Contents:');
        console.log(data);
    });
});
