function removeItem(){
  const ul = document.querySelector('ul')
  const li = document.querySelector('li')

  ul.removeChild(li)
}

function removeItem2(itemNum){
  const ul = document.querySelector('ul')
  const li = document.querySelectorAll('li')[itemNum - 1]
  
  ul.removeChild(li)
}

function removeItem3(itemNum){
  const li = document.querySelectorAll('li')
  li[itemNum - 1].remove()
}

// Shorter version of the above
function removeItem4 = (itemNum) => document.querySelectorAll('li')[itemNum - 1].remove()

// removeItem()
// removeItem2(1)
// removeItem2(2)