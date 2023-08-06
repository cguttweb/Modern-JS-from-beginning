let x

const fruits = ['apple', 'banana', 'grape', 'pear']
const berries = ['raspberry', 'blueberry', 'gooseberry', 'strawberry']

// fruits.push(berries)

// x = fruits[3][1]

const allFruits = [fruits, berries]

x = allFruits[1][0]

x = fruits.concat(berries) // creates a single array with values from both arrays

// Spread Operators - can be used for both arrays and objects

x = [...fruits, ...berries]

// flatten

const myArr = [24, 12, 36, [78, 90, 4], [9, 16], 9]
x = myArr.flat() // becomes a single array remove nested arrays

// Static methods on Array object

x = Array.isArray(fruits) // return boolean

x = Array.from('123456') // makes string an array with each number an element in array

const val1 = 12
const val2 = 'hello'
const val3 = 2023

x = Array.of(val1, val2, val3)

console.log(x)
