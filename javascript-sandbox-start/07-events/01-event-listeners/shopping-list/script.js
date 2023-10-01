const clearBtn = document.getElementById('clear') // or queryselctor
const items = document.querySelector('#item-list')

function onClear(){
  // items.remove()
  const lis = document.querySelectorAll('li') // returns node collection so need to loop through
  lis.forEach(li => li.remove());

  // alternative method with while loop
  // while (items.firstChild) {
  //   items.removeChild(items.firstChild)
  // }
}

// Event listeners
// clearBtn.addEventListener('click', () => alert('button pressed'))
// clearBtn.addEventListener('click', () => console.log('button clicked'))
clearBtn.addEventListener('click', onClear)


// Remove event listeners
// setTimeout(() => clearBtn.removeEventListener('click', onClear), 3000)

// setTimeout(() => clearBtn.click(), 5000)