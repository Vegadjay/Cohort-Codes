const calScreen = document.getElementById("cla-screen");

function appendWord(number) {
    let valueofCalString = calScreen.value;
    if (valueofCalString === undefined) {
        console.log(valueofCalString);
        calScreen.innerText = number;
    }
    else {
        let valueofCalString = calScreen.value;
        let calString = valueofCalString.appendWord(number);
        console.log(calString);
    }
}