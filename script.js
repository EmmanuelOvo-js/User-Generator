function fetchUsers() {
  spinner()
  fetch('https://randomuser.me/api')
    .then((res) => res.json())
    .then((data) => {
      hideSpinner()
      userData(data.results[0])
    })
}

function userData(user) {
  const usertable = document.querySelector('#user')

  usertable.innerHTML = `
  <div class="flex justify-between">
  <div class="flex">
    <img
      class="w-48 h-48 rounded-full mr-8"
      src="${user.picture.large}"
    />
    <div class="space-y-3">
      <p class="text-xl">
        <span class="font-bold">Name: </span>
        ${user.name.title} ${user.name.first} ${user.name.last}
      </p>
      <p class="text-xl">
        <span class="font-bold">Email: </span>
          ${user.email}
      </p>
      <p class="text-xl">
        <span class="font-bold">Phone: </span>
        ${user.phone}
      </p>
      <p class="text-xl">
        <span class="font-bold">Location: </span>
        ${user.location.state}, ${user.location.country}
      </p>
      <p class="text-xl"><span class="font-bold">Age: </span>
      ${user.dob.age}</p>
    </div>
  </div>
</div>
  `

  if (user.gender === 'female') {
    document.body.style.background = 'pink'
    document.body.style.color = 'black'
  } else {
    document.body.style.background = 'blue'
    document.body.style.color = 'white'
  }
}

fetchUsers()

function spinner() {
  document.querySelector('.spinner').style.display = 'block'
}

function hideSpinner() {
  document.querySelector('.spinner').style.display = 'none'
}

document.querySelector('#generate').addEventListener('click', fetchUsers)