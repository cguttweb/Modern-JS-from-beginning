const xhr = new XMLHttpRequest()
// 1st arg request type 2nd arg url/file
// xhr.open('GET', './movies.json')
xhr.open('GET', 'https://api.github.com/users/cguttweb/repos')

// Readystate has 5 possible values
// 0. request not initialised
// 1. server connection established
// 2. request received
// 3. processing request
// 4. request finished & response is ready

xhr.onreadystatechange = function(){
  // console.log(this.readyState, this.status)
  if(this.readyState === 4 && this.status === 200){
    // console.log(JSON.parse(this.responseText))
    const data = JSON.parse(this.responseText)
    data.forEach(repo => {
      const li = document.createElement('li')
      li.innerHTML = `<strong>${repo.name}</strong>, description is ${repo.description} and url is ${repo.html_url}`
      document.querySelector('#results').appendChild(li)
    })
  }
}

xhr.send()