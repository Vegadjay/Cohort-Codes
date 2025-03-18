const colorChnage = document.getElementById("color-change").addEventListener("click", changeColor);
const automaticColorChange = document.getElementById("automatic-color-change").addEventListener("click", automaticColorChanger);
const stopButton = document.getElementById("stop-color-change").addEventListener("click", stopAutomaticColorChanging)
const colorSpan = document.getElementById("color-code");
const body = document.getElementById("body");
let colorChanging = null;

function changeColor() {
    finalColorString = "";
    colorCodes = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', "b", "c", "d", "e", "f"];

    for (let i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * colorCodes.length).toString();
        finalColorString += colorCodes[random];
    }
    body.style.backgroundColor = `#${finalColorString.toString()}`;
    colorSpan.innerText = finalColorString;
}

function automaticColorChanger() {
    colorChanging = setInterval(changeColor, 200);
}

function stopAutomaticColorChanging() {
    clearInterval(colorChanging);
}