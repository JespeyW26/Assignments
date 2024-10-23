function add() {
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let result = number1 + number2;
    console.log(result)
    document.getElementById('result').textContent = result;
}

function subtract() {
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let result = number1 - number2;
    console.log(result)
    document.getElementById('result').textContent = result;
}

function multiply() {
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let result = number1 * number2;
    console.log(result)
    document.getElementById('result').textContent = result;
}

function divide() {
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let result = number1 / number2;
    console.log(result)
    document.getElementById('result').textContent = result;
}