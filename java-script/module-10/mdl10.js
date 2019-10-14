


const inputId = document.querySelector('.forId')
const inputName = document.querySelector('.name')
const inputUserName = document.querySelector('.username')
const allUsersBtn = document.querySelector('.allUsers')
const findIdBtn = document.querySelector('.findId')
const deleteUserBtn = document.querySelector('.deleteUser')
const updateUserBtn = document.querySelector('.updateUser')
const addUserBtn = document.querySelector('.addUser')
const form = document.querySelector('.userForm')
const wrapperForList = document.querySelector('.forList')


const createCard = function({id, name, username, email}, wrapper){
    console.log(id)
    console.log(name)

    const ul = document.createElement('ul')

    ul.classList.add('classForRemove')

    const li = document.createElement('li')
    li.classList.add('liFrame')

    const idStr = document.createElement('p')
    idStr.textContent = `id:  ${id}`

    const nameStr = document.createElement('p')
    nameStr.textContent = `name:  ${name}`

    const userNameStr = document.createElement('p')
    userNameStr.textContent = `username:  ${username}`

    const emailStr = document.createElement('p')
    emailStr.textContent = `email:  ${email}`

    li.appendChild(idStr)
    li.appendChild(nameStr)
    li.appendChild(userNameStr)
    li.appendChild(emailStr)

    ul.appendChild(li)

    wrapper.appendChild(ul)
}

const remover = function(wrapper, mustDel) {
    wrapper.removeChild(mustDel)
}

const getAllUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json()
    }).then(data => data.forEach(element => {
        createCard(element, wrapperForList)
        
    }))
}




const getUsersById = function(id){
    
    if(id === '') return alert("Вкажіть id користувача")
    fetch(`https://jsonplaceholder.typicode.com/users/${id}` )
    .then(response => {
        return response.json()
    }).then(data => createCard(data, wrapperForList)
        
    )
}




const addUser = (name, username) => {
  if(name === '' || username === '') return alert("Заповніть поля name і username!")    
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({name, username}),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(data => createCard(data, wrapperForList)
     
    )
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
    .then(data => createCard(data, wrapperForList))
    
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



const list = document.querySelector('.usersList')



console.log(list)


// const paragraph = document.querySelector('.p')
// console.log(paragraph)
// paragraph.textContent = 'Hello world!'






const exp = document.querySelector('.exp')

console.log(exp)

const newe = document.createElement('p')
newe.textContent = 'Hi'

exp.appendChild(newe)


exp.removeChild(newe)

