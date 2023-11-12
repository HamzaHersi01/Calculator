inputs = {
    num1:null,
    operand: null,
    num2: null,
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
        if(inputs.num1 === null){
            inputs.num1 = number;
        }else if (inputs.num1 === null){
            inputs.num2 = number;
        }})

    operands = document.querySelectorAll('.operand');
    operands.forEach(operand =>{
        operand.addEventListener('click', function(event){

        })
    })
    });
    

}

init();