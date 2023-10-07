const itemInput = document.getElementById('item-input')
const priorityInput = document.getElementById('priority-input')
const checkbox = document.querySelector('#checkbox')
const heading = document.querySelector('h1')

function onInput(e){
  console.log(e.target.value);
  heading.textContent = e.target.value
}

function onChecked(e){
  console.log(e.target.checked) // return boolean
  const isCheckboxChecked = e.target.checked
  const pIsChecked = document.querySelector('#isChecked')
  pIsChecked.textContent = isCheckboxChecked
}

function onFocus(e){
  itemInput.style.outlineColor = 'green'
  itemInput.style.outlineStyle = 'solid'
  itemInput.style.outlineWidth = '2px'
}

function onBlur(e){
  itemInput.style.outlineStyle = 'none'
}

// itemInput.addEventListener('keydown', onInput)
itemInput.addEventListener('input', onInput) // Recommended to use as will target any input field
// priorityInput.addEventListener('input', onInput)
priorityInput.addEventListener('change', onInput) // change is also an option but in most cases input would probably be the best option to use
checkbox.addEventListener('input', onChecked)

itemInput.addEventListener('focus', onFocus) // often for specific outline
itemInput.addEventListener('blur', onBlur)