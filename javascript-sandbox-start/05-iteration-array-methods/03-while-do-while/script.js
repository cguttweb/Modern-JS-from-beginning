// While and Do While Loops - older ways of doing things 

let i = 0

// while (i <= 25) {
//   console.log(`Number is ${i}`);
//   i++
// }

// for loop used when you know how many times the loop will run if you don;'t know number of times it will run then common to use the while loop

const numArr = [12, 24, 36, 78, 98, 212]

// while (j < numArr.length) {
//   console.log(numArr[j]);
//   j++
// }

// Nesting while loops
while (i <= 10) {
  console.log(`Number is ${i}`);

  let j = 1;
  while (j <= 6) {
    console.log(`${i} * ${j} = ${x * y}`);
    j++
  }

  console.log(i);
}

// Do While - runs at least once even if the condition is never met = false

do {
  console.log(`Number is ${i}`);
  i++;
} while(i <= 20);

// can also use continue and break statements with these loops