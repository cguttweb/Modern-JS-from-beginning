const form = document.querySelector('#item-form')

function onSubmit(e){
  e.preventDefault();
  console.log('submit');

  const itemInput = document.getElementById('item-input').value
  const priorityInput = document.getElementById('priority-input').value

  itemInput === '' || priorityInput === '0' && alert('Please fill in all fields')
  return
  console.log(itemInput, priorityInput)
}

function onSubmit2(e){
  e.preventDefault()

  const formData = new FormData(form)

  const item = formData.get('item')
  const priority = formData.get('priority')

  // console.log(item, priority)

  const entries = formData.entries()
  // console.log(entries)

  for (let entry of entries) {
    console.log(entry[1])
  }
}


form.addEventListener('submit', onSubmit2)