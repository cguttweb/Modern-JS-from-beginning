const x = Math.floor(Math.random() * 100 + 1)
const y = Math.floor(Math.random() * 50 + 1)

// Create a variable for the sum, difference, product, quotient and remainder of `x` and `y`. Log the output in a string that shows the two numbers of `x` and `y` along with the operator and result.

const sumNumbers = x + y
const difference = x - y
const product = x * y
const quotient = x ** y
const remainder = x % y

let myString = `x is ${x} y is ${y} the sum of these is is ${x} + ${y} = ${sumNumbers}, the difference is ${x} - ${y} = ${difference}, product is ${x} * ${y} = ${product}, the quotient is ${x} ** ${y}${quotient} and the remainder is ${x} % ${y} = ${remainder}.`

console.log(myString)
