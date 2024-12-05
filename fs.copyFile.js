// Load the fs (File System) module
const fs = require('fs');

// Specify the source and destination file names
const sourceFile = 'original.txt';
const destinationFile = 'copy.txt';

// Copy the file
fs.copyFile(sourceFile, destinationFile, (err) => {
    if (err) {
        // Handle any errors during the file copy
        return console.error('Error copying the file:', err);
    }

    // Log a success message after the copy operation
    console.log(`The file has been successfully copied to "${destinationFile}".`);
});
