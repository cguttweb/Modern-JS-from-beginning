// Success
// fetch('httpstat.us/200')
// .then(resp => {
//   return resp
// })
// .then(() => console.log('success'))
// .catch(err => {
//   console.log(err)
// })

// Check with response.ok
// fetch('http://httpstat.us/404')
// .then(resp => {
//   if(!resp.ok){
//     throw new Error('Request failed')
//   }
//   return resp
// })
// .then(() => console.log('success'))
// .catch(err => console.log(err))

// Check with specific status code
fetch('http://httpstat.us/500')
.then(resp => {
  if(resp.status === 404){
    throw new Error('Not Found')
  } else if (resp.status = 500){
    throw new Error('Server Error')
  } else if (resp.status !== 200){
    throw new Error('Request failed')
  }
  return resp
})
.then(() => console.log('success'))
.catch(err => console.log(err))

// Catch with run on a network error