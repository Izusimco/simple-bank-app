

// Get references to the input elements and buttons
const depositInput = document.getElementById('depositInput');
const withdrawInput = document.getElementById('withdrawInput');
const balanceInput = document.getElementById('balanceInput');
const addButton = document.querySelector('.addbtn');
const subButton = document.querySelector('.subbtn');

// Add event listener for the "Add" button
addButton.addEventListener('click', () => {
    // Parse input values to floats
    const depositAmount = parseFloat(depositInput.value);
    const balanceAmount = parseFloat(balanceInput.value);

    // Check if the input is a valid number
    if (!isNaN(depositAmount)) {
        // Update the balance by adding the deposit amount
        balanceInput.value = (balanceAmount + depositAmount).toFixed(2);
        // Reset the deposit input
        depositInput.value = '0.00';
    }
});

// Add event listener for the "Subtract" button
subButton.addEventListener('click', () => {
    // Parse input values to floats
    const withdrawAmount = parseFloat(withdrawInput.value);
    const balanceAmount = parseFloat(balanceInput.value);

    // Check if the input is a valid number
    if (!isNaN(withdrawAmount)) {
        // Ensure withdrawal doesn't exceed the current balance
        if (balanceAmount >= withdrawAmount) {
            // Update the balance by subtracting the withdrawal amount
            balanceInput.value = (balanceAmount - withdrawAmount).toFixed(2);
            // Reset the withdrawal input
            withdrawInput.value = '0.00';
        } else {
            alert('Insufficient balance for withdrawal.');
        }
    }
});
