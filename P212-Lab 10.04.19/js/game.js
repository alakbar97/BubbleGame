let startButton = document.getElementById('start');
let gameSpace = document.getElementsByClassName('game-area')[0];
let resultSpan = document.getElementById('result');
let sound = document.getElementById('sound');
let score = 0;
let interval = null;
startButton.addEventListener('click', function () {

    interval = setInterval(function () {
        let span = document.createElement('span');
        span.className = "bubble";
        span.style.top = `${randomNumber(550)}px`;
        span.style.left = `${randomNumber(490)}px`;
        gameSpace.appendChild(span);
        span.addEventListener('click', function (e) {
            e.stopPropagation();
            this.remove();
            score++;
            resultSpan.innerText = score;
            sound.play();
        });
    }, 2000);
});

gameSpace.addEventListener('click', () => {
    clearInterval(interval);
    resultSpan.innerText = 0;
});

function randomNumber(num) {
    let random = Math.random();
    let curvedNumber = Math.round(random * num);
    return curvedNumber;
}