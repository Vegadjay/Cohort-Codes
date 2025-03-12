const originalColor = document.getElementById("orignal-color");
const colorPicker = document.getElementById("color-picker");
const complementaryColors = document.getElementById("complementary-color");
const colorOfText = document.getElementById("complementary-color-text");
const originalColorText = document.getElementById("orignal-color-text");
const littleBox = document.getElementById("complementry-color-little-div");

colorPicker.addEventListener("input", () => {
    const inputColor = colorPicker.value;
    const newColor = parseInt(inputColor.slice(1), 16);

    const complementaryColor = 0xFFFFFF ^ newColor;
    const fnComplementary = "#" + complementaryColor.toString(16).padStart(6, "0");

    littleBox.style.backgroundColor = fnComplementary;
    originalColor.style.backgroundColor = inputColor;
    complementaryColors.style.backgroundColor = fnComplementary;

    colorOfText.style.color = inputColor;
    originalColorText.style.color = fnComplementary;

    littleBox.dataset.color = fnComplementary;
});

littleBox.addEventListener("click", () => {
    const colorToCopy = littleBox.dataset.color;

    navigator.clipboard.writeText(colorToCopy).then(() => {
        alert(`Copied: ${colorToCopy}`);
    }).catch(err => {
        console.error("Failed to copy: ", err);
    });
});
