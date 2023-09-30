function createNewItem(item) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  const button = createNewButton('remove-item btn-link text-red')
  li.appendChild(button);

  document.querySelector('.items').appendChild(li);
}

function createNewButton(classes){
  const button = document.createElement('button');
  // 'remove-item btn-link text-red';
  button.className = classes

  const icon = createNewIcon('fa-solid fa-xmark')
  button.appendChild(icon)

  return button
}

function createNewIcon(classes){
  const icon = document.createElement('i');
  icon.className = classes
  return icon
}

createNewItem('Cheese');
createNewItem('tomatoes')
