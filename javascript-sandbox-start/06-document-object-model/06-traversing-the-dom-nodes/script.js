let output

const parent = document.querySelector('.parent')

output = parent.childNodes // returns a node list including text and comment nodes

output = parent.childNodes[0].textContent
output = parent.childNodes[0].nodeName
output = parent.childNodes[3].outerHTML
output = parent.childNodes[3].textContent = 'Child One'

output = parent.firstChild // returns text node which is whitespace
output = parent.lastChild

// Get parent nodes

const child = document.querySelector('.child')
output = child.parentNode
output = child.parentElement


// Siblings
const secondItem = document.querySelector('.child:nth-child(2)')
output = secondItem.nextSibling // text node
output = secondItem.previousSibling //text node

console.log(output)