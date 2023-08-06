const library = [
  {
    title: 'The Anglo Saxons',
    author: 'Marc Morris',
    status: {
      own: false,
      reading: true,
      read: false,
    },
  },
  {
    title: 'Mortal Monarchs',
    author: 'Suzie Edge',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'About time',
    author: 'David Rooney',
    status: {
      own: true,
      reading: true,
      read: false,
    },
  },
]
console.log(library)
library[0].status.read = true
library[1].status.read = true
library[2].status.read = true

// destructuring
const { title: firstBook } = library[0]
console.log(firstBook)

const string = JSON.stringify(library)
console.log(string)
