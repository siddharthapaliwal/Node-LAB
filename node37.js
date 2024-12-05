// Function to generate the Fibonacci sequence
function fibonacci(n) {
    if (n <= 0) {
        return []; // Return an empty array for invalid input
    }
    if (n === 1) {
        return [0]; // Return [0] if n = 1
    }
    if (n === 2) {
        return [0, 1]; // Return [0, 1] if n = 2
    }

    const fibSequence = [0, 1]; // Initialize the sequence with the first two numbers
    for (let i = 2; i < n; i++) {
        // Calculate the next Fibonacci number and add it to the array
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence; // Return the complete Fibonacci sequence
}

// Number of terms to generate
const numberOfTerms = 10; // Change this value to test with different inputs

// Call the function and display the result
const result = fibonacci(numberOfTerms);
console.log(`The first ${numberOfTerms} terms of the Fibonacci sequence are:`, result);
// node node37.js