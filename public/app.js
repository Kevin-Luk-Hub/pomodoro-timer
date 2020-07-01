const startButton = document.querySelector('.btn.start');
const resetButton = document.querySelector('.btn.reset');

var totalTime = 5;
var breakTime;
var minutes;
var seconds;
var timer;
var intervals = 0;
var paused = true;

startButton.addEventListener('click', () => {
    clearInterval(timer);
    timer = setInterval(startTimer, 1000);
    if (paused) {
        paused = false;
        startButton.innerHTML = 'Pause';
        startTimer();
    } else {
        paused = true;
        startButton.innerHTML = 'Start';
        pauseTimer();
    }
});

resetButton.addEventListener('click', () => {
    resetTimer();
});

function startTimer() {
    minutes = Math.floor(totalTime / 60);
    seconds = totalTime - minutes * 60;

    console.log('working studying');

    if (totalTime < 0) {
        intervals++;
        console.log(intervals);
        totalTime = 5;
        breakTime = 2;
        breakTimer();
    }

    displayTime(minutes, seconds);

    totalTime--;
}

function pauseTimer() {
    clearInterval(timer);
    displayTime(minutes, seconds);
}

function resetTimer() {
    clearInterval(timer);
    paused = true;
    startButton.innerHTML = 'Start';
    totalTime = 25 * 60;
    minutes = Math.floor(totalTime / 60);
    seconds = totalTime - minutes * 60;
    document.getElementById('time').innerHTML = `${minutes} : 0${seconds}`;
}

function breakTimer() {
    clearInterval(timer);

    minutes = Math.floor(breakTime / 60);
    seconds = breakTime - minutes * 60;

    if (intervals == 4) {
        console.log('long break time');
        intervals = 0;

        var message = setTimeout(() => {
            document.getElementById('time').innerHTML =
                "<h6>It's time for a longer break</h6>";
        }, 4000);

        clearTimeout(message);

        breakTime = 500;
        timer = setInterval(breakTimer, 1000);
    } else {
        console.log('normal break time');
        timer = setInterval(breakTimer, 1000);
        if (breakTime <= 0) {
            clearInterval(timer);
            timer = setInterval(startTimer, 1000);
            totalTime = 5;
        }
    }

    displayTime(minutes, seconds);

    breakTime -= 1;
}

function displayTime(minutes, seconds) {
    if (minutes < 10 && seconds < 10) {
        document.getElementById('time').innerHTML = `0${minutes} : 0${seconds}`;
    } else if (minutes < 10) {
        document.getElementById('time').innerHTML = `0${minutes} : ${seconds}`;
    } else if (seconds < 10) {
        document.getElementById('time').innerHTML = `${minutes} : 0${seconds}`;
    } else {
        document.getElementById('time').innerHTML = `${minutes} : ${seconds}`;
    }
}

function rainSound() {
    var audio = new Audio('.');
}
