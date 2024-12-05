// Define a module inside the same file to calculate the square of a number
function square(num) {
    return num * num;
  }
  
  // Log the result of square function by calling it
  const number = 5;
  const squareResult = square(number);
  console.log(`The square of ${number} is: ${squareResult}`);
  
  // Set Example
  const mySet = new Set();
  mySet.add(1);
  mySet.add(2);
  mySet.add(3);
  mySet.add(3); // Duplicate value, will be ignored
  console.log("Set values: ", mySet); // Output: Set values:  Set { 1, 2, 3 }
  
  // Map Example
  const myMap = new Map();
  myMap.set('name', 'John');
  myMap.set('age', 30);
  myMap.set('city', 'New York');
  
  // Log Map keys and values
  myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
  });
  // Output:
  // name: John
  // age: 30
  // city: New York
  