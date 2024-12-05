// Program: Traffic Light Simulation
// Import the prompt-sync module
const prompt = require('prompt-sync')();

// Prompt the user to input the color of the traffic light
const color = prompt("Enter the traffic light color (Red, Yellow, Green): ").toLowerCase();

// Use a switch statement to determine the action
switch (color) {
  case 'red':
    console.log("Stop");
    break;
  case 'yellow':
    console.log("Caution");
    break;
  case 'green':
    console.log("Go");
    break;
  default:
    console.log("Invalid color.");
}
// 
// Here’s a simple program to simulate a traffic light system based on user input:

// Program: Traffic Light Simulation
// Using prompt-sync

// Import the prompt-sync module
const prompts = require('prompt-sync')();

// Prompt the user to input the color of the traffic light
const colors = prompt("Enter the traffic light color (Red, Yellow, Green): ").toLowerCase();

// Use a switch statement to determine the action
switch (color) {
  case 'red':
    console.log("Stop");
    break;
  case 'yellow':
    console.log("Caution");
    break;
  case 'green':
    console.log("Go");
    break;
  default:
    console.log("Invalid color.");
}
// Alternative Program Using readline
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt the user to input the color of the traffic light
rl.question("Enter the traffic light color (Red, Yellow, Green): ", (input) => {
  const color = input.toLowerCase();

  // Use a switch statement to determine the action
  switch (color) {
    case 'red':
      console.log("Stop");
      break;
    case 'yellow':
      console.log("Caution");
      break;
    case 'green':
      console.log("Go");
      break;
    default:
      console.log("Invalid color.");
  }

  rl.close();
});
// Run the Program:
// npm install prompt-sync
// node file_name
