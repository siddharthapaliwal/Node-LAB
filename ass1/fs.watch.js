// Load the fs (File System) module
const fs = require('fs');

// Specify the file to watch
const fileToWatch = 'watch.txt';

// Watch the file for changes
fs.watch(fileToWatch, (eventType, filename) => {
    if (filename) {
        // Log a message when the file is modified
        console.log(`${filename} was modified. Event type: ${eventType}`);
    } else {
        // If the file is not specified, log an error
        console.log('File name not provided');
    }
});
