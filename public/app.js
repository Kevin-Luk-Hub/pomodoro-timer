const startButton = document.querySelector('.btn.start');
const resetButton = document.querySelector('.btn.reset');

var totalTime = 10;
var breakTime = 10;
var minutes;
var seconds;
var timer;
var paused = false;

startButton.addEventListener('click', () => {
    clearInterval(timer);
    timer = setInterval(startTimer, 1000);
    if ((startButton.innerHTML = 'Start')) {
        paused = true;
        startButton.innerHTML = 'Pause';
        console.log(startButton.innerHTML);
    }

    if ((startButton.innerHTML = 'Pause')) {
        startButton.innerHTML = 'Start';
        console.log(startButton.innerHTML);
    }
});

resetButton.addEventListener('click', () => {
    resetTimer();
});

function startTimer() {
    minutes = Math.floor(totalTime / 60);
    seconds = totalTime - minutes * 60;

    if (totalTime < 0) {
        clearInterval(timer);
        totalTime = 25 * 60;
        breakTimer();
    }

    displayTime(minutes, seconds);

    totalTime -= 1;
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    totalTime = 25 * 60;
    minutes = Math.floor(totalTime / 60);
    seconds = totalTime - minutes * 60;
    document.getElementById('time').innerHTML = `${minutes} : 0${seconds}`;
}

function breakTimer() {
    timer = setInterval(breakTimer, 1000);

    minutes = Math.floor(breakTime / 60);
    seconds = breakTime - minutes * 60;

    if (breakTime <= 0) {
        clearInterval(timer);
        totalTime = 10 * 60;
        breakTimer();
    }

    displayTime();

    breakTime -= 1;
}

function displayTime(minutes, seconds) {
    if (seconds < 10) {
        document.getElementById('time').innerHTML = `${minutes} : 0${seconds}`;
    } else if (minutes < 10) {
        document.getElementById('time').innerHTML = `0${minutes} : ${seconds}`;
    } else if (minutes < 10 && seconds < 10) {
        document.getElementById('time').innerHTML = `0${minutes} : 0${seconds}`;
    } else {
        document.getElementById('time').innerHTML = `${minutes} : ${seconds}`;
    }
}

function rainSound() {
    var audio = new Audio('.');
}
