const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const mainEl = document.getElementById("page-content");

let minutesLeft = 0;

timerEl.innerHTML = minutesLeft;

function countdown() {
  mainEl.innerHTML = "";
  minutesLeft = 6000;
  timerEl.innerHTML = minutesLeft;
  var timeInterval = setInterval(function () {
    timerEl.innerHTML = minutesLeft;
    if (minutesLeft === 0) {
      clearInterval(timeInterval);
      timerEl.innerHTML = minutesLeft;
    }
    --minutesLeft;
  }, 10);
}

function startQuiz() {
  let questionEl = document.createElement("h1").innerHTML;
  questionEl = `<h1>${"Commonly used data types do not include: "}</h1>`;
  mainEl.innerHTML = questionEl;

  let answersEl = document.createElement("div");
  mainEl.appendChild(answersEl);
  answersEl.setAttribute(
    "style",
    "display:flex; flex-direction: column; width: 100%; align-items:center;"
  );

  let answerA = document.createElement("div");
  let answerATxt = document.createTextNode("This is some text");
  answerA.appendChild(answerATxt);
  answersEl.appendChild(answerA);
  answerA.setAttribute(
    "style",
    "font-size:1.8rem; margin: 2% 0; border:2px solid white; width: 50%;"
  );

  let answerC = document.createElement("div");
  let answerCTxt = document.createTextNode("This is some text");
  answerC.appendChild(answerCTxt);
  answersEl.appendChild(answerC);
  answerC.setAttribute(
    "style",
    "font-size:1.8rem; margin: 2% 0; border:2px solid white; width: 50%;"
  );

  let answerD = document.createElement("div");
  let answerDTxt = document.createTextNode("This is some text");
  answerD.appendChild(answerDTxt);
  answersEl.appendChild(answerD);
  answerD.setAttribute(
    "style",
    "font-size:1.8rem; margin: 2% 0; border:2px solid white; width: 50%;"
  );

  let answerB = document.createElement("div");
  let answerBTxt = document.createTextNode("This is some text");
  answerB.appendChild(answerBTxt);
  answersEl.appendChild(answerB);
  answerB.setAttribute(
    "style",
    "font-size:1.8rem; margin: 2% 0; border:2px solid white; width: 50%;"
  );
}

startBtn.addEventListener("click", countdown);

startBtn.addEventListener("click", startQuiz);
