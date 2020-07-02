// HTML elements
const startButton = document.querySelector('.btn.start');
const resetButton = document.querySelector('.btn.reset');
const rainIcon = document.querySelector('.rain-icon');
const thunderIcon = document.querySelector('.thunder-icon');
const wavesIcon = document.querySelector('.waves-icon');

let totalTime = 25 * 60;
let shortBreakTime;
let longBreakTime;
let minutes;
let seconds;
let timer;
let intervals = 0;
let paused = true;

// let allowSound = true;

// const SOUNDS = {
//     rain: null,
//     thunder: null,
//     waves: null,
// };

// rainIcon.addEventListener('click', play);
// thunderIcon.addEventListener('click', play);
// wavesIcon.addEventListener('click', play);

// function play(e) {
//     let p = e.currentTarget;
//     e.preventDefault();

//     let fileName = p.getAttribute('data-file');
//     let src = './sound/' + fileName + '.mp3';
//     if (SOUNDS[fileName]) {
//         SOUNDS[fileName].pause();
//         SOUNDS[fileName] = null;
//     }
//     console.log(src);

//     let audio = document.createElement('audio');

//     audio.src = src;
//     audio.volume = 0.2;

//     if (allowSound) {
//         SOUNDS[fileName] = audio;
//         audio.setAttribute('data-file', fileName);
//         audio.play();
//     }

//     audio.addEventListener('playing', goAudio);
//     audio.addEventListener('ended', doneAudio);
// }

// function goAudio(e) {
//     console.log(e.target.src, 'has started playing');
// }

// function doneAudio(e) {
//     console.log(e.target.src, 'has finished playing');
//     let fileName = e.target.getAttribute('data-file');
//     SOUNDS[fileName] = null;
// }

// // triggers rain sounds
// rainIcon.addEventListener('click', () => {
//     let audio = document.getElementById('a');
//     audio.src = './sound/rain.mp3';
//     audio.volume = 0.6;
//     if (pauseSound) {
//         pauseSound = false;
//         audio.play();
//     } else {
//         pauseSound = true;
//         audio.pause();
//     }
// });

// // triggers thunder sounds
// thunderIcon.addEventListener('click', () => {
//     let audio = document.createElement('audio');
//     audio.src = './sound/thunder.mp3';
//     audio.volume = 0.6;
//     audio.play();
// });

// // triggers wave sounds
// wavesIcon.addEventListener('click', () => {
//     let audio = document.createElement('audio');
//     audio.src = './sound/waves.mp3';
//     audio.volume = 0.6;
//     audio.play();
// });

// begins the timer
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

// reset the current time
resetButton.addEventListener('click', () => {
    resetTimer();
});

// initiates the timer countdown
function startTimer() {
    minutes = Math.floor(totalTime / 60);
    seconds = totalTime - minutes * 60;

    if (totalTime < 0) {
        intervals++;
        totalTime = 25 * 60;
        shortBreakTime = 10 * 60;
        longBreakTime = 15 * 60;

        if (intervals == 4) {
            intervals = 0;
            clearInterval(timer);
            longBreakTimer();
            longAlert();
        } else {
            shortBreakTimer();
            shortAlert();
        }
    }

    displayTime(minutes, seconds);

    totalTime--;
}

// pause the timer at current time
function pauseTimer() {
    clearInterval(timer);
    displayTime(minutes, seconds);
}

// reset the timer to 25 minutes
function resetTimer() {
    clearInterval(timer);
    paused = true;
    startButton.innerHTML = 'Start';
    totalTime = 25 * 60;
    minutes = Math.floor(totalTime / 60);
    seconds = totalTime - minutes * 60;
    displayTime(minutes, seconds);
}

// initiates countdown for a short break
function shortBreakTimer() {
    clearInterval(timer);

    minutes = Math.floor(shortBreakTime / 60);
    seconds = shortBreakTime - minutes * 60;

    timer = setInterval(shortBreakTimer, 1000);

    if (shortBreakTime <= 0) {
        clearInterval(timer);
        timer = setInterval(startTimer, 1000);
        totalTime = 25 * 60;
    }

    displayTime(minutes, seconds);

    shortBreakTime -= 1;
}

// initiates countdown for a long break
function longBreakTimer() {
    clearInterval(timer);

    minutes = Math.floor(longBreakTime / 60);
    seconds = longBreakTime - minutes * 60;

    timer = setInterval(longBreakTimer, 1000);

    if (longBreakTime <= 0) {
        clearInterval(timer);
        timer = setInterval(startTimer, 1000);
        totalTime = 25 * 60;
    }

    displayTime(minutes, seconds);

    longBreakTime -= 1;
}

// function used to display and format time
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

// alert sound used when a short break begins
function shortAlert() {
    let audio = document.createElement('audio');
    audio.src = './sound/definite.mp3';
    audio.volume = 0.5;
    audio.play();
}

// alert sound used when a long break begins
function longAlert() {
    let audio = document.createElement('audio');
    audio.src = './sound/long-notification.mp3';
    audio.volume = 0.5;
    audio.play();
}