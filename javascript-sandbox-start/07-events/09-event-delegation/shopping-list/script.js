const listItems = document.querySelectorAll('li')
const list = document.querySelector('ul')
// listItems.forEach(item => {
//   item.addEventListener('click', (e) => {
//     console.log(e.target)
//     e.target.remove()
//   })
// })

list.addEventListener('click', (e) => {
  console.log(e.target)
  if(e.target.tagName === 'LI'){
    e.target.remove()
  }
})