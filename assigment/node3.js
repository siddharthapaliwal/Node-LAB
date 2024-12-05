// Declare variables of different data types
let name = "Siddharth"; // String
let age = 25;           // Number (Integer)
let height = 5.9;       // Number (Float)
let isStudent = true;   // Boolean
let hobbies = ["Reading", "Coding", "Traveling"]; // Array
let address = {         // Object
  city: "Ahmedabad",
  state: "Gujarat",
  country: "India"
};

// Log the variables to the console
console.log("Name:", name);
console.log("Age:", age);
console.log("Height:", height);
console.log("Is a Student:", isStudent);
console.log("Hobbies:", hobbies);
console.log("Address:", address);

// Perform basic arithmetic operations
let num1 = 10;
let num2 = 20;

let sum = num1 + num2;         // Addition
let difference = num2 - num1;  // Subtraction
let product = num1 * num2;     // Multiplication
let quotient = num2 / num1;    // Division
let remainder = num2 % num1;   // Modulus (Remainder)

// Output the results of arithmetic operations
console.log("\nArithmetic Operations:");
console.log("Sum:", sum);
console.log("Difference:", difference);
console.log("Product:", product);
console.log("Quotient:", quotient);
console.log("Remainder:", remainder);

// Use template literals to display results in a single string
console.log(`\nSummary:
Name: ${name}
Age: ${age}
Height: ${height} ft
Is Student: ${isStudent}
Address: ${address.city}, ${address.state}, ${address.country}
Hobbies: ${hobbies.join(", ")}

Arithmetic Operations:
Sum = ${sum}
Difference = ${difference}
Product = ${product}
Quotient = ${quotient}
Remainder = ${remainder}`);

//run command node Node3.JS