//npm install mysql2
const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',        // Database server
  user: 'root',             // Database username
  password: 'password',     // Database password
  database: 'test_db'       // Database name
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

// Query the database
connection.query('SELECT * FROM users', (err, results, fields) => {
  if (err) throw err;
  console.log('Results: ', results);
});

// Close the connection
connection.end();
//Connecting to an SQL Database (MySQL)
// Step 1: Install MySQL Node.js driver