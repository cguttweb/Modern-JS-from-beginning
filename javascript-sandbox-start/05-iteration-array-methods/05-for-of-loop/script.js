// For Of Loops

const names = ['Simon', 'Chloe', 'John', 'Jill']
const users = [
  { name: 'Thomas', id: 1 },
  { name: 'Harry', id: 2 },
  { name: 'Sean', id: 3 },
  { name: 'Jack', id: 4 },
]

// for (const items of names) {
//   console.log(item);
// }

for (const user of users) {
  console.log(`User is ${user.name} with an id of ${user.id}`);
}

// Looping over strings
const myStr = 'Hello JavaScript'

for(const letter of myStr){
  console.log(letter);
}

// Loop over maps
const myMap = new Map()
myMap.set('name', 'Chloe')
myMap.set('age', 35)


for (const [key, value] of myMap) {
  console.log(`Map has key of ${key} and value is ${value}`);
}