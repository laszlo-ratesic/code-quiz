const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const mainEl = document.getElementById("page-content");
const element = document.querySelector(".answers");
const questionEl = document.querySelector(".question");

let score = 0;

timerEl.innerHTML = score;

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

function startQuiz() {
  mainEl.appendChild(questionEl);
  mainEl.appendChild(element);

  if (element.dataset.state === 'hidden') {
    questionEl.setAttribute("style", "display:flex; margin: 1.8rem 0;")
    questionEl.dataset.state = 'visible';
    element.setAttribute("style", "display:flex;")
    element.dataset.state = 'visible';
  }
}

startBtn.addEventListener("click", countdown);

startBtn.addEventListener("click", startQuiz);

