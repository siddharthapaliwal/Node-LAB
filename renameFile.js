// Load the fs (File System) module
const fs = require('fs');

// Specify the old and new file names
const oldFileName = 'oldname.txt';
const newFileName = 'newname.txt';

// Use fs.rename to rename the file
fs.rename(oldFileName, newFileName, (err) => {
    if (err) {
        // Handle any errors that occur during the rename operation
        return console.error('Error renaming the file:', err);
    }

    // Log a success message once the rename operation is complete
    console.log(`The file has been renamed from "${oldFileName}" to "${newFileName}".`);
});
