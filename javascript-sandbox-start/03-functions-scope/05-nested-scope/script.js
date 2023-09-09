function first() {
    const x = 100

    function second() {
        const y = 200
        console.log(x + y)
        // can access parent variables but not child ones
    }

    // console.log(y)

    second()
}