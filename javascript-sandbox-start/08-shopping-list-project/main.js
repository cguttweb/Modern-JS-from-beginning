const itemForm = document.querySelector('#item-form')
const itemInput = document.querySelector('#item-input')
const itemList = document.querySelector('#item-list')
const clearBtn = document.getElementById('clear')
const itemsFilter = document.querySelector('#filter')

const addItem = (e) => {
  e.preventDefault()

  const newItem = itemInput.value

  if(newItem.value === ''){
    alert('Please add an item')
    return
  }

  const li = document.createElement('li')
  li.appendChild(document.createTextNode(newItem))

  const button = createButton('remove-item btn-link text-red')
  li.appendChild(button)
  itemList.appendChild(li)

  checkUI()

  itemInput.value = ''
}

function createButton(classes){
  const button = document.createElement('button')
  button.className = classes
  const icon = createIcon('fa-solid fa-xmark')
  button.appendChild(icon)
  return button
}

function createIcon(classes){
  const icon = document.createElement('i')
  icon.className = classes
  return icon
}

function removeItem(e){
  if (e.target.parentNode.classList.contains('remove-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentNode.parentNode.remove()
    }
  }

  checkUI()
}

function clearItems(){
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild)
  }

  checkUI()
}

function filterItems(e){
  const items = itemList.querySelectorAll('li')
  const searchText = e.target.value.toLowerCase()

  items.forEach(item => {
    const itemText = item.firstChild.textContent.toLowerCase()

    if (itemText.includes(searchText)) {
      item.style.display = 'flex'
    } else {
      item.style.display = 'none'
    }
  })
}

function checkUI(){
  const items = itemList.querySelectorAll('li')

  if(items.length === 0){
    clearBtn.style.display = 'none'
    itemsFilter.style.display = 'none'
  } else {
    clearBtn.style.display = 'block'
    itemsFilter.style.display = 'block'
  }
}

itemForm.addEventListener('submit', addItem)
itemList.addEventListener('click', removeItem)
clearBtn.addEventListener('click', clearItems)
itemsFilter.addEventListener('input', filterItems)

checkUI()