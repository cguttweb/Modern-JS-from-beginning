const logo = document.querySelector('img')

const onClick = () => console.log('click event')
const onDblClick = () => console.log('double click event')
const onRightClick = () => {
  if(document.body.backgroundColor = 'white'){
    document.body.backgroundColor = '#333'
    document.body.color = '#fff'
  }
}
const onMouseWheel = () => console.log('mouse wheel event')
const onDrag = () => console.log('drag event')
const onDragEnd = () => console.log('drag end event')

// Event Listeners
logo.addEventListener('click', onClick)
logo.addEventListener('dblclick', onDblClick)
logo.addEventListener('wheel', onMouseWheel)
logo.addEventListener('drag', onDrag)
logo.addEventListener('dragend', onDragEnd)