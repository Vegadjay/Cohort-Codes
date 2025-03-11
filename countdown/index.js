const timerCount = document.getElementById("timer-count");
const startButton = document.getElementById("startButton");
const inputValue = document.getElementById("number-id");
const errorMessage = document.getElementById("error-msg");

let timer;

startButton.addEventListener("click", () => {
    const inputTextValue = inputValue.value.trim();
    startFunction(inputTextValue);
});

function updateTimer(value) {
    clearInterval(timer);

    let countTime = value;
    timerCount.textContent = countTime;

    timer = setInterval(() => {
        if (countTime <= 0) {
            clearInterval(timer);
            errorMessage.style.color = "yellow";
            errorMessage.textContent = "Time is complete";
        } else {
            countTime--;
            timerCount.textContent = countTime;
        }
    }, 1000);
}

function startFunction(value) {
    const parsedValue = parseInt(value, 10);

    if (isNaN(parsedValue) || parsedValue <= 0) {
        errorMessage.style.color = "red";
        errorMessage.textContent = "Please enter a valid positive number.";
        return;
    }

    errorMessage.textContent = "";
    updateTimer(parsedValue);
}
