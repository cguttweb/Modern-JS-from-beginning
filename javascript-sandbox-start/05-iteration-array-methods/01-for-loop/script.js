// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

// INITITAL EXPRESSION - Initializes a variable/counter
// CONDITION EXPRESSION - Condition that the loop will continue to run as long as it is met or until the condition is false
// INCREMENT EXPRESSION - Expression that will be executed after each iteration of the loop. Usually increments the variable
// STATEMENT - Code that will be executed each time the loop is run. To execute a `block` of code, use the `{}` syntax

// For Loop - simple example

for (let i = 0; i <= 10; i++) {
  // block scoped so not accessible outside the for loop
  console.log(`Number is ${i}`)
}

for (let j = 0; j <= 25; j++) {
  if (j === 24) {
    console.log('24 is my favourite number')
  }
}

//  Nesting for loops

for (let x = 0; x <= 10; x++) {
  console.log(`Number is ${x}`)

  for (let y = 0; y <= 10; y++) {
    console.log(`${x} * ${y} = ${x * y}`);
  }
}

// Loop through an array - forEach more commonly used now
const name = ['Sarah', 'Simon', 'Brad', 'Louise', 'Annabel']

for (let i = 0; i < names.length; i++) {
 if (names[i] === 'Simon') {
  console.log(`{names[i]} is my best friend`);
 } else {
  
 }
  
}