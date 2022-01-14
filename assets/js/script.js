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
var element = document.querySelector(".answers");
console.log(element);
var questionEl = document.querySelector(".question");
console.log(questionEl);

function startQuiz() {
  // let questionEl = document.createElement("h1").innerHTML;
  // questionEl = `<h1>${"Commonly used data types do not include: "}</h1>`;
  // mainEl.innerHTML = questionEl;

  mainEl.appendChild(questionEl);

  mainEl.appendChild(element);
  console.log(element);
  console.log(questionEl);
  if (element.dataset.state === 'hidden') {
    questionEl.setAttribute("style", "display:flex; margin: 1.8rem 0;")
    questionEl.dataset.state = 'visible';
    element.setAttribute("style", "display:flex;")
    element.dataset.state = 'visible';
  }

  // let answersEl = document.createElement("div");
  // mainEl.appendChild(answersEl);
  // answersEl.setAttribute(
  //   "style",
  //   "display:flex; flex-direction: column; width: 100%; align-items:center;"
  // );

  // var answers = ["1", "2", "3", "4"];
  // var choices = ["Array", "String", "Boolean", "Factor"];
  // for (let i = 0; i < answers.length; i++) {
  //   var a = document.createElement("div");
  //   var text = document.createTextNode(`${answers[i]}. ${choices[i]}`);
  //   a.appendChild(text);
  //   a.setAttribute("class", "answer");
  //   a.setAttribute("id", answers[i]);
  //   a.setAttribute("style", "font-size:1.8rem; margin:2% 0; border:2px solid white; border-radius:15px; display: flex; justify-content:flex-start; align-items: center; height: 4.2rem; width:20rem; padding-left: 1.8rem;");
  //   answersEl.appendChild(a);
  //   console.log(a);
  // }

  // let answerA = document.createElement("div");
  // let answerATxt = document.createTextNode("This is some text");
  // answerA.appendChild(answerATxt);
  // answersEl.appendChild(answerA);
  // answerA.setAttribute(
  //   "style",
  //   "font-size:1.8rem; margin: 2% 0; border:2px solid white; width: 50%;"
  // );

  // let answerC = document.createElement("div");
  // let answerCTxt = document.createTextNode("This is some text");
  // answerC.appendChild(answerCTxt);
  // answersEl.appendChild(answerC);
  // answerC.setAttribute(
  //   "style",
  //   "font-size:1.8rem; margin: 2% 0; border:2px solid white; width: 50%;"
  // );

  // let answerD = document.createElement("div");
  // let answerDTxt = document.createTextNode("This is some text");
  // answerD.appendChild(answerDTxt);
  // answersEl.appendChild(answerD);
  // answerD.setAttribute(
  //   "style",
  //   "font-size:1.8rem; margin: 2% 0; border:2px solid white; width: 50%;"
  // );

  // let answerB = document.createElement("div");
  // let answerBTxt = document.createTextNode("This is some text");
  // answerB.appendChild(answerBTxt);
  // answersEl.appendChild(answerB);
  // answerB.setAttribute(
  //   "style",
  //   "font-size:1.8rem; margin: 2% 0; border:2px solid white; width: 50%;"
  // );
}

startBtn.addEventListener("click", countdown);

startBtn.addEventListener("click", startQuiz);

