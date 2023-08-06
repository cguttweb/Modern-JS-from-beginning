let val
// constructor
const toDoList = new Object()

toDoList.id = 1
toDoList.name = 'buy some bread'
toDoList.completed = false

val = toDoList

// nesting
const person = {
  name: 'Jane Doe',
  age: 30,
  address: {
    coords: {
      lat: 21.121212,
      lng: 74.45678,
    },
  },
}

val = person.address.coords.lng

// spread operator - introduced in ES6

const myObj1 = {
  a: 1,
  b: 2,
  c: 3,
}

const myObj2 = {
  d: 4,
  e: 5,
  f: 6,
}

const myObj3 = { ...myObj1, ...myObj2 }

// methods

const myObj4 = Object.assign({}, myObj1, myObj2) // works in the same way as spread operator

const toDos = [
  { id: 1, name: 'hoover' },
  { id: 2, name: 'go shopping' },
  { id: 3, name: 'empty bins' },
]

val = toDos[0].name

val = Object.keys(toDoList)
// get keys from object and adds them to an array
val = Object.keys(toDoList).length
// as above but values
val = Object.values(toDoList)
// get key value pairs
val = Object.entries(toDoList)

val = toDoList.hasOwnProperty() // returns boolean

console.log(val)
