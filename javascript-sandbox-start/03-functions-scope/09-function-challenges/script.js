// Challenge 1

function getCelsius(F){
    return Math.floor((F - 32) * 5 / 9)
}
// arrow function
const getCelsius2 = (F) => Math.floor((F - 32) * 5 / 9)


console.log(`The temperature is ${getCelsius(64)}\xB0`)
console.log(`The temperature is ${getCelsius(32)}\xB0`)
console.log(`The temperature is ${getCelsius2(90)}\xB0`)

// Challenge 2

const minMax = (numArr) => {
    const maxNum = Math.max(...numArr)
    const minNum = Math.min(...numArr)
    // const numObj = ({
    //     min: minNum,
    //     max: maxNum
    // })
    // return numObj
    return {
        minNum, maxNum
    }
}

console.log(minMax([1, 23, 54, 67, 89]))

// Challenge 3

// (function(length, width) {
//     const area = length * width
//     const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`
//     console.log(output)
// })(80, 9)

// doesn't seem to like console.log?


((length, width) => {
    const area = length * width
    const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}`
    console.log(output)
})(10, 5);
