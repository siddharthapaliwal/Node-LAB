// Define the higher-order function that takes an array and a callback function
function applyCallbackToArray(arr, callback) {
    const resultArray = [];
    
    // Apply the callback function to each element of the array
    for (let i = 0; i < arr.length; i++) {
        resultArray.push(callback(arr[i]));
    }

    // Return the new array with the results
    return resultArray;
}

// Example callback function to square a number
function square(num) {
    return num * num;
}

// Example array
const numbers = [1, 2, 3, 4, 5];

// Apply the higher-order function with the 'square' callback
const squaredNumbers = applyCallbackToArray(numbers, square);

// Log the result
console.log(squaredNumbers);
