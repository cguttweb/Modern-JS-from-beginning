console.log(document.getElementById('app-title'))
console.log(document.getElementById('app-title').getAttribute('id'))


// Set attribute
document.getElementById('app-title').setAttribute('class', 'title')

// Get/change content
const title = document.getElementById('app-title')
console.log(title.textContent)
title.textContent = 'Today\'s Shopping List'

// querySelector - select any single element using selector like in css
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('li:nth-child(2)').innerText);
const listItem2 = document.querySelector('li:nth-child(2)')
listItem2.innerText = 'Apple Juice'
listItem2.style.color = 'green'

const list = document.querySelector('ul')
const listItem1 = list.querySelector('li')
listItem1.style.color = 'orange'
console.log(listItem1);
listItem1.innerText = 'Granny Smith Apples'
