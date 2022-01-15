const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const mainEl = document.getElementById("page-content");

const answerListEl = document.querySelector(".answer-wrapper");
const questionEl = document.querySelector(".question");
const answerEl = document.querySelector(".answer");

const ansElA = document.getElementById("a");
const ansElB = document.getElementById("b");
const ansElC = document.getElementById("c");
const ansElD = document.getElementById("d");

let finalScore = "A NUMBER";

const endMsg = document.createElement("p");
const endMsgText = document.createTextNode(`Your final score is ${finalScore}`);
endMsg.setAttribute("style", "color:#edf4ed")
endMsg.appendChild(endMsgText);

const inputLabel = document.createElement("label");
const labelText = document.createTextNode("Please enter your initials: ");
inputLabel.appendChild(labelText);
inputLabel.setAttribute("for", "initial-input");
inputLabel.setAttribute("style", "font-size:1.4rem;");

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

const submitBtn = document.createElement("button");
const submitBtnText = document.createTextNode("Submit");
submitBtn.appendChild(submitBtnText);
submitBtn.setAttribute(
  "style",
  "user-select: false; font-size: 1.3rem; appearance:none; border:none; border-radius:10px; padding:10px 20px; color:#edf4ed; background: #37312f; cursor:pointer;"
);

const lastBtn = document.getElementById("last-btn");

const questionsArr = [
  "Commonly used data types DO NOT include:",
  "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
  "Which of the following function of Boolean object returns the primitive value of the Boolean object?",
  "Which of the following function of String object is used to match a regular expression against a string?",
  "Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array?",
];

const q0 = questionsArr[0];
const q1 = questionsArr[1];
const q2 = questionsArr[2];
const q3 = questionsArr[3];
const q4 = questionsArr[4];

const quizMap = new Map();

quizMap.set(q0, "d");
quizMap.set(q1, "c");
quizMap.set(q2, "b");
quizMap.set(q3, "b");
quizMap.set(q4, "d");

const mapIter = quizMap[Symbol.iterator]();

const answersArr = [
  ["A. Array", "B. String", "C. Boolean", "D. Alert"],
  ["A. last()", "B. put()", "C. push()", "D. pop()"],
  ["A. toSource()", "B. valueOf()", "C. toString()", "D. toNumber()"],
  ["A. concat()", "B. match()", "C. search()", "D. replace()"],
  ["A. push()", "B. join()", "C. pop()", "D. map()"],
];

let score = 0;
timerEl.innerHTML = score;

let counter = 1;

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

console.log(quizMap);
console.log(answersArr[counter][0]);

var answerHandler = function (event) {
  var targetEl = event.target;
  if (targetEl.matches(".answer") && counter < questionsArr.length) {
    questionEl.textContent = questionsArr[counter];
    ansElA.textContent = answersArr[counter][0];
    ansElB.textContent = answersArr[counter][1];
    ansElC.textContent = answersArr[counter][2];
    ansElD.textContent = answersArr[counter][3];
    counter++;
    console.log(targetEl.id);
  } else if (targetEl.matches(".answer") && counter === questionsArr.length) {
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
    counter < questionsArr.length
  ) {
    console.log("CORRECT");
  } else {
    console.log("INCORRECT");
  }
};

const answersEl = document.querySelectorAll('.answer');

answersEl.forEach(function(item) {
  item.addEventListener("click", answerHandler);
});

submitBtn.addEventListener("mouseover", function(event) {
  event.target.style.color = "#f6ab13";
  event.target.style.transform = "translateY(-1px)";
  event.target.style.boxShadow = "0px 2px #6da34d";
});

submitBtn.addEventListener("mouseout", function(event) {
  event.target.style.color = "#edf4ed";
  event.target.style.transform = "translateY(1px)";
  event.target.style.boxShadow = "none";
});

submitBtn.addEventListener("mousedown", function(event) {
  event.target.style.transform = "translateY(1px)";
  event.target.style.boxShadow = "none";
});

submitBtn.addEventListener("mouseup", function(event) {
  event.target.style.transform = "translateY(-1px)";
  event.target.style.boxShadow = "0px 2px #6da34d";
})

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

startBtn.addEventListener("click", countdown);

startBtn.addEventListener("click", startQuiz);
