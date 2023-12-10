const canvas = document.querySelector('#my-first-canvas')
const ctx = canvas.getContext('2d')

ctx.fillStyle = 'black'
ctx.fillRect(10, 20, 300, 100)

//draw a circle
ctx.fillStyle = 'red'
ctx.arc(200, 350, 100, 0, Math.PI * 2)
ctx.fill()

// Draw lines
ctx.strokeStyle = 'blue'
ctx.lineWidth = 4
ctx.beginPath()
ctx.moveTo(10, 10)
ctx.lineTo(350, 350)
ctx.stroke()

// Draw text
ctx.font = '40px Arial'
ctx.fillStyle = 'purple'
ctx.fillText('Hello Canvas API', 200, 225, 275)

// Draw image
const image = document.querySelector('img')
image.style.display = 'none'

image.addEventListener('load', () => {
  ctx.drawImage(image, 30, 350, 50, 50)
})