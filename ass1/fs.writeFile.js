// Load the fs (File System) module
const fs = require('fs');

// Create a JavaScript object
const user = {
    name: "Jane Doe",
    age: 25,
    city: "Los Angeles"
};

// Convert the object to a JSON string
const jsonData = JSON.stringify(user, null, 2); // Pretty print with indentation

// Write the JSON string to output.json
fs.writeFile('output.json', jsonData, (err) => {
    if (err) {
        console.error('Error writing the file:', err);
        return;
    }

    // Log a success message
    console.log('Data has been successfully written to output.json.');
});
