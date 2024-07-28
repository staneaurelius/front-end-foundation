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
        case "x":
            return multiply(numberOne, numberTwo);
        case "/":
            return divide(numberOne, numberTwo);
    };
};

// Calculator display
let firstNumber, operator, secondNumber;