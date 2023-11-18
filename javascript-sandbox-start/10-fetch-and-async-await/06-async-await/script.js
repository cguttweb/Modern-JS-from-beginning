const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: 'Simon', age: 30 })
  }, 1000);
})

// promise.then((data) => console.log(data))

async function getPromise(){
  // if using async function must include await
  const response = await promise;
}

// getPromise()

async function getUsers(){
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  console.log(data)
}

// async function getUsers2(){
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(resp => resp.json())
//   .then(data => console.log(data))
// }

getUsers()
// getUsers2()

const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  console.log(data)
}

getPosts()