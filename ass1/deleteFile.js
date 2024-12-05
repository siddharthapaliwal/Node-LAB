// Load the fs (File System) module
const fs = require('fs');

// Specify the file name to delete
const fileName = 'deleteMe.txt';

// Use fs.unlink to delete the file
fs.unlink(fileName, (err) => {
    if (err) {
        // Handle any errors that occur during the deletion operation
        return console.error('Error deleting the file:', err);
    }

    // Log a success message once the deletion operation is complete
    console.log(`The file "${fileName}" has been successfully deleted.`);
});
