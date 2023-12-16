const clock = () => {
  const now = new Date()
  const canvas = document.querySelector('#canvas')
  const ctx = canvas.getContext('2d')

  // Setting up canvas
  // save the default state
  ctx.save()
  ctx.clearRect(0, 0 ,500, 500)
  ctx.translate(250, 250) // Puts 0 0 in the middle
  ctx.rotate(-Math.PI / 2) // rotate clock -90degrees
  
  // Set default styles
  ctx.fillStyle = '#ebebeb'
  ctx.lineWidth = 4
  ctx.lineCap = 'round'
  ctx.strokeStyle = '#000000'

  // Draw clock face
  ctx.save()
  ctx.beginPath()
  ctx.lineWidth = 4
  ctx.strokeStyle = '#000000'
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true) // draw a circle
  ctx.stroke()
  ctx.fill()
  ctx.restore()

  // draw hour lines
  ctx.save()
  for(let i = 0; i < 12; i++){
    ctx.beginPath()
    ctx.rotate(Math.PI / 6)
    ctx.moveTo(100, 0)
    ctx.lineTo(120, 0)
    ctx.stroke()
  }
  ctx.restore()

    // draw minute lines
    ctx.save()
    ctx.lineWidth = 3

    for(let i = 0; i < 60; i++){
      if(i % 5 !== 0){
        ctx.beginPath()
        ctx.moveTo(115, 0)
        ctx.lineTo(120, 0)
        ctx.stroke()
      }
      ctx.rotate(Math.PI / 30)
    }
    ctx.restore()

    // Get current time
    const hour = now.getHours() % 12 // 12-hour clock
    const mins = now.getMinutes()
    const secs = now.getSeconds()

    console.log(`${hour} ${mins} ${secs}`)

    // Draw hour hands
    ctx.save()
    ctx.rotate((Math.PI / 6) * hour + (Math.PI / 360) * mins + (Math.PI / 21600) * secs)
    ctx.lineWidth = 8
    ctx.strokeStyle = '#000099'
    ctx.beginPath()
    ctx.moveTo(-20, 0)
    ctx.lineTo(80, 0)
    ctx.stroke()
    ctx.restore()

    // Draw minute hands
    ctx.save()
    ctx.rotate((Math.PI / 30) * mins + (Math.PI / 2100) * secs)
    ctx.lineWidth = 5
    ctx.strokeStyle = '#800000'
    ctx.beginPath()
    ctx.moveTo(-30, 0)
    ctx.lineTo(112, 0)
    ctx.stroke()
    ctx.restore()

    // Draw second hands
    ctx.save()
    ctx.rotate(secs * (Math.PI / 30))
    ctx.lineWidth = 3
    ctx.strokeStyle = '#999999'
    ctx.fillStyle = '#999999'
    ctx.beginPath()
    ctx.moveTo(-30, 0)
    ctx.lineTo(100, 0)
    ctx.stroke()
    ctx.beginPath()
    ctx.arc(0, 0, 5, 0, Math.PI * 2, true)
    ctx.fill()
    ctx.restore()

  // restore the default state
  ctx.restore()

  requestAnimationFrame(clock)
}

requestAnimationFrame(clock)