// Reduce - reduces an array down to a single value - takes three args - previousValue, currentValue & initialValue
// accumulator aka previous value

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const sum = numbers.reduce(function(accumulator, currentValue){
  return accumulator + currentValue
}, 0) // set initial value but this is not required

// Shorthand
const sum2 = numbers.reduce((acc, cur) => acc + cur, 10)
console.log(sum2);

// Shopping cart would be a good use for using reduce to get a total value

const cart = [
  { id: 1, name: 'Product One', price: 120 },
  { id: 2, name: 'Product Two', price: 70 },
  { id: 3, name: 'Product Three', price: 100 },
  { id: 4, name: 'Product Four', price: 180 },
]

const total = cart.reduce((acc, cur) => {
  return acc + cur.price
}, 0)

console.log(total);