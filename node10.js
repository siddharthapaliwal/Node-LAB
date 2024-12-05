// Program: Largest of Three Numbers
// Using prompt-sync
// Import the prompt-sync module
const prompt = require('prompt-sync')();

// Prompt the user to enter three numbers
const num1 = parseFloat(prompt("Enter the first number: "));
const num2 = parseFloat(prompt("Enter the second number: "));
const num3 = parseFloat(prompt("Enter the third number: "));

// Compare the numbers and determine the largest
if (num1 >= num2 && num1 >= num3) {
    console.log(`The largest number is ${num1}`);
} else if (num2 >= num1 && num2 >= num3) {
    console.log(`The largest number is ${num2}`);
} else {
    console.log(`The largest number is ${num3}`);
}
// Alternative Program Using readline
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for three numbers
rl.question("Enter the first number: ", (num1Input) => {
    const num1 = parseFloat(num1Input);

    rl.question("Enter the second number: ", (num2Input) => {
        const num2 = parseFloat(num2Input);

        rl.question("Enter the third number: ", (num3Input) => {
            const num3 = parseFloat(num3Input);

            // Compare the numbers and determine the largest
            if (num1 >= num2 && num1 >= num3) {
                console.log(`The largest number is ${num1}`);
            } else if (num2 >= num1 && num2 >= num3) {
                console.log(`The largest number is ${num2}`);
            } else {
                console.log(`The largest number is ${num3}`);
            }

            rl.close();
        });
    });
});
// Run the Program:
// If using prompt-sync, ensure it is installed
//npm install prompt-syncv
//node 

