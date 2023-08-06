let x

const person = {
  name: 'Simon Jones',
  age: 28,
  job: 'programmer',
  hobbies: ['coding', 'reading', 'watching sports'],
  address: {
    street: '123 fifth avenue',
    city: 'New York',
    state: 'NY',
  },
}

x = person['age']
x = person.address.city
x = person.hobbies[1]

// updating props

person.name = 'Sarah Smith'
person['isAdmin'] = false

// remove
delete person.age

person.greet = function () {
  console.log(`Hello my name is ${this.name}`)
}

person.greet()

x = person
console.log(x)
