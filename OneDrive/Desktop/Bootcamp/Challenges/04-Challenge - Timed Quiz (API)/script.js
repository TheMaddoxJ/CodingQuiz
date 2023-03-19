var timerEl = document.querySelector(".timer");

var timeLeft = 75;

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
    }
}

if (secondsLeft === 0) {
    clearInterval(timerInterval);
}