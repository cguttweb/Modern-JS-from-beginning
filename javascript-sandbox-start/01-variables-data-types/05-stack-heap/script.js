// primitive values stored on the stack
const name = "Simon";
const age = 24;

// reference values stored on the heap
const person = {
  name: "Chloe",
  age: 35,
};

let newName = name;
newName = "Jonathan";
console.log(name, newName);

let newPerson = person;
newPerson.name = "Bradley";
console.log(person, newPerson);
