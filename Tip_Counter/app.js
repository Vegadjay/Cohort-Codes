document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const billAmount = document.getElementById('bill-amount');
    const billPercentage = document.getElementById('bill-percentage');
    const numPeople = document.getElementById('num-people');
    const totalTip = document.getElementById('total-tip');
    const perPersonTip = document.getElementById('per-person-tip');
    const totalPerPerson = document.getElementById('total-per-person');
    const calculateBtn = document.getElementById('calculate-btn');
    const resetBtn = document.getElementById('reset-btn');
    const tipBtns = document.querySelectorAll('.tip-btn');
    const decreasePeople = document.getElementById('decrease-people');
    const increasePeople = document.getElementById('increase-people');

    // Format currency
    function formatCurrency(amount) {
        return '$' + parseFloat(amount).toFixed(2);
    }

    // Calculate tips
    function calculateTips() {
        const bill = parseFloat(billAmount.value) || 0;
        const percentage = parseFloat(billPercentage.value) || 0;
        const people = parseInt(numPeople.value) || 1;

        if (bill <= 0) {
            alert('Please enter a valid bill amount');
            return;
        }

        const tipAmount = bill * (percentage / 100);
        const tipPerPerson = tipAmount / people;
        const totalAmount = bill + tipAmount;
        const totalPersonAmount = totalAmount / people;

        // Update display
        totalTip.textContent = formatCurrency(tipAmount);
        perPersonTip.textContent = formatCurrency(tipPerPerson);
        totalPerPerson.textContent = formatCurrency(totalPersonAmount);

        // Add active class to results
        totalTip.classList.add('animate-pulse');
        perPersonTip.classList.add('animate-pulse');
        totalPerPerson.classList.add('animate-pulse');

        // Remove animation after a second
        setTimeout(() => {
            totalTip.classList.remove('animate-pulse');
            perPersonTip.classList.remove('animate-pulse');
            totalPerPerson.classList.remove('animate-pulse');
        }, 1000);
    }

    // Percentage button click
    tipBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            tipBtns.forEach(b => b.classList.remove('bg-blue-500', 'text-white'));
            this.classList.add('bg-blue-500', 'text-white');
            billPercentage.value = this.dataset.value;

            // Auto calculate if bill amount is already entered
            if (parseFloat(billAmount.value) > 0) {
                calculateTips();
            }
        });
    });

    // Calculate button click
    calculateBtn.addEventListener('click', calculateTips);

    // Reset button click
    resetBtn.addEventListener('click', function () {
        billAmount.value = '';
        billPercentage.value = '';
        numPeople.value = '1';
        totalTip.textContent = '$0.00';
        perPersonTip.textContent = '$0.00';
        totalPerPerson.textContent = '$0.00';
        tipBtns.forEach(btn => btn.classList.remove('bg-blue-500', 'text-white'));
    });

    // People counter buttons
    decreasePeople.addEventListener('click', function () {
        let value = parseInt(numPeople.value) || 1;
        numPeople.value = Math.max(1, value - 1);
        if (parseFloat(billAmount.value) > 0 && parseFloat(billPercentage.value) > 0) {
            calculateTips();
        }
    });

    increasePeople.addEventListener('click', function () {
        let value = parseInt(numPeople.value) || 1;
        numPeople.value = value + 1;
        if (parseFloat(billAmount.value) > 0 && parseFloat(billPercentage.value) > 0) {
            calculateTips();
        }
    });

    // Real-time calculation when inputs change
    [billAmount, billPercentage, numPeople].forEach(input => {
        input.addEventListener('input', function () {
            if (parseFloat(billAmount.value) > 0 && parseFloat(billPercentage.value) > 0) {
                calculateTips();
            }
        });
    });

    // Enter key to calculate
    document.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            calculateTips();
        }
    });
});