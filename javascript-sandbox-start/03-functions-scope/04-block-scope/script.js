const x = 100 // global scope

if (true) {
    const y = 200
    console.log(x + y) // this works
}

// console.log(x + y) // this does not work y is undefined here

for (let i = 0; i < 15; i++) {
    console.log(i)
}

if (true) {
    var a = 300 // throws error
    var b = 500 // throws error
    var c = 900 // this works as globally scoped
}

console.log(a)

function run(){
    var favNum = 24
    console.log(favNum)
}

run()
console.log(favNum)