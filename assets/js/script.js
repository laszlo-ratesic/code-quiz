const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const mainEl = document.getElementById("page-content");
const answerListEl = document.querySelector(".answer-wrapper");
const questionEl = document.querySelector(".question");
const answerEl = document.querySelector(".answer");
const questionsArr = [
  "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?",
  "Which of the following function of Boolean object returns the primitive value of the Boolean object?",
  "Which of the following function of String object is used to match a regular expression against a string?",
];

const answersArr = [3, 1, 4];

let score = 0;
timerEl.innerHTML = score;

let counter = 0;

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

var answerHandler = function (event) {
  var targetEl = event.target;
  console.log(targetEl.textContent);
  if (targetEl.matches(".answer") && counter < questionsArr.length) {
    questionEl.textContent = questionsArr[counter];
    counter++;
  }
  // if target matches id of correct answer,
  // display CORRECT message,
  // otherwise display WRONG.
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
