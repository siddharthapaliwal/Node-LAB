//npm init -y
//npm install express
//npm install --save-dev nodemon
// Node2.JS.js
const express = require('express');
const app = express();
const port = 3000;

// A simple route to respond to GET requests
app.get('/', (req, res) => {
    res.send('Hello, Node.js with Express and Nodemon!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
//npm run dev