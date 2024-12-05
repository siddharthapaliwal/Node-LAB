// Create an object representing a person
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Use destructuring to extract 'name' and 'age' properties
const { name, age } = person;

// Log the extracted values
console.log("Name:", name);  // Output: Name: John
console.log("Age:", age);    // Output: Age: 30
