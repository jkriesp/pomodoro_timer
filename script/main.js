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

//timeElement.innerText = countDownTo;
//timeContainer.appendChild(timeElement);

let x = setInterval(function () {
    // Get minutes
    let now = new Date().getMinutes();
    let nowSeconds = new Date().getSeconds();

    // Distance between now and countDownTo
    let minutes = 0;
    if (countDownTo - now <= 0) {
        minutes = countDownTo - now + 60;
    } else {
        minutes = countDownTo - now;
    }
    
    let seconds = 60 - nowSeconds;
   

    timeElement.innerText = minutes + "m " + seconds + "s";
    timeContainer.appendChild(timeElement);
}, 1000)