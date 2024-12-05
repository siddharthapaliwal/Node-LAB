// Age Classification
// Using prompt-sync (Install if not already installed)
// Import the prompt-sync module
const prompt = require('prompt-sync')();

// Prompt the user for their age
const age = parseInt(prompt("Enter your age: "));

// Determine the age group
if (age >= 0 && age <= 12) {
    console.log("You are classified as a Child.");
} else if (age >= 13 && age <= 19) {
    console.log("You are classified as a Teen.");
} else if (age >= 20 && age <= 64) {
    console.log("You are classified as an Adult.");
} else if (age >= 65) {
    console.log("You are classified as a Senior.");
} else {
    console.log("Invalid age entered. Please enter a non-negative number.");
}
// Alternative Program Using readline
// If you prefer not to install any additional modules, use Node.js’s built-in readline module:
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for their age
rl.question("Enter your age: ", (input) => {
    const age = parseInt(input);

    // Determine the age group
    if (age >= 0 && age <= 12) {
        console.log("You are classified as a Child.");
    } else if (age >= 13 && age <= 19) {
        console.log("You are classified as a Teen.");
    } else if (age >= 20 && age <= 64) {
        console.log("You are classified as an Adult.");
    } else if (age >= 65) {
        console.log("You are classified as a Senior.");
    } else {
        console.log("Invalid age entered. Please enter a non-negative number.");
    }

    rl.close();
});
//npm install prompt-sync
//node Node5.js
