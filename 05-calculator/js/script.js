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
            return divide(numberOne, numberTwo);
    };
};

// Calculator display
let firstNumber,
    operator,
    secondNumber,
    afterEqual;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonType = e.target.classList[0];
        const displayedNumber = document.querySelector(".result");
        const equation = document.querySelector('.equation');

        switch (buttonType) {
            case 'number':
                // If number if pressed, limit to 10 number and remove all active operator
                if (document.querySelector('.active')) {
                    const activeOperator = document.querySelector('.active');
                    activeOperator.classList.remove('active');
                    displayedNumber.textContent = "0";
                };

                if (displayedNumber.textContent.length < 10) {
                    const buttonValue = e.target.value;
                    parsedNumber = displayedNumber.textContent.concat(buttonValue);
                    parsedNumber = parseInt(parsedNumber).toString();
                    displayedNumber.textContent = parsedNumber;
                };
                break;
            
            case 'operator':
                // If operator is pressed, store the current number in firstNumber and get operator value
                if (!document.querySelector('.active')) {
                    e.target.classList.add('active');
                    
                    if (firstNumber && !afterEqual) {
                        // If there is preceeding number, commence operation
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
                break;

            case 'single':
                // Logic for single number operation
                const buttonValue = e.target.value;
                switch (buttonValue) {
                    case 'reset':
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
                            equation.textContent = `${firstNumber} ${operator} ${secondNumber}`
                            operationResult = operate(firstNumber, operator, secondNumber);
                            displayedNumber.textContent = operationResult;
                            firstNumber = operationResult;
                        } else if (firstNumber && operator) {
                            // If there's no second number, use own self for operation
                            secondNumber = Number(displayedNumber.textContent);
                            equation.textContent = `${firstNumber} ${operator} ${secondNumber}`
                            operationResult = operate(firstNumber, operator, secondNumber);
                            displayedNumber.textContent = operationResult;
                            firstNumber = operationResult;
                        };
                        afterEqual = true;
                        break;
                }
        };
    });
});