// Global Counter
let i = 1;

// Score counter
const timerEl = document.getElementById("timer");

// Start Quiz button
const startBtn = document.getElementById("start-btn");

// Main Page Content
const mainEl = document.getElementById("page-content");

// Question
const questionEl = document.querySelector(".question");

// Answer choice elements
const answerListEl = document.querySelector(".answer-wrapper");
const answersEl = document.querySelectorAll('.answer');
const answerEl = document.querySelector(".answer");
const ansElA = document.getElementById("a");
const ansElB = document.getElementById("b");
const ansElC = document.getElementById("c");
const ansElD = document.getElementById("d");

// Final Score
let finalScore = "A NUMBER";

// Game Over Message
const endMsg = document.createElement("p");
endMsg.innerHTML = `Your final score is ${finalScore}`;
endMsg.setAttribute("style", "color:#edf4ed")

// "Enter your Initials" Input Label
const inputLabel = document.createElement("label");
inputLabel.textContent = "Please enter your initials: ";
inputLabel.setAttribute("for", "initial-input");
inputLabel.setAttribute("style", "font-size:1.4rem;");

// Input form for entering initials
const initialInput = document.createElement("input");
initialInput.setAttribute("type", "text");
initialInput.setAttribute("id", "initial-input");
initialInput.setAttribute("name", "initial-input");
initialInput.setAttribute("required", "required");
initialInput.setAttribute("minlength", "1");
initialInput.setAttribute("maxlength", "3");
initialInput.setAttribute("size", "1");
initialInput.setAttribute(
  "style",
  "caret-color: transparent; text-transform: uppercase; text-align:center; font-size:2rem; color: #f6ab13; outline:none; background-color: #11151c; border: none; border-bottom:2px solid #6da34d;"
);

// Submit High Score button
const submitBtn = document.createElement("button");
const submitBtnText = document.createTextNode("Submit");
submitBtn.appendChild(submitBtnText);
submitBtn.setAttribute(
  "style",
  "user-select: false; font-size: 1.3rem; appearance:none; border:none; border-radius:10px; padding:10px 20px; color:#edf4ed; background: #37312f; cursor:pointer;"
);

// Questions Array
const questionsArr = [
  "Commonly used data types DO NOT include:",
  "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
  "Which of the following function of Boolean object returns the primitive value of the Boolean object?",
  "Which of the following function of String object is used to match a regular expression against a string?",
  "Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array?",
];

// Shorthand references to individual questions
const q0 = questionsArr[0];
const q1 = questionsArr[1];
const q2 = questionsArr[2];
const q3 = questionsArr[3];
const q4 = questionsArr[4];

// Map each question to its correct answer
const quizMap = new Map();
quizMap.set(q0, "d");
quizMap.set(q1, "c");
quizMap.set(q2, "b");
quizMap.set(q3, "b");
quizMap.set(q4, "d");

// An iterator to loop through questions
const mapIter = quizMap[Symbol.iterator]();

// Answer Choices Array
const answersArr = [
  ["A. Array", "B. String", "C. Boolean", "D. Alert"],
  ["A. last()", "B. put()", "C. push()", "D. pop()"],
  ["A. toSource()", "B. valueOf()", "C. toString()", "D. toNumber()"],
  ["A. concat()", "B. match()", "C. search()", "D. replace()"],
  ["A. push()", "B. join()", "C. pop()", "D. map()"],
];

// High Score Countdown function
function countdown() {
  mainEl.innerHTML = "";
  score = 6000;
  timerEl.innerHTML = score;
  var timeInterval = setInterval(function () {
    timerEl.innerHTML = score;
    if (score === 0) {
      clearInterval(timeInterval);
      timerEl.innerHTML = score;
    }
    --score;
  }, 10);
}

// Loops through Questions and Answers
var answerHandler = function (event) {
  var targetEl = event.target;
  if (targetEl.matches(".answer") && i < questionsArr.length) {
    questionEl.textContent = questionsArr[i];
    ansElA.textContent = answersArr[i][0];
    ansElB.textContent = answersArr[i][1];
    ansElC.textContent = answersArr[i][2];
    ansElD.textContent = answersArr[i][3];
    i++;
    console.log(targetEl.id);
  } else if (targetEl.matches(".answer") && i === questionsArr.length) {
    questionEl.textContent = "All Done!";
    answerListEl.setAttribute("style", "display:none;");
    answerListEl.dataset.state = "hidden";
    mainEl.appendChild(endMsg);
    mainEl.appendChild(inputLabel);
    mainEl.appendChild(initialInput);
    mainEl.appendChild(submitBtn);
    initialInput.focus();
    lastBtn.setAttribute("style", "display:block;")
  }
  if (
    targetEl.id === mapIter.next().value[1] &&
    i < questionsArr.length
  ) {
    console.log("CORRECT");
  } else {
    console.log("INCORRECT");
  }
};

// Answer Choice event listeners
answersEl.forEach(function(item) {
  item.addEventListener("click", answerHandler);
  item.addEventListener("touchstart", function(event) {
    event.target.style.transform = "translateY(2px)";
    event.target.style.backgroundColor = "#f6ab13";
    event.target.style.color = "#11151c";
  });
  item.addEventListener("touchend", function(event) {
    event.target.style.transform = "translateY(-2px)";
    event.target.style.backgroundColor = "#11151c";
    event.target.style.color = "#f6ab13";
    event.target.style.boxShadow = "none";
  });
});

// Submit Button event listeners
submitBtn.addEventListener("mouseover", function(event) {
  event.target.style.color = "#f6ab13";
  event.target.style.transform = "translateY(-2px)";
  event.target.style.boxShadow = "0px 2px #6da34d";
});
submitBtn.addEventListener("mouseout", function(event) {
  event.target.style.color = "#edf4ed";
  event.target.style.transform = "translateY(2px)";
  event.target.style.boxShadow = "none";
});
submitBtn.addEventListener("mousedown", function(event) {
  event.target.style.transform = "translateY(2px)";
  event.target.style.boxShadow = "none";
});
submitBtn.addEventListener("mouseup", function(event) {
  event.target.style.transform = "translateY(-2px)";
  event.target.style.boxShadow = "0px 2px #6da34d";
});
submitBtn.addEventListener("click", submitScore);

// *******START HERE*********
// *******START HERE*********
// *******START HERE*********
function submitScore() {

}
// *******START HERE*********
// *******START HERE*********
// *******START HERE*********

// Clears page and displays Question 0
function startQuiz() {
  if (answerListEl.dataset.state === "hidden") {
    questionEl.setAttribute("style", "display:flex; margin: 1.8rem 0; font-size:1.8rem; line-height:1.4;");
    questionEl.dataset.state = "visible";
    answerListEl.setAttribute("style", "display:flex;");
    answerListEl.dataset.state = "visible";
  }
  mainEl.appendChild(questionEl);
  mainEl.appendChild(answerListEl);
}

// Start Quiz event listener
startBtn.addEventListener("click", countdown);
startBtn.addEventListener("click", startQuiz);
