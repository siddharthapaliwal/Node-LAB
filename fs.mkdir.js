// Load the fs (File System) module
const fs = require('fs');

// Specify the directory name
const directoryName = 'newDirectory';

// Create the directory
fs.mkdir(directoryName, (err) => {
    if (err) {
        // Handle any errors during directory creation
        return console.error('Error creating the directory:', err);
    }

    // Log a success message once the directory is created
    console.log(`Directory "${directoryName}" has been successfully created.`);
});
