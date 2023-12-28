const controlBtn = document.getElementById("controlBtn");
const resetBtn = document.getElementById("resetBtn");
let playBtn = document.getElementById("play");

let seconds = 0,
    minutes = 0,
    hours = 0,
    milliseconds = 0;

let intervalId = null;
let isRunning = false;

function timeCounter(e) {
    if (isRunning) {
        clearInterval(intervalId);
        isRunning = false;

        e.target.classList.remove("fa-pause");
        e.target.classList.add("fa-play");
    } else {
        isRunning = true;

        intervalId = setInterval(function () {
            seconds++;
            if (seconds / 60 === 1) {
                minutes++;
                seconds = 0;
            }
            if (minutes / 60 === 1) {
                hours++;
                minutes = 0;
            }

            let displayedTime = document.getElementById("timer");
            hours = hours.toString().padStart(2, "0");
            minutes = minutes.toString().padStart(2, "0");
            seconds = seconds.toString().padStart(2, "0");
            displayedTime.innerText = `${hours} : ${minutes} : ${seconds}`;
        }, 1000);
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
    }
}

function resetTime() {
    clearInterval(intervalId);
    intervalId = null;

    seconds = 0;
    minutes = 0;
    hours = 0;

    let displayedTime = document.getElementById("timer");
    displayedTime.innerText = "00 : 00 : 00";

    if (playBtn.classList.contains("fa-pause")) {
        playBtn.classList.remove("fa-pause");
        playBtn.classList.add("fa-play");
    } else {
        playBtn.classList.add("fa-play");
    }
}

controlBtn.addEventListener("click", function (e) {
    timeCounter(e);
});
resetBtn.addEventListener("click", resetTime);
