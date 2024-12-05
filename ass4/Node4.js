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
  
  // Chaining fetchData and processData
  fetchData()
    .then((result) => processData(result))  // Chain processData after fetchData
    .then((processedResult) => {
      console.log(processedResult);  // Log the final result after both operations are complete
    });
  