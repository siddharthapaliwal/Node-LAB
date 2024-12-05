// Load the fs (File System) module
const fs = require('fs');

// Specify the directory to read
const directoryName = 'myFiles';

// Read the contents of the directory
fs.readdir(directoryName, (err, files) => {
    if (err) {
        // Handle any errors during directory reading
        return console.error('Error reading the directory:', err);
    }

    // Log the names of all files in the directory
    console.log(`Files in "${directoryName}":`);
    files.forEach(file => {
        console.log(file);
    });
});
