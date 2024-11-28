function appendToScreen(value) {
    document.getElementById('screen').value += value;
}

function clearScreen() {
    document.getElementById('screen').value = '';
}

function calculate() {
    let expression = document.getElementById('screen').value;
    let result = eval(expression);
    document.getElementById('screen').value = result;
}
