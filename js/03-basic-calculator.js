// IMPORT THE MODULE
import * as calc from "./modules/calculator.js";

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER

let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));

let operation;

while (true) {
    operation = String(prompt("Enter 'add', 'subtract', 'multiply', or 'divide':"));
    if (operation === "add" || operation === "subtract" || operation === "multiply" || operation === "divide") {
        break;
    } else {
        alert("You did not enter 'add', 'subtract', 'multiply', or 'divide'. Try again.");
    }
}

// CHECK TO SEE WHAT OPERATION THEY'RE USING
// CALL THE APPROPRIATE FUNCTION

switch (operation) {
    case "add":
        alert(calc.add(num1, num2));
        break;
    case "subtract":
        alert(calc.subtract(num1, num2));
        break;
    case "multiply":
        alert(calc.multiply(num1, num2));
        break;
    case "divide":
        alert(calc.divide(num1, num2));
}

