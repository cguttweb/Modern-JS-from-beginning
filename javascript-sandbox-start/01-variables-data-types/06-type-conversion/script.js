let amount = 'hello world'
// 0 is falsy

// convert string to a number
amount = parseInt(amount) //- positive/negative number
// newer way is to use +
// amount = +amount
// amount = Number(amount)

// Convert number to a string
// amount = amount.toString()

// Convert string to decimal
// amount = parseFloat(amount)

// Convert number to boolean
// amount = Boolean(amount)

// few operations can return NaN - do some further research and write a blog post on this

console.log(Math.sqrt(-1))
console.log(1 + NaN)
console.log(undefined + undefined)
console.log('foo' / 2)

console.log(amount, typeof amount)
