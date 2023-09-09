// IIFE - declare and invoke a function at the same time


(function(){
    const user = 'Simon'
    console.log(user)
    const hello = () =>  console.log('This is an IIFE')
    hello() // this runs
})()

hello() // this doesnt as outside function throws an error hello is not defined

// You can have named IIFE but not common as cannot call outside it possible for debugging