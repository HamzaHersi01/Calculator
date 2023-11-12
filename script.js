inputs = {
    num1:null,
    operand: null,
    num2: null
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