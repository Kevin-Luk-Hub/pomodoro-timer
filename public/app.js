const startButton = document.querySelector('.btn.start');
const pauseButton = document.querySelector('.btn.pause');
const resetButton = document.querySelector('.btn.reset');

var totalTime = 1000;

var minutes;
var seconds;
var timer;

startButton.addEventListener('click', () => {
    clearInterval(timer);
    timer = setInterval(startTimer, 1000);
    if ((startButton.innerHTML = 'Start')) {
        startButton.innerHTML = 'Pause';
        console.log(startButton.innerHTML);
    } else {
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

    if (totalTime <= 0) {
        clearInterval(timer);
        totalTime = 10 * 60;
    }

    if (seconds < 10) {
        document.getElementById('time').innerHTML = `${minutes} : 0${seconds}`;
    } else if (minutes < 10) {
        document.getElementById('time').innerHTML = `0${minutes} : ${seconds}`;
    } else if (minutes < 10 && seconds < 10) {
        document.getElementById('time').innerHTML = `0${minutes} : $0{seconds}`;
    } else {
        document.getElementById('time').innerHTML = `${minutes} : ${seconds}`;
    }
    totalTime -= 1;
}

function resetTimer() {
    clearInterval(timer);
    totalTime = 25 * 60;
    minutes = Math.floor(totalTime / 60);
    seconds = totalTime - minutes * 60;
    document.getElementById('time').innerHTML = `${minutes} : 0${seconds}`;
}
