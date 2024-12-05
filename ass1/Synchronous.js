const fs = require('fs');

try {
    // Read the contents of 'input.txt' synchronously
    const data = fs.readFileSync('input.txt', 'utf8');
    console.log('Data read from file:', data);

    // Write the data to 'output.txt' synchronously
    fs.writeFileSync('output.txt', data);
    console.log('Data written to output.txt successfully.');
} catch (err) {
    console.error('Error reading or writing file:', err);
}
