function createPost({ title, body }){
  // destructuring pulling title and body from post
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title,
      body
    }),
    headers: {
      'Content-Type': 'application/json',
      token: 'abc123'
    }
  })
  .then(res => res.json())
  .then(data => console.log(data))
}


createPost({ title: 'My Post', body: 'My blog post'})