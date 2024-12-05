// Importing the fs.promises API
const fs = require('fs').promises;

// Function that reads a file, processes its content, and writes to a new file
async function readAndWriteFile() {
  try {
    // Reading the content of the input file asynchronously
    const data = await fs.readFile('input.txt', 'utf8');
    
    // Processing the data (converting it to uppercase in this case)
    const processedData = data.toUpperCase();
    
    // Writing the processed data to a new file asynchronously
    await fs.writeFile('output.txt', processedData);
    
    // Logging success message when the file is written successfully
    console.log("File written successfully!");
  } catch (error) {
    // Catching any errors and logging them
    console.error("Error:", error.message);
  }
}

// Calling the function to read and write files
readAndWriteFile();
