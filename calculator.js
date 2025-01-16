const btn7 = document.getElementById("7")
const btn8 = document.getElementById("8")
const btn9 = document.getElementById("9")
const btn4 = document.getElementById("4")
const btn5 = document.getElementById("5")
const btn6 = document.getElementById("6")
const btn1 = document.getElementById("1")
const btn2 = document.getElementById("2")
const btn3 = document.getElementById("3")
const btnAdd = document.getElementById("add")
const btnSubtract = document.getElementById("subtract")
const btnDivide = document.getElementById("divide")
const btnMutiply = document.getElementById("multiply")
const btnEqual = document.getElementById("equal")
const btnClear = document.getElementById("clear")

let firstNumber = ""
let secondNumber = ""
let operator = ""

function add (a, b) {
    return a + b
}

function subtract (a, b) {
	return a - b
};

function multiply (a, b) {
  return a * b
};

function divide (a, b) {
    return a / b
};

function operate (firstNumber, secondNumber, operator) {
    if (operator === "+") {
        add(firstNumber, secondNumber)
    } else if (operator === "-") {
        subtract(firstNumber, secondNumber)
    } else if (operator === "*") {
        multiply(firstNumber, secondNumber)
    } else {
        divide(firstNumber, secondNumber)
}
}