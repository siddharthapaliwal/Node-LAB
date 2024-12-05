const fs = require("fs").promises;

// Create a folder and write a file inside it using Promises
fs.mkdir("example_folder", { recursive: true })
  .then(() => {
    console.log("Folder created!");
    return fs.writeFile("example_folder/example_file.txt", "Hello, Node.js!");
  })
  .then(() => {
    console.log("File created!");
  })
  .catch((err) => {
    console.error("Error:", err);
  });
