const paragraph = document.querySelector('p')
const itemList = document.querySelector('.item-list')
const allItems = document.querySelectorAll('li')

function run(){
  // console.log('run')
  // paragraph.className = 'card dark' // this will overwrite any existing classes
  // better option to use classList
  // console.log(itemList.classList)

  // paragraph.classList.add('dark')
  // paragraph.classList.remove('card')

  // paragraph.classList.toggle('dark')
  // paragraph.classList.replace('card', 'dark')

  // change style
  itemList.style.lineHeight = '3'

  allItems.forEach((item, index) => {
    item.style.color = 'blue'
    if(index === 1){
      item.style.color = 'red'
    }
  })
}
document.querySelector('button').onclick = run