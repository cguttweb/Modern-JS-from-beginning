function first(){
    console.log('this is first function')
    second()
}

function second(){
    console.log('second function')
    third()
}

function third(){
    console.log('this is third function')
}

first()