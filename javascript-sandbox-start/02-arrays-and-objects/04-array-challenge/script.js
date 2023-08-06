const numArray = [1, 2, 3, 4, 5]
numArray.push(6)
numArray.unshift(0)
numArray.reverse()

console.log(numArray)

const arr1 = [1, 2, 3, 4, 5]
const arr2 = [5, 6, 7, 8, 9, 10]

const arr3 = [...arr1, ...arr2]
arr3.splice(4, 1)
console.log(arr3)
