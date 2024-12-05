// Function to simulate fetching data with a delay
function fetchData(callback) {
    setTimeout(() => {
      const data = { message: "Data fetched successfully!" }; // Simulated data
      callback(data); // Passing the data to the callback function
    }, 2000); // 2-second delay
  }
  
  // Function that calls fetchData and logs the result
  function processData() {
    console.log("Fetching data...");
  
    fetchData((result) => {
      console.log("Result:", result.message); // Logs the result after fetching
    });
  }
  
  // Call processData to demonstrate the callback in action
  processData();
  