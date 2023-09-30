function replaceSecondItem(){
  const secondItem = document.querySelector('li:nth-child(2)')

  secondItem.outerHTML = `<li>Replaced second item</li>`
}


function replaceAllItems(){
  const lis = document.querySelectorAll('li')
  
  // lis.forEach((item, index) => {
  //   // item.outerHTML = '<li>Replace all with single li</li>'
  //   item.innerHTML = 'Replace All list items'
  // })
  
  // shorter version
  lis.forEach((item, index) => item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>List items</li>')
}

function replaceChildHeading(){
  const header = document.querySelector('header')
  const h1 = document.querySelector('header h1')

  const h2 = document.createElement('h2')
  h2.id = 'secondary-title'
  h2.textContent = 'Shopping List'
  // 1st arg new el 2nd arg el being replaced
  header.replaceChild(h2, h1)
}

replaceSecondItem()
replaceAllItems()
replaceChildHeading()