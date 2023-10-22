function toggle(e) {
  console.log('callback ran');
  e.target.classList.toggle('danger');
}

document.querySelector('button').addEventListener('click', toggle);

const posts = [
  { title: 'Post One', body: 'My first post' },
  { title: 'Post Two', body: 'My second post' },
  { title: 'Post Three', body: 'My third post' },
]
// cb = callback a common convention used
function createPost(post, cb){
  setTimeout(() => {
    posts.push(post)
    cb()
  }, 2000)
}

function getPosts(){
  setTimeout(()  => {
    posts.forEach(function(post) {
      const div = document.createElement('div')
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`
      document.querySelector('#posts').appendChild(div)
    })
  }, 1000)
}

createPost({ title: 'Post Four', body: 'This is a post'}, getPosts)

// getPosts()