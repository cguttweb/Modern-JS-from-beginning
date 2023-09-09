// ||= - assigns rhs val only if lhs is falsy value - probably most commonly used

let a = null

a  ||= 10

console.log(a)

// &&= assigns rhs only if lhs is truthy value

let b = 10

b = b && 20

b &&= 20

console.log(b)

// ??= assigns rhs val only of lhs is null or undefined
let c = null

if(c === null || c === undefined){
    c = 20
}

c = c ?? 20

c ??= 20

console.log(c) // 20