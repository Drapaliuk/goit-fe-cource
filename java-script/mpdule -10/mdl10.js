


const inputId = document.querySelector('.forId')
const inputName = document.querySelector('.name')
const inputUserName = document.querySelector('.username')
const allUsersBtn = document.querySelector('.allUsers')
const findIdBtn = document.querySelector('.findId')
const deleteUserBtn = document.querySelector('.deleteUser')
const updateUserBtn = document.querySelector('.updateUser')
const addUserBtn = document.querySelector('.addUser')
const form = document.querySelector('.userForm')


const getAllUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json()
    }).then(data => console.log(data))
}




const getUsersById = (id) => {
    if(id === '') return alert("Вкажіть id користувача")
    fetch(`https://jsonplaceholder.typicode.com/users/${id}` )
    .then(response => {
        return response.json()
    }).then(data => console.log(data))
}




const addUser = (name, age) => {
  if(name === '' || username === '') return alert("Заповніть поля name і username!")    
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({name, age}),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('ERROR' + error));
}




const removeUser = (id) => {
    if(id === '')return alert("Вкажіть id користувача")
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE'
}).then(data => {
    if(data.ok){
        console.log('succes')
    }else{
        console.log('error' + error)
    }
})
.catch(error => console.log('ERROR' + error));
}



const updateUser = (id, name, username ) => {
    if(id === '' || name === '' || username === '') return alert("Заповніть всі поля!")

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method: 'PUT',
        body: JSON.stringify({name, username}),
        headers:{
            "Content-type": "application/json; charset=UTF-8"
        }
    }).then(response => response.json())
    .then(data => console.log(data))
    
}

const handle = function(event){
    event.preventDefault()
    
}

form.addEventListener('submit', handle)
form.addEventListener('click', () => {
    if(event.target === allUsersBtn){
        getAllUsers()
    } else if(event.target === findIdBtn){
        getUsersById(inputId.value)
    } else if(event.target === deleteUserBtn){
        removeUser(inputId.value)
    } else if(event.target === addUserBtn){
        addUser(inputName.value, inputUserName.value)
    } else if(event.target === updateUserBtn){
        updateUser(inputId.value, inputName.value, inputUserName.value)
    }
})