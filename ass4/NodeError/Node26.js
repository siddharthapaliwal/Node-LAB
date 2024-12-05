const fs = require('fs-extra');

// Asynchronous function to handle file operations
async function handleFileOperations() {
  try {
    // Reading the file
    const data = await fs.readFile('source.txt', 'utf8');
    console.log('File Read Successfully:\n', data);

    // Writing to another file
    await fs.writeFile('destination.txt', data);
    console.log('Data written to destination.txt successfully!');
  } catch (error) {
    console.error('Error during file operations:', error.message);
  }
}

// Call the function
handleFileOperations()
  .then(() => console.log('Operation completed successfully.'))
  .catch((error) => {
    console.error('Unexpected Error:', error.message);
  });
  