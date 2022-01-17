// Global Counter
let i = 1;

// Game Tracker
let gamePlayed = false;

// ************************START OF LEADERBOARD ELEMENTS********************************
// View High Scores navigation element
const navEl = document.getElementById("nav-el");

// Return to landing page
function goHome() {
  if (navEl.innerText === "Home") {
    window.location.reload();
  }
}

// Placeholder values for High Score table
const defaultArr = [
  ["KRK", 690],
  ["KRC", 420],
  ["RRC", 336],
  ["MEC", 180],
  ["FTW", 117],
  ["LOL", 101],
];

// Retrieve scores from localStorage or use placeholder values
const highScores = JSON.parse(localStorage.getItem("high scores")) ?? defaultArr;

// Displays High Score table
function viewHighScores(event) {
  navEl.innerText = "Home";
  mainEl.textContent = "";
  questionEl.style = "display:flex;";
  questionEl.textContent = "High Scores";
  if (score > highScores[5][1]) {
    questionEl.textContent = "NEW HIGH SCORE!";
  }
  mainEl.appendChild(questionEl);

  const tbl = document.createElement("table");
  tbl.style.border = "1px solid #edf4ed";
  tbl.style.borderRadius = "15px";
  tbl.style.width = "20rem";
  tbl.style.fontSize = "1.5em";

  for (let i = 0; i < 6; i++) {
    const tr = tbl.insertRow();
    tr.style.height = "3rem";
    for (let j = 0; j < 2; j++) {
      const td = tr.insertCell();
      const playerInit = document.createTextNode(highScores[i][j]);
      td.appendChild(playerInit);
      td.style.borderBottom = "3px solid #37312f";
      td.style.borderRight = "3px solid #37312f";
      td.style.borderRadius = "15px";
    }
  }
  mainEl.appendChild(tbl);
  if (gamePlayed) {
    startBtn.innerText = "Try again?";
    mainEl.appendChild(startBtn);
    startBtn.removeEventListener("click", startQuiz);
    startBtn.removeEventListener("click", countdown);
    startBtn.addEventListener("click", goHome);
  }
}

// Navigation element event listeners
navEl.addEventListener("click", goHome);
navEl.addEventListener("click", viewHighScores);
// ************************END OF LEADERBOARD ELEMENTS********************************

// ************************START OF START-QUIZ ELEMENTS********************************
// Main Page Content
const mainEl = document.getElementById("page-content");

// Start Quiz button
const startBtn = document.getElementById("start-btn");

