// For in loop - loop through object values

const coloursObj = {
  color1: 'red',
  color2: 'blue',
  color3: 'yellow',
  color4: 'orange',
  color5: 'green',
  color6: 'purple'
}

for(const key in coloursObj){
  console.log(key, coloursObj[key]);
}

const coloursArr = ['red', 'blue', 'green', 'yellow', 'orange']

// common for key and/or values in object literals
for (const key in coloursArr) {
  console.log(coloursArr[key]);
}