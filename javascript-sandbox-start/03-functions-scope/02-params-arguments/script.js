function registerUser(user){
    // this is in the function scope
    return `${user} is registered`
}

console.log(registerUser('Simon'))

// default values before ES2015
function registerUser(user){
    if (!user) {
        user = 'Robert'
    }
}

// since ES2015 - can declare default values when passing in parameters
function registerUser(user = 'Simon'){
    return `${user} is registered`
}

// Rest parameters

function sum(...numbers){
    let total  = 0

    for (const num of numbers) {
        total += num
    }

    return total
}

console.log(sum(23, 24, 25, 26))

// Objects as params

function loginUser(user){
    return `The user ${user.name} with id of ${user.id} is logged in`
}

const user = {
    name: 'Chloe',
    id: 24
}

console.log(loginUser(user)) // or could pass into object directly in the function

// Arrays as params

function getRandom(...arr){
    const randomIndex = Math.floor(Math.random() * arr.length)
    
    const item = arr[randomIndex]

    console.log(item)
}

// getRandom([1, 2, 5, 6, 8, 10, 23, 54, 86])
getRandom(1, 2, 5, 6, 8, 10, 23, 54, 86) // using rest operator brackets not needed as will return an array