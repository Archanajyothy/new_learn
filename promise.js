// Creating a promise
const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      const success = true; // Simulating success or failure
      if (success) {
        resolve("Operation completed successfully");
      } else {
        reject("Operation failed");
      }
    }, 2000); // Simulating a delay of 2000 milliseconds (2 seconds)
  });
  
  // Handling the promise
  myPromise
    .then((result) => {
      // Handling the fulfilled state
      console.log(result);
    })
    .catch((error) => {
      // Handling the rejected state
      console.error(error);
    });
  