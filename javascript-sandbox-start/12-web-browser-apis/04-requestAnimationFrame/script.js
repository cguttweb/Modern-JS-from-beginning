const image = document.querySelector('img')

let start
let done = false

const step = (timestamp) => {
  // console.log(timestamp);
  if(start === undefined){
    start = timestamp
  }
  
  const elapsed = timestamp - start
  console.log(elapsed)

  if (elapsed > 5000) {
    done = true
  }

  if (done) {
    return
  }

  // image.style.transform = `translateX(${elapsed / 20})px rotate(${elapsed / 20}deg) scale(1.5)`
  image.style.transform = `rotate(${elapsed / 20}deg) scale(1.2)`

  requestAnimationFrame(step)
}

requestAnimationFrame(step)