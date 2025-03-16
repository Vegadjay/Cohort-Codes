document.getElementById('active-button').addEventListener('click', function () {
    const input = document.getElementById('string-input').value;
    const result = document.getElementById('ans-span');

    if (!input) {
        result.textContent = "Please enter a word or phrase";
        result.className = "mt-6 text-xl font-medium text-yellow-400 h-8 flex items-center justify-center";
        return;
    }

    const cleanInput = input.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversed = cleanInput.split('').reverse().join('');

    if (cleanInput === reversed) {
        result.textContent = "Yes, it's a palindrome!";
        result.className = "mt-6 text-xl font-medium text-green-400 h-8 flex items-center justify-center";
    } else {
        result.textContent = "Not a palindrome";
        result.className = "mt-6 text-xl font-medium text-red-400 h-8 flex items-center justify-center";
    }
});

document.getElementById('string-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.getElementById('active-button').click();
    }
});