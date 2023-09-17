// FizzBuzz challenge

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`FizzBuzz`);
  } else if(i % 5 === 0){
    console.log(`Buzz`);
  } else if (i % 3 === 0) {
    console.log(`Fizz`);
  } else {
    console.log(`Number is ${i}`);
  }
}

// While Loop solution

let x = 1;
while (x <= 100) {
  if (x % 15 === 0) {
    console.log(`FizzBuzz`);
  } else if(x % 5 === 0){
    console.log(`Buzz`);
  } else if (x % 3 === 0) {
    console.log(`Fizz`);
  } else {
    console.log(`Number is ${i}`);
  }
}