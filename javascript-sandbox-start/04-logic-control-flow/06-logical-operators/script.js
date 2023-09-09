// && - AND
// || - OR
console.log(10 < 20 && 30 > 15 && 40 > 30) // true
console.log(10 > 20 || 30 < 15) // false

// other common use cases for these

// && - will return first falsy values or the last value
let a

console.log(a)

// || - will return first truthy value or the last value

let b

b = 10 || 20 // 10
b = 0 || 20 // 0
b = 0 || null || '' || undefined

console.log(b)

// ?? - returns the rhs operand when left is null or undefined

let c

c = 10 ?? 20
c = null ?? 20
c = 0 ?? 30

console.log(c)