// window is top-level object can be accessed from anywhere

// window.alert = alert()

const x = 100

function getHeight(){
    console.log(window.innerHeight)
    console.log(x, 'in function')
}

getHeight()

if(true){
    console.log(x, 'in block')
}

function add(){
    const y = 60 // this is function scoped
    console.log(y)
}

console.log(y) // y is undefined here