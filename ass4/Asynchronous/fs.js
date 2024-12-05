const fs = require("fs").promises;

async function createFolderAndFile() {
  try {
    // Create a folder
    await fs.mkdir("example_folder", { recursive: true });
    console.log("Folder created!");

    // Write a file inside the folder
    await fs.writeFile("example_folder/example_file.txt", "Hello, Node.js!");
    console.log("File created!");
  } catch (err) {
    console.error("Error:", err);
  }
}

createFolderAndFile();
