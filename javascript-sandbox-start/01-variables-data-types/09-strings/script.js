let str

const myName = 'Chloe'
const age = 35

str = 'My name is ' + myName + ' and I am ' + age + ' years old'

// Template Literals/Strings FTW
str = `My name is ${myName} and I am ${age} years old`

// string props and methods

const newStr = 'Hello World'

// str = typeof newStr
// strings are 0 indexed like arrays
// str = newStr.length

str = newStr.__proto__

str = newStr.toUpperCase()
str = newStr.toLowerCase()
str = newStr.charAt(1)
str = newStr.indexOf('e')
str = newStr.substring(0, 5)
str = newStr.substring(6) // starts at index 6
str = newStr.slice(-11, -6) // similar to substring
str = newStr.trim() // removes whitespace
str = newStr.replace('World', 'Fellow Coders')
str = newStr.includes('Hello') // returns boolean
str = newStr.valueOf() //return primitive value
str = newStr.split('')

console.log(str)
