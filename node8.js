
// Here’s a program to convert temperatures between Celsius and Fahrenheit based on user input.

// Program: Temperature Converter
// Using prompt-sync

// Import the prompt-sync module
const prompt = require('prompt-sync');

// Prompt the user to enter the temperature and conversion type
const temperature = parseFloat(prompt("Enter the temperature: "));
const conversionType = prompt("Enter the conversion type (C to F or F to C): ").toUpperCase();

// Perform the appropriate conversion based on the user's input
if (conversionType === "C TO F") {
  const fahrenheit = (temperature * 9/5) + 32;
  console.log(`${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F`);
} else if (conversionType === "F TO C") {
  const celsius = (temperature - 32) * 5/9;
  console.log(`${temperature}°F is equal to ${celsius.toFixed(2)}°C`);
} else {
  console.log("Invalid conversion type. Please enter 'C to F' or 'F to C'.");
}

//Alternative Program Using readline

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for temperature
rl.question("Enter the temperature: ", (tempInput) => {
  const temperature = parseFloat(tempInput);

  // Ask for conversion type
  rl.question("Enter the conversion type (C to F or F to C): ", (typeInput) => {
    const conversionType = typeInput.toUpperCase();

    // Perform conversion
    if (conversionType === "C TO F") {
      const fahrenheit = (temperature * 9/5) + 32;
      console.log(`${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F`);
    } else if (conversionType === "F TO C") {
      const celsius = (temperature - 32) * 5/9;
      console.log(`${temperature}°F is equal to ${celsius.toFixed(2)}°C`);
    } else {
      console.log("Invalid conversion type. Please enter 'C to F' or 'F to C'.");
    }

    rl.close();
  });
});

//npm install prompt-sync
//node Node8.JS
// Input Temperature and Conversion Type: Provide the temperature and choose a valid conversion type (C to F or F to C).

