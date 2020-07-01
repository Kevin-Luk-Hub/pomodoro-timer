const startButton = document.querySelector('.btn.start');
const pauseButton = document.querySelector('.btn.pause');

startButton.addEventListener('click', () => {
    startTimer();
});

function startTimer() {
    var minutes = 25;
    document.getElementById('time').innerHTML = minutes + ' : ' + '00';
}
