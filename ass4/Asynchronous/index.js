const fs = require("fs");

// Create a folder and write a file inside it using callbacks
fs.mkdir("example_folder", { recursive: true }, (err) => {
  if (err) {
    return console.error("Error creating folder:", err);
  }
  console.log("Folder created!");

  fs.writeFile("example_folder/example_file.txt", "Hello, Node.js!", (err) => {
    if (err) {
      return console.error("Error creating file:", err);
    }
    console.log("File created!");
  });
});
