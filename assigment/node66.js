// Define two separate objects
const persons = {
    name: 'John',
    age: 30
};

const jobs = {
    title: 'Software Developer',
    company: 'Tech Corp'
};

// Use Object.assign() to merge the two objects into a new object
const mergedObjects = Object.assign({}, persons, jobs);

// Log the merged object
console.log(mergedObjects);

// Define two separate objects
const person = {
    name: 'John',
    age: 30
};

const job = {
    title: 'Software Developer',
    company: 'Tech Corp'
};

// Use the spread operator to merge the two objects into a new object
const mergedObject = { ...person, ...job };

// Log the merged object
console.log(mergedObject);
