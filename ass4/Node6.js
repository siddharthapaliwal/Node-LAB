// Modified fetchData function to randomly throw an error
function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {  // 50% chance of success or failure
          const data = { message: "Data fetched successfully!" };
          resolve(data);  // Resolving with fetched data if successful
        } else {
          reject(new Error("Failed to fetch data."));  // Rejecting with an error if failed
        }
      }, 2000);
    });
  }
  
  // Calling fetchData and handling success and failure
  fetchData()
    .then((result) => {
      console.log(result);  // Logging the result if the promise is resolved
    })
    .catch((error) => {
      console.error("Error:", error.message);  // Logging the error message if the promise is rejected
    });
  