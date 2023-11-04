// Fetching JSON file
fetch('./movies.json')
.then(resp => resp.json()) // in most cases it will be handling JSON
// the response from previous .then is the argument for the next then chain
.then(data => console.log(data))

// axios is a library you can use as a layer without

// Fetching text file
fetch('./test.txt')
.then(resp => resp.text())
.then(data => console.log(data))

// Fetching from API
fetch('https://api.github.com/users/cguttweb/repos')
.then(resp => resp.json())
.then(data => console.log(data.login))