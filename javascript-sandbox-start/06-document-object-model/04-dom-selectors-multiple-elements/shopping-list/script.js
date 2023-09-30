const listItems = document.querySelectorAll('.item')
console.log(listItems); // returns a nodelist can use array methods e.g. forEach
console.log(listItems[1].innerText);


listItems.forEach((item, index) => {
  item.style.color = 'blue'
  
  if(index === 2){
    item.remove()
  }

  if (index === 0) {
    item.innerHTML = `
    Oranges <button class="remove-item btn-link text-red">
    <i class="fa-solid fa-xmark"></i>
    </button>`
  }
})

const listItems2 = document.getElementsByClassName('item') // return html collection so this won't work:

listItems2.forEach(item => { console.log(item.innerText)}) // needs to be converted to an array first

const listItems3 = document.getElementsByTagName('li')