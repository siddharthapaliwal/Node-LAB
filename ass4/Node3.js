// fetchData function returning a Promise
function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = { message: "Data fetched successfully!" };
        resolve(data); // Resolving the Promise with the fetched data after 2 seconds
      }, 2000);
    });
  }
  
  // Using the .then() method to handle the resolved data
  fetchData().then((result) => {
    console.log(result); // Logging the result when the promise is resolved
  });
  