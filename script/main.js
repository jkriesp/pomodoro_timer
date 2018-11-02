let timeContainer = document.querySelector('.timeContainer');
let timeElement = document.createElement('p');
timeElement.setAttribute('id', 'time');

let now = new Date().getMinutes();
let countDownLength = 25;
let countDownTo = "";

if (now + countDownLength >= 60) {
    countDownTo = now + countDownLength - 60;
} else {
    countDownTo = now + countDownLength;
}


timeElement.innerText = countDownTo;

timeContainer.appendChild(timeElement);