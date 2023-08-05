let x

x = 5 + '5'
x = 5 + Number('5')
x = 5 * '5'

x = 5 + null
x = Number(null) // 0

x = 5 + true // as a number = 1 false = 0

console.log(x, typeof x)
