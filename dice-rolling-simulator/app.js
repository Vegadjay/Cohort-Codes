const dicePara = document.getElementById("dice-p");
const buttonClick = document.getElementById('button');

const diceFaces = ['\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];

function getRandomeNumber() {
    let randomeIndex = Math.floor(Math.random() * 6);
    dicePara.textContent = diceFaces[randomeIndex];
}

buttonClick.addEventListener('click', getRandomeNumber);