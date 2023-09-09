// simple function
// function add(a, b){
//     return a + b
// }

// using arrow function

const add = (a, b) => { 
    return a + b
}

// single line with implicit return if you are a single expression
const subtract = (a, b) => a - b

// single parameter no () needed
const multiply = a => a * 8

console.log(add(98, 654))
console.log(subtract(987, 876))
console.log(multiply(5))


// Returning an object - wrap in ()
const newObj = () => ({
    name: 'Simon'
})

console.log(newObj())

const numbers = [24, 35, 76, 89, 99]

// arrow function in a callback
numbers.forEach(num => console.log(n))