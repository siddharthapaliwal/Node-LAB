//Program: Even or Odd Number Checker
//npm install prompt-sync

// Import the prompt-sync module
const prompt = require('prompt-sync')();

// Prompt the user for a number
const number = parseInt(prompt("Enter a number: "));

// Check if the number is even or odd
if (number % 2 === 0) {
    console.log(`${number} is an Even number.`);
} else {
    console.log(`${number} is an Odd number.`);
}
//Node.js's built-in readline module

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for a number
rl.question("Enter a number: ", (input) => {
    const number = parseInt(input);

    // Check if the number is even or odd
    if (number % 2 === 0) {
        console.log(`${number} is an Even number.`);
    } else {
        console.log(`${number} is an Odd number.`);
    }

    rl.close();
});
//Run commmand
//node Node6.js

