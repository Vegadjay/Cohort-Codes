document.addEventListener('DOMContentLoaded', function () {
    const diceEl = document.getElementById('dice');
    const rollButton = document.getElementById('rollButton');
    const rollHistory = document.getElementById('rollHistory');
    const diceContainer = document.querySelector('.dice-container');

    const diceFaces = ['\u2680', '\u2681', '\u2682', '\u2683', '\u2684', '\u2685'];;

    function rollDice() {
        rollButton.disabled = true;

        diceContainer.classList.add('rolling');

        let rollCount = 0;
        const rollInterval = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * 6);
            diceEl.textContent = diceFaces[randomIndex];
            rollCount++;

            if (rollCount >= 10) {
                clearInterval(rollInterval);
                finalizeRoll();
            }
        }, 50);
    }

    function finalizeRoll() {
        setTimeout(() => {
            diceContainer.classList.remove('rolling');

            const result = Math.floor(Math.random() * 6);
            diceEl.textContent = diceFaces[result];

            addToHistory(result + 1);

            rollButton.disabled = false;
        }, 500);
    }


    rollButton.addEventListener('click', rollDice);
});