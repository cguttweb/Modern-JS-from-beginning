// Using ternary operator instead of if statement

let age = 18

age >= 18 ? console.log('You can vote') : console.log('You cannot vote')

// assigning conditional val to a variable

const canVote = age >= 18 ? true : false

console.log(canVote)

// using multiple statements with ternary operator
// long version
const auth = true
// let redirect
// if(auth){
//     alert('You\'re logged in')
//     redirect = '/dashboard'
// } else {
//     alert('Access Denied')
//     redirect = '/login'
// }

// const redirect = auth 
// ? (alert('You are logged in'), '/dashboard') 
// : (alert('access denied'), '/login')
// console.log(redirect)

// shortcut if no else included

auth ? console.log('logged in') : null

auth && console.log('Welcome to dashboard')