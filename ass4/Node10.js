// npm install axios
// Importing axios
const axios = require('axios');

// Async function to fetch posts from a public API
async function fetchPosts() {
  try {
    // Making a GET request to fetch posts from JSONPlaceholder
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    
    // Logging the fetched data
    console.log(response.data);
  } catch (error) {
    // Handling any errors that occur during the request
    console.error("Error:", error.message);
  }
}

// Calling the fetchPosts function to initiate the request
fetchPosts();
