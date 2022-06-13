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
var value = ""
var prev = ""

function setValue(input) {
    value = value + `${input}`
}
function populateDisplay() {
    display.textContent = value;
}
function clearDisplay() {
    display.textContent = "";
}
function resetValues() {
    value = "";
    prev = "";
}
function newValue() {
    prev = value;
    value = "";
}
function joinValue() {
    if (prev != "") {
        value = (operate(operator, Number(prev), Number(value)));
        populateDisplay();
    } 
}

document.getElementById('0').addEventListener('click', function() {
    setValue(0)
    populateDisplay();
});
document.getElementById('1').addEventListener('click', function() {
    setValue(1);
    populateDisplay();
})
document.getElementById('2').addEventListener('click', function() {
    setValue(2);
    populateDisplay();
})
document.getElementById('3').addEventListener('click', function() {
    setValue(3);
    populateDisplay();
})
document.getElementById('4').addEventListener('click', function() {
    setValue(4);
    populateDisplay();
})
document.getElementById('5').addEventListener('click', function() {
    setValue(5);
    populateDisplay();
})
document.getElementById('6').addEventListener('click', function() {
    setValue(6);
    populateDisplay();
})
document.getElementById('7').addEventListener('click', function() {
    setValue(7);
    populateDisplay();
})
document.getElementById('8').addEventListener('click', function() {
    setValue(8);
    populateDisplay();
})
document.getElementById('9').addEventListener('click', function() {
    setValue(9);
    populateDisplay();
})
document.getElementById('.').addEventListener('click', function() {
    setValue(".");
    populateDisplay();
})

//operators
document.getElementById('add').addEventListener('click', function() {
    console.log("prev: ", prev, " value: ", value)
    joinValue();
    operator = add;
    newValue();
})
document.getElementById('subtract').addEventListener('click', function() {
    joinValue();
    operator = subtract;
    newValue();
    
})
document.getElementById('multiply').addEventListener('click', function() {
    joinValue();
    operator = multiply;
    newValue();
})
document.getElementById('divide').addEventListener('click', function() {
    joinValue();
    operator = divide;
    newValue();
})
//

document.getElementById('equals').addEventListener('click', function() {
    console.log("prev: ", prev, " value: ", value)
    if (operator === divide && value == "0") {
        alert("ERROR: ARE YOU OUT OF YOUR MIND??? YOU CAN'T DIVIDE BY ZERO!!")
    } else {
        let temp = value;
        value = (operate(operator, Number(prev), Number(value)));
        populateDisplay();
        prev = value;
        value = temp;
    }
})

document.getElementById('clear').addEventListener('click', function() {
    clearDisplay();
    resetValues();
})