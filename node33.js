// Function to convert temperature
function convertTemperature(temperature, scale) {
    let result;

    if (scale === 'C') {
        // Convert Fahrenheit to Celsius
        result = (temperature - 32) * 5 / 9;
        return `${temperature}°F is equal to ${result.toFixed(2)}°C.`;
    } else if (scale === 'F') {
        // Convert Celsius to Fahrenheit
        result = (temperature * 9 / 5) + 32;
        return `${temperature}°C is equal to ${result.toFixed(2)}°F.`;
    } else {
        return "Invalid scale. Please use 'C' for Celsius or 'F' for Fahrenheit.";
    }
}

// Prompt the user for input
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the temperature: ", function (temperature) {
    rl.question("Enter the scale to convert to (C for Celsius, F for Fahrenheit): ", function (scale) {
        temperature = parseFloat(temperature);  // Convert input to a number
        let result = convertTemperature(temperature, scale);  // Call the conversion function
        console.log(result);  // Display the result
        rl.close();
    });
});
// node Node33.JS  