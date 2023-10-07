const button = document.querySelector('button')
const div = document.querySelector('form div:nth-child(2)')

// this happens first - everything with a click event listener will also be triggered
button.addEventListener('click', (e) => {
  alert('Button was clicked')
  e.stopPropagation() // this will prevent the parent in this case, the div event listener from running
})
  

// then this happens 
div.addEventListener('click', () => alert('div was clicked'))