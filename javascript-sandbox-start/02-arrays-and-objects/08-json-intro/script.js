const blogPost = {
  id: 1,
  title: 'My Blog Post',
  body: 'This is some body text',
}

// convert to JSON string
const myStr = JSON.stringify(blogPost)

// to access properties need to parse it first
const obj = JSON.parse(myStr)

const posts = [
  {
    id: 1,
    title: 'My Blog Post',
    body: 'This is some body text',
  },
  {
    id: 2,
    title: 'My Blog Post 2',
    body: 'This is some body text',
  },
  {
    id: 3,
    title: 'My Blog Post 3',
    body: 'This is some body text',
  },
]

const myStr2 = JSON.stringify(posts)

console.log(myStr2)
