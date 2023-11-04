const generateBtn = document.querySelector('#generate')

const api = 'https://randomuser.me/api'

function fetchUser(){
  showSpinner()
  fetch(api)
  .then(response => response.json())
  // .then(data => console.log(data)) // returns an object
  .then(data => {
    hideSpinner()
    //retrieve a single person
    displayUser(data.results[0])
  })
}

function displayUser(user){
  const userDisplay = document.querySelector('#user')
  console.log(user.gender)
  if(user.gender === 'female'){
    document.body.backgroundColor = 'rebeccapurple'
  } else {
    document.body.backgroundColor = 'steelblue'
  }

  userDisplay.innerHTML = `
  <div class="flex justify-between">
  <div class="flex">
    <img
      class="w-48 h-48 rounded-full mr-8"
      src="${user.picture.large}"
    /> 
    <div class="space-y-3">
      <p class="text-xl">
        <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
      </p>
      <p class="text-xl">
        <span class="font-bold">Email: </span> ${user.email}
      </p>
      <p class="text-xl">
        <span class="font-bold">Phone: </span> ${user.phone}
      </p>
      <p class="text-xl">
        <span class="font-bold">Location: </span> ${user.location.city} ${user.location.state}
      </p>
      <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
    </div>
  </div>
</div>`
}

function showSpinner(){
  document.querySelector('.spinner').style.display = 'block'
}

function hideSpinner(){
  document.querySelector('.spinner').style.display = 'none'
}

generateBtn.addEventListener('click', () => {
  fetchUser()
})