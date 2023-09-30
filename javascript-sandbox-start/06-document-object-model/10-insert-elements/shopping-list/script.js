// insertAdjacentElement Example
function insertElement(){
  const filter = document.querySelector('.filter')

  const h1 = document.createElement('h1')
  h1.textContent = 'this is a h1'

  filter.insertAdjacentElement('beforebegin', h1)
}


// insertAdjacentText Example
function insertText(){
  const item = document.querySelector('li:first-child')
  
  item.insertAdjacentText('beforebegin', 'insertAdjacentText')
}

// insertAdjacentHTML example
function insertHTML(){
  const clearBtn = document.querySelector('#clear')
  // this works same way as innerHTML
  clearBtn.insertAdjacentHTML('afterend', '<h3>Some adjacent HTML</h3>')
}

insertElement()
insertText()
insertHTML()

// insertBefore Example
function insertBeforeItem(){
  const ul = document.querySelector('ul')

  const li = document.createElement('li')
  li.textContent = 'insertBefore Example'

  const thirdItem = document.querySelector('li:nth-child(3)')
  ul.insertBefore(li, thirdItem)
}

insertBeforeItem()

/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/
