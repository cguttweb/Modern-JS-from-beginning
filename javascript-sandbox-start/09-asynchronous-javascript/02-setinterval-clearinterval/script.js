// const intervalId = setInterval(myCallback, 1000);

// function myCallback(){
//   console.log(Date.now())
// }

let intervalId

function startChange(){
  if(!intervalId){
    intervalId = setInterval(changeRandomColour, 1000)
  }
}

// function changeColour(){
//   if(document.body.style.backgroundColor !== 'black'){
//     document.body.style.backgroundColor = 'black'
//     document.body.style.color = 'white'
//   } else {
//     document.body.style.backgroundColor = 'white'
//     document.body.style.color = 'black'
//   }
// }

function changeRandomColour(){
  const randomColour = Math.floor(Math.random() * 16777215).toString(16)
  document.body.style.backgroundColor = `#${randomColour}`
}

function stopChange(){
  clearInterval(intervalId)
}

document.querySelector('#start').addEventListener('click', startChange)
document.querySelector('#stop').addEventListener('click', stopChange)