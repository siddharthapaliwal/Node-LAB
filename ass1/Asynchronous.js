const fs = require('fs');

// Read the contents of 'input.txt' asynchronously
fs.readFile('input.txt', 'utf8', (err, data) => {
    if (err) {
        return console.error('Error reading file:', err);
    }

    console.log('Data read from file:', data);

    // Write the data to 'output.txt' asynchronously
    fs.writeFile('output.txt', data, (err) => {
        if (err) {
            return console.error('Error writing file:', err);
        }
        console.log('Data written to output.txt successfully.');
    });
});
