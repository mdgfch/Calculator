const add = function(x, y) {
    return x + y;
}

const subtract = function(x, y) {
    return x - y;
}

const multiply = function(x, y) {
    return x * y;
}

const divide = function(x, y) {
    return x / y;
}

const operate = function(operator, x, y) {
    return operator(x, y);
}

var display = document.querySelector('.display');

function populateDisplay(x) {
    display.textContent += x
}

document.getElementById('0').addEventListener('click', function() {
    populateDisplay(0);
});
document.getElementById('1').addEventListener('click', function() {
    populateDisplay(1);
    console.log(displayValue)
})