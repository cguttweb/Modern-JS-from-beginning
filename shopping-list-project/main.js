import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Shopping List Project</h1>
    <form>
    <label for="newItem">Add Item</label>
      <input type="text" name="newItem" id="item" />
      <input type="submit" value="Add Item" />
    </form>
  </div>
`
