const firstName = 'Chloe'
const lastName = 'G'
const age = 30

const person = {
  firstName,
  lastName,
  age,
}

console.log(person.age)

// Destructuring

const myToDo = {
  id: 1,
  title: 'Empty the bins',
  user: {
    name: 'Simon',
  },
}

const {
  // rename
  id: toDoId,
  title,
  user: { name },
} = myToDo

console.log(toDoId)

// Array Destructuring

const numbers = [24, 12, 75, 90, 101, 12345]
// rest operator
const [first, second, ...otherNums] = numbers

console.log(first, second, otherNums)
