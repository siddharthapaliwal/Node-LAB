//Program: Days of the Week
//Using prompt-sync
// Import the prompt-sync module
const prompt = require('prompt-sync')();

// Prompt the user for a number
const dayNumber = parseInt(prompt("Enter a number between 1 and 7: "));

// Use a switch statement to determine the day of the week
switch (dayNumber) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid input. Please enter a number between 1 and 7.");
}
//Alternative Program Using readline
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for a number
rl.question("Enter a number between 1 and 7: ", (input) => {
    const dayNumber = parseInt(input);

    // Use a switch statement to determine the day of the week
    switch (dayNumber) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid input. Please enter a number between 1 and 7.");
    }

    rl.close();
});
//run command
//npm install prompt-sync
//node Node7.JS
