// Load the fs.promises module
const fs = require('fs').promises;

// Read the promiseFile.txt asynchronously
fs.readFile('promiseFile.txt', 'utf8')
    .then((data) => {
        console.log('File contents:', data);
    })
    .catch((err) => {
        console.error('Error reading the file:', err);
    });
