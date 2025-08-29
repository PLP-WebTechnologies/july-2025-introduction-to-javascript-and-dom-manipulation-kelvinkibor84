// ====================================================
// Part 1: JavaScript Basics
// ====================================================

let studentName = "Kevin";  // string
let studentAge = 21;        // number
let isRegistered = true;    // boolean

// Conditional example
if (isRegistered) {
  console.log(`${studentName} is registered for the exam.`);
} else {
  console.log(`${studentName} is not registered for the exam.`);
}


// ====================================================
// Part 2: JavaScript Functions
// ====================================================

// Function 1: Calculate grade
function calculateGrade(marks) {
  if (marks >= 80) return "A";
  else if (marks >= 70) return "B";
  else if (marks >= 50) return "C";
  else if (marks >= 40) return "D";
  else return "F";
}

// Function 2: Display grade in DOM
function showGrade() {
  let marks = document.getElementById("marks").value;
  let grade = calculateGrade(marks);
  let resultDiv = document.getElementById("result");
  resultDiv.textContent = `You scored ${marks}. Grade: ${grade}`;
}


// ====================================================
// Part 3: JavaScript Loops
// ====================================================

// Array of sample class scores
let classScores = [85, 72, 60, 45, 30, 95];

// Loop Example 1: Log all scores
for (let i = 0; i < classScores.length; i++) {
  console.log("Score " + (i+1) + ": " + classScores[i]);
}

// Loop Example 2: Calculate class average
let total = 0;
let count = 0;
while (count < classScores.length) {
  total += classScores[count];
  count++;
}
console.log("Class Average: " + (total / classScores.length));


// ====================================================
// Part 4: DOM Manipulation
// ====================================================

// DOM Interaction 1: Check grade button
document.getElementById("checkBtn").addEventListener("click", showGrade);

// DOM Interaction 2: Show class scores dynamically
document.getElementById("showScoresBtn").addEventListener("click", () => {
  let ul = document.getElementById("scoreList");
  ul.innerHTML = ""; // clear before adding
  classScores.forEach((score, index) => {
    let li = document.createElement("li");
    li.textContent = `Student ${index + 1}: ${score}`;
    ul.appendChild(li);
  });
});
