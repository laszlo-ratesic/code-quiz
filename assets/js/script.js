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

let finalScore = "NUMBER";

const endMsg = document.createElement("p");
const endMsgText = document.createTextNode(`Your final score is ${finalScore}`)

endMsg.appendChild(endMsgText);

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
  ["A. push()", "B. join()", "C. pop()", "D. map()"]
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
  }
  if (targetEl.id === mapIter.next().value[1] && counter < questionsArr.length) {
    console.log("CORRECT");
  } else {
    console.log("INCORRECT");
  }
};

answerListEl.addEventListener("click", answerHandler);

function startQuiz() {
  if (answerListEl.dataset.state === "hidden") {
    questionEl.setAttribute("style", "display:flex; margin: 1.8rem 0;");
    questionEl.dataset.state = "visible";
    answerListEl.setAttribute("style", "display:flex;");
    answerListEl.dataset.state = "visible";
  }

  mainEl.appendChild(questionEl);
  mainEl.appendChild(answerListEl);
}

startBtn.addEventListener("click", countdown);

startBtn.addEventListener("click", startQuiz);
