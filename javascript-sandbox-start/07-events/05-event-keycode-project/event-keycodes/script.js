// method 1 - quick option with innerHTML

// window.addEventListener('keydown', (e) => {
//   const insert = document.getElementById('insert')
//   insert.innerHTML = `
//   <div class="key">
//     ${e.key === ' ' ? 'space' : e.key}
//     <small>e.key</small>
//   </div>

//   <div class="key">
//     ${e.keyCode}
//     <small>e.keyCode</small>
//   </div>

//   <div class="key">
//     ${e.code}
//     <small>event.code</small>
//   </div>
//   `
// })

// Method 2 - cleaner more performant option
function showKeyCodes(e){
  console.log(e)
  const insert = document.getElementById('insert')
  insert.innerHTML = ''

  const keyCodes = {
    'e.key':  e.key === ' ' ? 'space' : e.key,
    'e.keyCode': e.keyCode,
    'e.code': e.code
  }

  for (const key in keyCodes) {
    const div = document.createElement('div')
    div.className = 'key'
    const small = document.createElement('small')
    const keyText = document.createTextNode(key)
    const keyValueText = document.createTextNode(keyCodes[key]) // using index of  the key

    small.appendChild(keyText)
    div.appendChild(keyValueText)
    div.appendChild(small)

    insert.appendChild(div)
  }
}

window.addEventListener('keydown', showKeyCodes)