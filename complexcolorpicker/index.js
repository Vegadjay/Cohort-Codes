const originalColor = document.getElementById("orignal-color");
const colorPicker = document.getElementById("color-picker");
const complementaryColors = document.getElementById("complementary-color");

colorPicker.addEventListener("input", () => {
    const inputColor = colorPicker.value;
    const newColor = parseInt(inputColor.slice(1), 16);

    const complementaryColor = 0xFFFFFF ^ newColor;
    const fnComplementary = "#" + complementaryColor.toString(16).padStart(6, "0");

    originalColor.style.backgroundColor = inputColor;
    complementaryColors.style.backgroundColor = fnComplementary;

    console.log("Original Color:", inputColor);
    console.log("Complementary Color:", fnComplementary);
});
