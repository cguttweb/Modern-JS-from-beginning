// Falsy values in JS
// false
// 0
// '' or "" - empty string
// null
// undefined
// NaN

// Truthy values
// anything not falsy
// [] - empty array
// {} - empty object
// function() {} - empty function
// true
// '0' - 0 in a string
// 'false' - false in a string
// ' ' - space in a string


// CAVEATS FOR TRUTHY AND FALSY

// checking for empty arrays
const myPosts = []

// if (myPosts) {
//     console.log('list posts') // this runs as [] is truthy instead do this
if(myPosts.length > 0){
    console.log('list posts')
} else {
    console.log('No posts')
}

// checking for empty objects
const user = {
    name: 'Chloe'
}

if (Object.keys(user).length > 0) {
    console.log('List your user')
} else {
    console.log('no user')
}

// loose equality (==)
console.log(false == 0) // true
console.log('' == 0) // true
console.log(null == undefined) // true

console.log(false === 0) // false
console.log('' === 0) // false
console.log(null === undefined) // false


