//                 Timer                        //

var timerEl = document.querySelector(".timer");

var timerCount = 60;
var timer;

function setTime() {
        timer = setInterval(function() {
        timerCount--; 
        timerEl.textContent = timerCount
        console.log(timerEl);
    }, 1000);
}
setTime()


//             Scoring                        //

var score = ' ';

function result() {
    score
    if(document.getElementById('correct1').checked)
    {
        score++;
    }

    alert("Your score is:"+score);
}
