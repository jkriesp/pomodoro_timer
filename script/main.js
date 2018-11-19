let timeContainer = document.querySelector('.timeContainer');
let timeElement = document.createElement('p');
timeElement.setAttribute('id', 'time');
let myCountdown = null;

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    myCountdown = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

document.getElementById('btn_start').addEventListener('click', function () {
    let duration = 60 * 25;
    startTimer(duration, timeContainer);
});

document.getElementById('btn_stop').addEventListener('click', function () {
    clearInterval(myCountdown);
    timeContainer.textContent = "25:00";
});