const timerEl = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const mainEl = document.getElementById("page-content")

let minutesLeft = 0;

timerEl.innerHTML = minutesLeft;

function countdown() {
    mainEl.innerHTML = "";
    minutesLeft = 6000;
    timerEl.innerHTML = minutesLeft;
    var timeInterval = setInterval(function() {
        timerEl.innerHTML = minutesLeft;
        if (minutesLeft === 0) {
            clearInterval(timeInterval);
            timerEl.innerHTML = minutesLeft;
        }
        --minutesLeft;
    }, 10);
}

startBtn.addEventListener("click", countdown);