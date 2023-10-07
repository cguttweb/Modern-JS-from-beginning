// old way
// window.onload = function () {
//   document.querySelector('h1').textContent = 'Hello World'
// } 

// this does the same as the above - waits for the entire page to load inc all resources
window.addEventListener('load', () => {
  // document.querySelector('h1').textContent = 'Hello World again'
  console.log('Page Loaded')
})

// DOMContentLoaded - this runs as soon as DOM is parsed and loaded
window.addEventListener('DOMContentLoaded', () => {
  // document.querySelector('h1').textContent = 'Hello World again'
  console.log('DOM loads')
})

document.querySelector('h1').textContent = 'Still works as using defer'


window.addEventListener('scroll', () => {
  console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`)
})
