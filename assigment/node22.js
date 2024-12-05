// Importing the readline module to get user input
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user to enter a string
rl.question("Enter a string to reverse: ", function (userString) {
    let reversedString = '';

    // Use a for loop to build the string in reverse order
    for (let i = userString.length - 1; i >= 0; i--) {
        reversedString += userString[i]; // Add each character in reverse order
    }

    // Display the reversed string
    console.log("Reversed string:", reversedString);

    // Close the readline interface
    rl.close();
});
// node+Space+Node22.js