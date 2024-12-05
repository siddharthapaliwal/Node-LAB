// Simulating fetching data with a Promise
function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = { message: "Data fetched successfully!" };
        resolve(data); // Resolving with the fetched data
      }, 2000);
    });
  }
  
  // Processing the fetched data (converting message to uppercase) and returning a Promise
  function processData(data) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const processed = { message: data.message.toUpperCase() }; // Process the data
        resolve(processed); // Resolving with the processed data
      }, 1000);
    });
  }
  
  // Async function that fetches and processes data
  async function fetchAndProcessData() {
    try {
      // Fetching data
      const result = await fetchData();
      // Processing the fetched data
      const processedResult = await processData(result);
      // Logging the final result
      console.log(processedResult);
    } catch (error) {
      // Handling any errors that occur during the asynchronous operations
      console.error("Error:", error);
    }
  }
  
  // Calling the async function
  fetchAndProcessData();
  