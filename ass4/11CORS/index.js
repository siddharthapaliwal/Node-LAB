const express = require('express');
const cors = require('cors');
const app = express();

// Enable CORS for all origins
app.use(cors());

app.get('/', (req, res) => {
  res.send('CORS is enabled for all origins!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
//http://localhost:3000