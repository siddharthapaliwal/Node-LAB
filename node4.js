// Function to calculate grade based on score
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the student's score (0-100): ", (input) => {
  let studentScore = parseInt(input);

  function calculateGrade(score) {
    let grade;

    if (score >= 90 && score <= 100) {
      grade = "A";
    } else if (score >= 80 && score <= 89) {
      grade = "B";
    } else if (score >= 70 && score <= 79) {
      grade = "C";
    } else if (score >= 60 && score <= 69) {
      grade = "D";
    } else if (score < 60 && score >= 0) {
      grade = "F";
    } else {
      grade = "Invalid score"; // Handle out-of-range scores
    }

    return grade;
  }

  if (!isNaN(studentScore)) {
    const grade = calculateGrade(studentScore);
    console.log(`The student's grade is: ${grade}`);
  } else {
    console.log("Please enter a valid number.");
  }

  rl.close();
});

  //Run command 
  //node Node4.JS