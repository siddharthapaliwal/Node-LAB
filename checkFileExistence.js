// Load the fs (File System) module
const fs = require('fs');

// Specify the file name to check
const fileName = 'check.txt';

// Use fs.existsSync to check if the file exists
if (fs.existsSync(fileName)) {
    console.log(`The file "${fileName}" exists.`);
} else {
    console.log(`The file "${fileName}" does not exist.`);
}
