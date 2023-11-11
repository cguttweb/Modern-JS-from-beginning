const apiUrl = 'https://jsonplaceholder.typicode.com/todos'

const getToDos = () => {
  fetch(apiUrl + '?_limit=6')
  .then(resp => resp.json())
  .then(data => {
    // console.log(data)
    data.forEach((todo) => addTodoToDom(todo))
  })
}

const addTodoToDom = (todo) => {
  const div = document.createElement('div')
  div.classList.add('todo')
  div.appendChild(document.createTextNode(todo.title))
  div.setAttribute('data-id', todo.id)

  if (todo.completed) {
    div.classList.add('done')
  }

  document.getElementById('todo-list').appendChild(div)
}

const createToDo = (e) => {
  e.preventDefault();

  const newToDo = {
    title: e.target.firstElementChild.value,
    completed: false
  }

  fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(newToDo),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(resp => resp.json())
  .then(data => addTodoToDom(data))
}

const toggleCompleted = (e) => {
  if(e.target.classList.contains('todo')){
    e.target.classList.toggle('done')
  }
  // to target when adding data.id above
  updateToDo(e.target.dataset.id, e.target.classList.contains('done'))
}

const updateToDo = (id, completed) => {
  // console.log(id, completed);
  // PUT and DELETE requests needs the id
  fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    body: JSON.stringify({completed}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

const deleteToDo = (e) => {
  if(e.target.classList.contains('todo')){
    const id = e.target.dataset.id
    console.log(id)
    fetch(`${apiUrl}/${id}`,{
      method: 'DELETE'
    })
    .then(resp => resp.json())
    .then(() => e.target.remove())
  }
}

const init = () => {
  document.addEventListener('DOMContentLoaded', getToDos)
  document.querySelector('#todo-form').addEventListener('submit', createToDo)
  document.querySelector('#todo-list').addEventListener('click', toggleCompleted)
  document.querySelector('#todo-list').addEventListener('dblclick', deleteToDo)
}

init()

