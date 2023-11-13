inputs = {
    num1:null,
    operand: null,
    num2: null,
    sum: null,
    previousSum: null,
}

function add(x, y){
    return x+y
}
    

function sub(x, y){
    return x-y
}

function mult(x, y){
    return x*y
}

function div(x, y){
    return x/y
}

function updateDisplay(){
    if(inputs.operand=== null & inputs.num2=== null){
        document.querySelector('.currentCal').textContent= `${inputs.num1} `;
    }else if (inputs.operand=== !null & inputs.num2=== null){
        document.querySelector('.currentCal').textContent= `${inputs.num1} ${inputs.operand}`;
    }else{
        document.querySelector('.currentCal').textContent= `${inputs.num1} ${inputs.operand} ${inputs.num2}`;
    }
}

function calculate(inputs){
    switch(inputs.operand) {
        case '+':
            return add(inputs.num1, inputs.num2);
        case '-':
            return sub(inputs.num1, inputs.num2);
        case '*':
            return mult(inputs.num1, inputs.num2);
        case '/':
            return div(inputs.num1, inputs.num2);
        default:
            return "Invalid operand";
    }
}

function init(){
    numbers = document.querySelectorAll('.number');
    numbers.forEach(button => {
        button.addEventListener('click',function(event){
        const number = event.target.id;
        if(inputs.operand === null){
            if(inputs.num1 === null){
                inputs.num1 = number;
                updateDisplay();
            }else{
                inputs.num1 = String(inputs.num1 + number)
                updateDisplay();
            }
            

        }else{
            if(inputs.num2 === null){
                inputs.num2 = number;
                updateDisplay();
            }else{
                inputs.num2 = String(inputs.num2 + number);
                updateDisplay();
            }
        }
        
    })

    operands = document.querySelectorAll('.operand');
    operands.forEach(operand =>{
        operand.addEventListener('click', function(event){
            inputs.operand = event.target.id;
            updateDisplay(); })
    })
    
    equals = document.querySelector('.equal');
    equals.addEventListener('click',function(){
        inputs.num1 = Number(inputs.num1);
        inputs.num2 = Number(inputs.num2);
        inputs.sum = calculate(inputs)
        document.querySelector('.previousAns').textContent = inputs.sum
        
    })

    });
    

}

init();