// Clears page and displays Question 0
function startQuiz() {
  // debugger;
  if (answerListEl.dataset.state === "visible") {
    answerListEl.dataset.state = "hidden";
    questionEl.dataset.state = "hidden";
  }
  if (answerListEl.dataset.state === "hidden") {
    questionEl.setAttribute(
      "style",
      "display:flex; margin: 1.8rem 0; font-size:1.8rem; line-height:1.4;"
    );
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
// ************************END OF START-QUIZ ELEMENTS********************************

// ************************START OF SCORE-TIMER ELEMENTS********************************
// Score counter
const timerEl = document.getElementById("timer");
let score = 0;

// Score Countdown function
function countdown() {
  mainEl.innerHTML = "";
  score = 6000;
  timerEl.innerHTML = score;
  var timeInterval = setInterval(function () {
    timerEl.innerHTML = score;
    if (score <= 0 || i === questionsArr.length + 1) {
      clearInterval(timeInterval);
      timerEl.innerHTML = score;
      endMsg.innerHTML = `Your final score is ${score}`;
      endQuiz();
    }
    --score;
  }, 10);
}
// ************************END OF SCORE-TIMER ELEMENTS********************************


// ************************START OF QUESTION ELEMENTS********************************
// Question Element
const questionEl = document.querySelector(".question");

// Questions Array
const questionsArr = [
  "Commonly used data types DO NOT include:",
  "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
  "Which of the following function of Boolean object returns the primitive value of the Boolean object?",
  "Which of the following function of String object is used to match a regular expression against a string?",
  "Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array?",
  "Inside the HTML document, where do you place your Javascript code?",
  "What operator is used to assign a value to a declared variable?",
  "Which of these is one of the six primitive data types in JavaScript?",
  "What is an object method?",
  "What are the two types of scope JavaScript uses?",
];

// Shorthand references to individual questions
const q0 = questionsArr[0];
const q1 = questionsArr[1];
const q2 = questionsArr[2];
const q3 = questionsArr[3];
const q4 = questionsArr[4];
const q5 = questionsArr[5];
const q6 = questionsArr[6];
const q7 = questionsArr[7];
const q8 = questionsArr[8];
const q9 = questionsArr[9];

// Map each question to its correct answer
const quizMap = new Map();
quizMap.set(q0, "d");
quizMap.set(q1, "c");
quizMap.set(q2, "b");
quizMap.set(q3, "b");
quizMap.set(q4, "d");
quizMap.set(q5, "b");
quizMap.set(q6, "d");
quizMap.set(q7, "a");
quizMap.set(q8, "a");
quizMap.set(q9, "b");

// An iterator to loop through questions
const mapIter = quizMap[Symbol.iterator]();

// Loops through Questions and Answers
var answerHandler = function (event) {
  console.log(i);
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
    endQuiz();
    i++;
  }
  // const mapIter = quizMap[Symbol.iterator]();
  if (targetEl.id === mapIter.next().value[1] && i < questionsArr.length + 2) {
    let response = setTimeout(function () {
      timerEl.style.color = "green";
    });
    let clear = setTimeout(function () {
      clearTimeout(response);
      timerEl.style.color = "white";
    }, 1000);
    console.log("CORRECT");
    score += 1000;
  } else {
    let response = setTimeout(function () {
      timerEl.style.color = "red";
    });
    let clear = setTimeout(function () {
      clearTimeout(response);
      timerEl.style.color = "white";
    }, 1000);
    console.log("INCORRECT");
    score -= 1000;
  }
};
// ************************END OF QUESTION ELEMENTS********************************

// ************************START OF ANSWER ELEMENTS********************************
// Answer choice elements
const answerListEl = document.querySelector(".answer-wrapper");
const answersEl = document.querySelectorAll(".answer");
const ansElA = document.getElementById("a");
const ansElB = document.getElementById("b");
const ansElC = document.getElementById("c");
const ansElD = document.getElementById("d");

// Answer Choices Array
const answersArr = [
  ["A. Array", "B. String", "C. Boolean", "D. Alert"],
  ["A. last()", "B. put()", "C. push()", "D. pop()"],
  ["A. toSource()", "B. valueOf()", "C. toString()", "D. toNumber()"],
  ["A. concat()", "B. match()", "C. search()", "D. replace()"],
  ["A. push()", "B. join()", "C. pop()", "D. map()"],
  ["A. <head>", "B. <script>", "C. <link>", "D. <footer>"],
  [
    "A. Colon (:)",
    "B. Double-equal (==)",
    "C. Question mark (?)",
    "D. Equal sign (=)",
  ],
  ["A. bigInt", "B. truthy", "C. falsy", "D. float"],
  [
    "A. A function on an object",
    "B. An array",
    "C. An object's key number",
    "D. A function argument",
  ],
  [
    "A. Surrounding and inner",
    "B. Global and local",
    "C. Abroad and local",
    "D. Outside and inside",
  ],
];

// Answer Choice event listeners
answersEl.forEach(function (item) {
  item.addEventListener("click", answerHandler);
  item.addEventListener("touchstart", function (event) {
    event.target.style.transform = "translateY(2px)";
    event.target.style.backgroundColor = "#f6ab13";
    event.target.style.color = "#11151c";
  });
  item.addEventListener("touchend", function (event) {
    event.target.style.transform = "translateY(-2px)";
    event.target.style.backgroundColor = "#11151c";
    event.target.style.color = "#f6ab13";
    event.target.style.boxShadow = "none";
  });
});
// ************************END OF ANSWER ELEMENTS********************************

// ************************START OF ENDGAME ELEMENTS********************************
// Endgame Message
const endMsg = document.createElement("p");
endMsg.setAttribute("style", "color:#edf4ed");

// Displays endgame message
function endQuiz() {
  gamePlayed = true;
  questionEl.textContent = "All Done!";
  answerListEl.setAttribute("style", "display:none;");
  answerListEl.dataset.state = "hidden";
  mainEl.appendChild(endMsg);
  mainEl.appendChild(formEl);
  initialInput.focus();
  initialInput.addEventListener("submit", saveScore);
  initialInput.addEventListener("submit", viewHighScores);
}

// Submit initials form
const formEl = document.createElement("form");
formEl.style.height = "8rem";
formEl.style.display = "flex";
formEl.style.flexDirection = "column";
formEl.style.justifyContent = "space-between";

// Form divs
const labelDiv = document.createElement("div");
const inputDiv = document.createElement("div");
const submitDiv = document.createElement("div");

// "Enter your Initials" Input Label
const inputLabel = document.createElement("label");
inputLabel.textContent = "Please enter your initials: ";
inputLabel.setAttribute("for", "initial-input");
inputLabel.setAttribute("style", "font-size:1.4rem;");
labelDiv.appendChild(inputLabel);
formEl.appendChild(labelDiv);

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
inputDiv.appendChild(initialInput);
formEl.appendChild(inputDiv);

// Submit High Score button
const submitBtn = document.createElement("input");
submitBtn.id = "submit-btn";
submitBtn.type = "submit";
submitBtn.value = "Submit";
submitBtn.setAttribute(
  "style",
  "user-select: false; font-size: 1.3rem; appearance:none; border:none; border-radius:10px; padding:10px 20px; color:#edf4ed; background: #37312f; cursor:pointer;"
);
submitDiv.appendChild(submitBtn);
formEl.appendChild(submitDiv);

// Checks if score made the leaderboard
function submitScore() {
  const lowestScore = highScores[highScores.length - 1]?.score ?? 0;
  score;
  if (score > lowestScore) {
    saveScore(score, highScores);
  }
}

// Adds player score and initials to localStorage
function saveScore(score, highScores) {
  let newInitials = initialInput.value.toUpperCase();
  let newHighScore = [newInitials, score + 1];
  highScores.push(newHighScore);
  highScores.sort((a, b) => b[1] - a[1]);
  highScores.splice(highScores.length);
  console.log(highScores);
  localStorage.setItem("high scores", JSON.stringify(highScores));
  i = 1;
}

// Submit Button event listeners
submitBtn.addEventListener("mouseover", function (event) {
  event.target.style.color = "#f6ab13";
  event.target.style.transform = "translateY(-2px)";
  event.target.style.boxShadow = "0px 2px #6da34d";
});
submitBtn.addEventListener("mouseout", function (event) {
  event.target.style.color = "#edf4ed";
  event.target.style.transform = "translateY(2px)";
  event.target.style.boxShadow = "none";
});
submitBtn.addEventListener("mousedown", function (event) {
  event.target.style.transform = "translateY(2px)";
  event.target.style.boxShadow = "none";
});
submitBtn.addEventListener("mouseup", function (event) {
  event.target.style.transform = "translateY(-2px)";
  event.target.style.boxShadow = "0px 2px #6da34d";
});
submitBtn.addEventListener("touchstart", function (event) {
  event.target.style.transform = "translateY(2px)";
  event.target.style.boxShadow = "none";
});
submitBtn.addEventListener("touchend", function (event) {
  event.target.style.transform = "translateY(-2px)";
});
submitBtn.addEventListener("click", submitScore);
submitBtn.addEventListener("click", viewHighScores);
// ************************END OF ENDGAME ELEMENTS********************************
