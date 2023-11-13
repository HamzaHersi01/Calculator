inputs = {
    num1: null,
    operand: null,
    num2: null,
    sum: null,
    previousSum: null,
    lastKey: null,
};

const currentCal = document.querySelector(".currentCal");

function add(x, y) {
    if(y === null){
        y = 0;
    }
    return x + y;
}

function sub(x, y) {
    if(y === null){
        y = 0;
    }
    return x - y;
}

function mult(x, y) {
    if(y === null){
        y = 0;
    }
    return x * y;
}

function div(x, y) {
    if(y === null){
        y = 0;
    }
    return x / y;
}

function formatDisplay(){
    inputs.num1 = inputs.sum;
    inputs.operand = null;
    inputs.num2 = null;
    inputs.sum = null;
    updateDisplay();
}

function clear(){
    inputs.num1 = null;
    inputs.operand = null;
    inputs.num2 = null;
    inputs.sum = null;
    currentCal.textContent = ` `;
}


function updateDisplay() {
    if (inputs.operand === null && inputs.num2 === null) {
        currentCal.textContent = `${inputs.num1} `;
        console.log("Num1");
    } else if (inputs.operand != null && inputs.num2 === null) {
        currentCal.textContent = `${inputs.num1} ${inputs.operand}`;
        console.log("operand");
    } else {
        currentCal.textContent = `${inputs.num1} ${inputs.operand} ${inputs.num2}`;
    }
}

function appendInput(key, number) {
    if (key === "num1") {
        if (inputs.num1 === null) {
            inputs.num1 = number;
            inputs.lastKey= 'num1'
            updateDisplay();
        } else {
            inputs.num1 = String(inputs.num1 + number);
            updateDisplay();
        }
    } else {
        if (inputs.num2 === null) {
            inputs.num2 = number;
            inputs.lastKey= 'num2'
            updateDisplay();
        } else {
            inputs.num2 = String(inputs.num2 + number);
            updateDisplay();
        }
    }
}

function calculate(inputs) {
    switch (inputs.operand) {
        case "+":
            return add(inputs.num1, inputs.num2);
        case "-":
            return sub(inputs.num1, inputs.num2);
        case "*":
            return mult(inputs.num1, inputs.num2);
        case "/":
            return div(inputs.num1, inputs.num2);
    }
}

function init() {
    numbers = document.querySelectorAll(".number");
    numbers.forEach((button) => {
        button.addEventListener("click", function (event) {
            const number = event.target.id;
            if (inputs.operand === null) {
                appendInput("num1", number);
            } else {
                appendInput("num2", number);
            }
        });
    });

    operands = document.querySelectorAll(".operand");
    operands.forEach((operand) => {
        operand.addEventListener("click", function (event) {
            if(inputs.num1 != null){
            inputs.operand = event.target.id;
            inputs.lastKey= 'operand'
            updateDisplay();
            }
        });
    });

    equals = document.querySelector(".equal");
    equals.addEventListener("click", function () {
        inputs.num1 = Number(inputs.num1);
        inputs.num2 = Number(inputs.num2);
        if(inputs.num1 && inputs.num2 && inputs.operand){
        inputs.sum = calculate(inputs);
        currentCal.textContent = inputs.sum;
        inputs.lastKey='num1';
        formatDisplay();
        console.log(inputs)
        }
    });

    document.querySelector('.clear').addEventListener('click',function(){
        clear();
    });

    document.querySelector('.delete').addEventListener('click', function() {
        if (inputs.lastKey) {
            console.log("Delete");
            console.log(inputs.lastKey);
            switch (inputs.lastKey) {
                case 'num2':
                    let number2 = inputs.num2;
                    number2 = number2.split("");
                    if (number2.length > 0) {
                        number2.pop();
                        inputs.num2 = number2.join('');
                        updateDisplay();
                    } else {
                        inputs.num2 = null;
                        inputs.lastKey = 'operand';
                    }
                    break;
                case 'operand':
                    if (inputs.operand !== null) {
                        inputs.operand = null;
                        updateDisplay();
                    } else {
                        inputs.lastKey = 'num1';
                    }
                    break;
                case 'num1':
                    console.log("Case1");
                    let number1 = inputs.num1;
                    number1 = number1.split("");
                    if (number1.length > 0) {
                        number1.pop();
                        inputs.num1 = number1.join('');
                        updateDisplay();
                    }
                    break;
            }
        }
    });
}

init();