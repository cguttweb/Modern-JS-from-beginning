function greeting(name) {
    console.log(`Hello ${name}`)
}

greeting('Chloe')

// parameters vs arguments

// parameters passing into a function
function addNumbers(num1, num2){
    console.log(num1 + num2)
}

addNumbers(9, 10) // these are arguments

function multiply(num1, num2){
    return num1 * num2 // nothing will run after this returns stops the function
}

const result = multiply(14, 6)
console.log(result)