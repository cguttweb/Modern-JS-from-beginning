let myArray

const numbers = [24, 12, 67, 89, 100, 11, 8, 31]

// numbers.push(124) // adds element to end of array

// numbers.pop() // removes last element from array

// numbers.unshift(999) // add element to start of array

// numbers.shift() // removes first element from array

// numbers.reverse()

myArray = numbers.includes(24) // returns boolean

myArray = numbers.indexOf(12) // if value not in array-1 is returned

myArray = numbers.slice(1, 4) // does not change the original array 1st arg start el and 2nd arg end el so in this case from index values 1 - 4 12,67,89

// myArray = numbers.splice(1, 4) // changes the original array 1st arg is start index 2nd is number of elements to remove

// myArray = numbers.splice(2, 1) // 67 to pull out a single element from the array

// can chain methods
myArray = numbers.splice(1, 4).reverse().toString().charAt(0)

console.log(numbers, myArray)
