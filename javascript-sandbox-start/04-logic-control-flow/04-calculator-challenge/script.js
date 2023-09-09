const calculator = (num1, num2, operator) => {
    switch (operator) {
        case '+':
            return num1 + num2
            break;
        case '-':
            return num1 - num2
            break;
        case '*':
            return num1 * num2
        break;
        case '/':
            return num1 / num2
        break; 
        default:
            return `${operator} is not a valid operator`
            break;
    }
}


console.log(calculator(3, 10, '+'))
console.log(calculator(24, 4, '-'))
console.log(calculator(3, 4, '*'))
console.log(calculator(12, 4, '/'))
console.log(calculator(3, 4, '?'))