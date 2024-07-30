console.log('Welcome to Calculate!');

// Basic math operations
function add (numberOne, numberTwo) {
    return numberOne + numberTwo;
};

function subtract (numberOne, numberTwo) {
    return numberOne - numberTwo;
};

function multiply (numberOne, numberTwo) {
    return numberOne * numberTwo;
};

function divide (numberOne, numberTwo) {
    return numberOne / numberTwo;
};

function operate (numberOne, operator, numberTwo) {
    switch (operator) {
        case "+":
            return add(numberOne, numberTwo);
        case "-":
            return subtract(numberOne, numberTwo);
        case "×":
            return multiply(numberOne, numberTwo);
        case "÷":
            if (numberTwo == 0) {
                return 'Error!';
            } else {
                return divide(numberOne, numberTwo);
            };
    };
};

// Calculator logic
let firstNumber,
    operator,
    secondNumber,
    afterEqual;
const displayedNumber = document.querySelector(".result");
const equation = document.querySelector('.equation');

// Number buttons behavior
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // If number if pressed, limit to 10 number and remove all active operator
        if (document.querySelector('.active')) {
            const activeOperator = document.querySelector('.active');
            activeOperator.classList.remove('active');
            displayedNumber.textContent = "0";
        };

        if (displayedNumber.textContent.length < 10) {
            const buttonValue = e.target.value;

            // Parse number if not decimal
            if (buttonValue === 'decimal' && !displayedNumber.textContent.includes('.')) {
                displayedNumber.textContent = displayedNumber.textContent.concat('.')
            } else if (buttonValue != 'decimal') {
                parsedNumber = displayedNumber.textContent.concat(buttonValue);
                displayedNumber.textContent = Number(parsedNumber);
            };
        };
    });
});

// Operator buttons behavior
const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // If operator is pressed, store the current number in firstNumber and get operator value
        if (!document.querySelector('.active')) {
            e.target.classList.add('active');
            
            if (firstNumber && !afterEqual) {
                // If there is preceeding number, directly commence operation
                secondNumber = Number(displayedNumber.textContent);
                equation.textContent = `${firstNumber} ${operator} ${secondNumber}`
                operationResult = operate(firstNumber, operator, secondNumber);

                displayedNumber.textContent = operationResult;
                firstNumber = operationResult;
            } else {
                // Else store the current number & operator
                firstNumber = Number(displayedNumber.textContent);
            };
            operator = e.target.value;
            afterEqual = false;
        };
    });
});

// Single operator buttons
const singleButtons = document.querySelectorAll('.single');
singleButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonValue = e.target.value;

        switch (buttonValue) {
            case 'reset':
                // On AC reset all to default state
                if (document.querySelector('.active')) {
                    e.target.classList.remove('active');
                };
                firstNumber = null;
                operator = null;
                secondNumber = null;
                afterEqual = null;
                equation.textContent = '';
                displayedNumber.textContent = '0';
                break

            case 'equal':
                if (secondNumber && afterEqual) {
                    // Pressing "=" after operation redo the operation
                    equation.textContent = `${firstNumber} ${operator} ${secondNumber}`;
                    operationResult = operate(firstNumber, operator, secondNumber);

                    displayedNumber.textContent = operationResult;
                    firstNumber = operationResult;
                } else if (firstNumber && operator) {
                    // If there's no second number, use own self for operation
                    secondNumber = Number(displayedNumber.textContent);
                    equation.textContent = `${firstNumber} ${operator} ${secondNumber}`;
                    operationResult = operate(firstNumber, operator, secondNumber);

                    displayedNumber.textContent = operationResult;
                    firstNumber = operationResult;
                };
                afterEqual = true;
                break;
            
            case 'percent':
                // On %, set secondNumber to be 100 and perform operation
                firstNumber = Number(displayedNumber.textContent);
                secondNumber = 100;
                equation.textContent = `${firstNumber}%`
                operationResult = operate(firstNumber, '÷', secondNumber);

                displayedNumber.textContent = operationResult;
                firstNumber = operationResult;
                afterEqual = true;
                break;

            case 'negate':
                // On negate, inverse the number and change equation
                if (firstNumber == displayedNumber.textContent) {
                    firstNumber = Number(-firstNumber);
                };
                displayedNumber.textContent = Number(-displayedNumber.textContent);
                break;

            case 'delete':
                let correctedText;
                // Set to 0 if there's only 1 number
                if (displayedNumber.textContent.length > 1) {
                    correctedText = displayedNumber.textContent.slice(0, -1);
                } else {
                    correctedText = "0";
                };

                // Change the stored number in the equation
                if (firstNumber == displayedNumber.textContent) {
                    firstNumber = correctedText;
                };
                displayedNumber.textContent = correctedText;
                break;
        };
    });
});