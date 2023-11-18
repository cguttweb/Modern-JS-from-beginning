// try {
//   console.log(x)
// } catch (error) {
//   console.log(`Error: ${error}`)
// }

// Simple example to throw own errors
function double(num){
  if(isNaN(num)){
    throw new Error(`${num} is not a number`)
  }

  return num * 2
}

try {
  const y = double('test')
  console.log(y)
} catch (error){
  console.log(error)
}