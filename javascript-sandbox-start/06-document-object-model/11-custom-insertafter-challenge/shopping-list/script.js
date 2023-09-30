function insertAfter(newEl, existingEl){
  existingEl.parentNode.insertBefore(newEl, existingEl.nextSibling)
}
// new element to add
const btn = document.createElement('btn')
btn.textContent = 'insert after me'

// existing element to insert after
const clearBtn = document.querySelector('#clear')

insertAfter(btn, clearBtn)