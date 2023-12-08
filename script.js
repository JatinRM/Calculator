const display = document.querySelector('.display');

const displayValue = (value) => {
    display.value += value;
}

const clearDisplay = () => {
    display.value = '';
}

const calculate = () => {
    var input = display.value;
    display.value = eval(input);
}