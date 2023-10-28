const promise = new Promise((resolve, reject) => {
  // faking async call
  setTimeout(() => {
    console.log('Async task complete')
    resolve()
  }, 1000);
})

// promise.then(() => {
//   console.log('Promise consumed')
// })

const getUser = new Promise((resolve, reject) => {
  // faking async call
  setTimeout(() => {
    let error = true
    if (!error) {
      resolve({ name: 'Chloe', age: 30 })
      
    } else {
      reject('Error: something went wrong')
    }
    console.log('Async task complete 2')
  }, 1000);
})

getUser
.then((user)=> console.log(user))
.catch((error) => console.log(error))
.finally(() => console.log('Promise has been resolved or rejected'))


console.log('this is global scope')