const itemForm = document.querySelector('#item-form')
const itemInput = document.querySelector('#item-input')
const itemList = document.querySelector('#item-list')
const clearBtn = document.getElementById('clear')
const itemsFilter = document.querySelector('#filter')

function displayItems(){
  // retrieve items from storage and show as page loads
  const itemsFromStorage = getItemsFromStorage()

  itemsFromStorage.forEach(item => addItemToDOM(item))
  checkUI()
}

const onAddItemSubmit = (e) => {
  e.preventDefault()

  const newItem = itemInput.value

  if(newItem.value === ''){
    alert('Please add an item')
    return
  }

  addItemToDOM(newItem)

  addItemToStorage(newItem)

  checkUI()

  itemInput.value = ''
}

function addItemToDOM(item){
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(item))

  const button = createButton('remove-item btn-link text-red')
  li.appendChild(button)
  itemList.appendChild(li)
}

function addItemToStorage(item){
  const itemsFromStorage = getItemsFromStorage()
  
  // add item to array
  itemsFromStorage.push(item)
  // stringify to store in localStorage as can't store objects
  localStorage.setItem('items', JSON.stringify(itemsFromStorage))
}

function getItemsFromStorage(){
  let itemsFromStorage

  if(localStorage.getItem('items') === null){
    itemsFromStorage = []
  } else {
    // parse to get the array
    itemsFromStorage = JSON.parse(localStorage.getItem('items'))
  }

  return itemsFromStorage
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

function onClickItem(e) {
  if (e.target.parentNode.classList.contains('remove-item')){
    // target the li element
    removeItem(e.target.parentElement.parentElement)
  }
}

function removeItem(item){
  // console.log(item);
  if(confirm('Are you sure?')){
    item.remove()

    // remove item from storage
    removeItemFromStorage(item.textContent)

    checkUI()
  }

  checkUI()
}

function removeItemFromStorage(item){
  let itemsFromStorage = getItemsFromStorage()
  // console.log(itemsFromStorage);
  itemsFromStorage = itemsFromStorage.filter(i => i !== item)

  localStorage.setItem('items', JSON.stringify(itemsFromStorage))
}

function clearItems(){
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild)
  }

  //Clear from localStorage
  localStorage.removeItem('items')

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

// initialise rather than having everything in the global scope
function init(){
  itemForm.addEventListener('submit', onAddItemSubmit)
  itemList.addEventListener('click', onClickItem)
  clearBtn.addEventListener('click', clearItems)
  itemsFilter.addEventListener('input', filterItems)
  document.addEventListener('DOMContentLoaded', displayItems())
  
  checkUI()
}

init()