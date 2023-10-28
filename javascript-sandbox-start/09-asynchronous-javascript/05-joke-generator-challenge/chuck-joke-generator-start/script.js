
const button = document.querySelector('#joke-btn')
const joke = document.querySelector('#joke')


const getJoke = function(){
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random')

    xhr.onreadystatechange = function(){
      if(this.readyState === 4 & this.status === 200){
        const data = JSON.parse(this.responseText)
        joke.innerHTML = `
        ${data.value}
        `
      } else {
        joke.innerHTML = `Error`
      }
    }
    // if this isn't added it won't work...
    xhr.send()
}

button.addEventListener('click', getJoke)