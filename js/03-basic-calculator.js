// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation) {
    switch (operation) {
        case 'add':
            return x + y;
        case 'subtract':
            return x - y;
        case 'multiply':
            return x * y;
        case 'divide':
            if (y === 0) {
                return "Cannot divide by zero";
            }
            return x / y;
        default:
            return "Invalid operation";
    }
}

// COLLECT FIRST NUMBER FROM USER
do {
    let userFirstNum = prompt("Enter the first number:");
    let num1 = parseFloat(userFirstNum);

// COLLECT SECOND NUMBER FROM USER
    let userSecondNum = prompt("Enter the second number:");
    let num2 = parseFloat(userSecondNum);

// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
    let operationChoice = prompt("Enter operation to (add, subtract, multiply, divide):");

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
    if (isNaN(num1) || isNaN(num2)) {
        alert("One or both entries are invalid, please enter valid numbers.");
        continue;
    }
    let result = calculate(num1, num2, operationChoice);
    if (result === "Cannot divide by zero" || result === "Invalid operation") {
        alert(result);
        continue;
    } else {
        alert("The result is: " + result);
        break;
    }
} while (true);