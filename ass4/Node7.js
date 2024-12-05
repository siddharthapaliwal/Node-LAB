// Function that simulates fetching data 1
function fetchData1() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Data 1"), 1000);  // Resolves after 1 second
    });
  }
  
  // Function that simulates fetching data 2
  function fetchData2() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Data 2"), 1500);  // Resolves after 1.5 seconds
    });
  }
  
  // Using Promise.all() to handle multiple promises
  Promise.all([fetchData1(), fetchData2()])
    .then((results) => {
      console.log("All data:", results);  // Logging the results when all promises are resolved
    })
    .catch((error) => {
      console.error("Error:", error);  // Handling any errors (in case one of the promises fails)
    });
  