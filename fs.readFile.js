// Load the fs (File System) module
const fs = require('fs');

// Read the data.json file
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }

    // Parse the JSON data and log it to the console
    const parsedData = JSON.parse(data);
    console.log('Parsed JSON data:', parsedData);
});
