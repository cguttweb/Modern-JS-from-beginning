let output

// Get child elements
const parent = document.querySelector('.parent')
output = parent.children // returns HTML collection

output = parent.children[2].innerText
output = parent.children[1].className

parent.children[2].innerText = 'Child Three'

parent.firstElementChild.innerText = 'Child One'
parent.lastElementChild.innerText = 'Child 3'

// Get parent element from children
const child = document.querySelector('.child') // first child el

output = child.parentElement
child.parentElement.style.border = '1px solid red'
child.parentElement.style.padding = '20px'

// Get siblings
const secondItem = document.querySelector('.child:nth-child(2)')

output = secondItem.nextElementSibling

secondItem.nextElementSibling.style.color = 'blue'
secondItem.previousElementSibling.style.color = 'green'

console.log(output);