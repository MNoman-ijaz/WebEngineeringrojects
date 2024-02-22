function performOperations() {

    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);


    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers.");
        return;
    }


    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");

    document.getElementById("add-result").innerText = `Addition: ${add(num1, num2)}`;
    document.getElementById("subtract-result").innerText = `Subtraction: ${subtract(num1, num2)}`;
    document.getElementById("multiply-result").innerText = `Multiplication: ${multiply(num1, num2)}`;
    document.getElementById("divide-result").innerText = `Division: ${divide(num1, num2)}`;
}
