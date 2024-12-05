// Function that simulates fetching data 1
function fetchData1() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Data 1"), 2000);  // Resolves after 2 seconds
    });
  }
  
  // Function that simulates fetching data 2
  function fetchData2() {
    return new Promise((resolve) => {
      setTimeout(() => resolve("Data 2"), 1000);  // Resolves after 1 second
    });
  }
  
  // Using Promise.race() to get the result of the first resolved promise
  Promise.race([fetchData1(), fetchData2()])
    .then((result) => {
      console.log("First resolved:", result);  // Logging the result of the first resolved promise
    })
    .catch((error) => {
      console.error("Error:", error);  // Handling errors if any promise rejects
    });
  