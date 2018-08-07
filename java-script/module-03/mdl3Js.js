const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const isLoginValid = function(login){
    const logLen = login.length > 4 && login.length < 16;
    return logLen
}

const isLoginUnique = function(usersLogin, arreyLogin){
        const revisio = arreyLogin.includes(usersLogin);
        return revisio 
}

const addLogin = function(logins){
    const login = prompt("Введіть логін")
    const valid = isLoginValid(login)
    if(!valid){
        return alert("Помилка! Логін повинен бути від 4 до 16 символів")
    }
    const unique = isLoginUnique(login, logins)
    if(!unique){
    logins.push(login)
    return alert("Логін успішно додано!")
    }else
    return alert("Такий логін вже використовується!")

}


const y = addLogin(logins)