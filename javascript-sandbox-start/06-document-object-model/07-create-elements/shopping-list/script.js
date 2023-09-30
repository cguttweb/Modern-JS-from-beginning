const newDiv = document.createElement('div')
newDiv.className = 'my-div'
newDiv.setAttribute('title', 'my-new-div')

// newDiv.innerText = 'New Element' // not best option better to use text node and append it

const text = document.createTextNode('hello world this is a new div')

newDiv.appendChild(text)

document.body.appendChild(newDiv)

document.querySelector('ul').appendChild(newDiv)

console.log(newDiv);