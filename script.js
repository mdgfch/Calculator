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

console.log(operate(divide, 10, 2))