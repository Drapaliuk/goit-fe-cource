const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const isLoginValid = (login) => {
    return login.length >= 4 && login.length <= 16;
    
}

const isLoginUnique = (usersLogin, arreyLogin) => {
        return arreyLogin.includes(usersLogin);
}

const registers = function(logins){
    const login = prompt("Введіть логін")
    
    if(!isLoginValid(login)){
        return alert("Помилка! Логін повинен бути від 4 до 16 символів")
    }
    
    if(!isLoginUnique(login, logins)){
    logins.push(login)
    return alert("Логін успішно додано!")
    }else
    return alert("Такий логін вже використовується!")

}


registers(logins)