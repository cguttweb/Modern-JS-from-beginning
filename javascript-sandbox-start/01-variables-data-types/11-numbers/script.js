// Working with numbers
let x

const num = new Number(5) // number constructor

x = num.toString()
x = num.toString().length
x = num.toFixed(5) // fixed number of decimal places
x = num.toPrecision(2)
x = num.toExponential(2)
x = num.toLocaleString('en-gb')
x = num.valueOf()

// Number object has some methods
x = Number.MAX_VALUE
x = Number.MIN_VALUE

console.log(x)
