// Try catch statement is the most commonly used

const getUsers = async () => {
  try {
    // const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const response = await fetch('http://httpstat.us/404') // returns text file
    
    if (!response.ok) {
      throw new Error('Request failed')
    }

    const data = await response.text()

    console.log(data)
  } catch (error) {
    console.log(error)
  }

}

getUsers()

const getPosts = async () => {
  
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const response = await fetch('http://httpstat.us/500') // returns text file
  
  if (!response.ok) {
    throw new Error('Request failed')
  }
  
  const data = await response.text()
  
  console.log(data)
  
}

// using .catch only - outside the function
getPosts().catch(error => console.log(error))