// Program: Simple Calculator
// Using prompt-sync

// Import the prompt-sync module
const prompt = require('prompt-sync')();

// Prompt the user for two numbers and an operator
const num1 = parseFloat(prompt("Enter the first number: "));
const num2 = parseFloat(prompt("Enter the second number: "));
const operator = prompt("Enter an operator (+, -, *, /): ");

// Perform the operation based on the operator
let result;

switch (operator) {
    case '+':
        result = num1 + num2;
        console.log(`The result of ${num1} + ${num2} is ${result}`);
        break;

    case '-':
        result = num1 - num2;
        console.log(`The result of ${num1} - ${num2} is ${result}`);
        break;

    case '*':
        result = num1 * num2;
        console.log(`The result of ${num1} * ${num2} is ${result}`);
        break;

    case '/':
        if (num2 !== 0) {
            result = num1 / num2;
            console.log(`The result of ${num1} / ${num2} is ${result}`);
        } else {
            console.log("Error: Division by zero is not allowed.");
        }
        break;

    default:
        console.log("Invalid operator. Please enter one of +, -, *, or /.");
}
//Alternative Program Using readline
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for two numbers and an operator
rl.question("Enter the first number: ", (num1Input) => {
    const num1 = parseFloat(num1Input);

    rl.question("Enter the second number: ", (num2Input) => {
        const num2 = parseFloat(num2Input);

        rl.question("Enter an operator (+, -, *, /): ", (operator) => {
            let result;

            // Perform the operation based on the operator
            switch (operator) {
                case '+':
                    result = num1 + num2;
                    console.log(`The result of ${num1} + ${num2} is ${result}`);
                    break;

                case '-':
                    result = num1 - num2;
                    console.log(`The result of ${num1} - ${num2} is ${result}`);
                    break;

                case '*':
                    result = num1 * num2;
                    console.log(`The result of ${num1} * ${num2} is ${result}`);
                    break;

                case '/':
                    if (num2 !== 0) {
                        result = num1 / num2;
                        console.log(`The result of ${num1} / ${num2} is ${result}`);
                    } else {
                        console.log("Error: Division by zero is not allowed.");
                    }
                    break;

                default:
                    console.log("Invalid operator. Please enter one of +, -, *, or /.");
            }

            rl.close();
        });
    });
});
// Run the Program:
// npm install prompt-sync
//node Node.JS