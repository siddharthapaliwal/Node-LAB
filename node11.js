// Import the prompt-sync module
const prompt = require('prompt-sync')();

// Prompt the user for a year
const year = parseInt(prompt("Enter a year: "));

// Check if the year is a leap year
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(`${year} is a leap year.`);
} else {
    console.log(`${year} is not a leap year.`);
}
// Alternative Program Using readline
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for a year
rl.question("Enter a year: ", (yearInput) => {
    const year = parseInt(yearInput);

    // Check if the year is a leap year
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }

    rl.close();
});
// Run the Program:
// npm install prompt-sync
// node fileName