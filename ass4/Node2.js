// Function to simulate fetching data with a delay, now returning a Promise
function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = { message: "Data fetched successfully!" }; // Simulated data
        resolve(data); // Resolving the promise with the data
      }, 2000); // 2-second delay
    });
  }
  
  // Function that calls fetchData and logs the result using .then()
  function processData() {
    console.log("Fetching data...");
  
    fetchData()
      .then((result) => {
        console.log("Result:", result.message); // Logs the result once the promise is resolved
      })
      .catch((error) => {
        console.error("Error:", error); // Catches and logs any errors
      });
  }
  
  // Call processData to demonstrate the promise in action
  processData();
  