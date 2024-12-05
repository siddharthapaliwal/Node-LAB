// Load the fs (File System) module
const fs = require('fs');

// Create a readable stream for the largeFile.txt
const readStream = fs.createReadStream('largeFile.txt', 'utf8');

// Log each chunk of the file as it is read
readStream.on('data', (chunk) => {
    console.log('Received chunk:', chunk);
});

// Create a writable stream for the outputStream.txt
const writeStream = fs.createWriteStream('outputStream.txt');

// Pipe the readStream to the writeStream (copying the content)
readStream.pipe(writeStream);

// Log a success message after the writing is complete
writeStream.on('finish', () => {
    console.log('Data has been successfully written to outputStream.txt.');
});
