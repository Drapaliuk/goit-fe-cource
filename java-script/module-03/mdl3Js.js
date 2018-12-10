const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const isLoginValid = (login) => {
    return login.length >= 4 && login.length <= 16;
    
}

const isLoginUnique = (usersLogin, arreyLogin) => {
        return arreyLogin.includes(usersLogin);
}

const addLogin = function(logins, login){
    
    if(!isLoginValid(login)){
        return console.log("Помилка! Логін повинен бути від 4 до 16 символів")
    }
    
    if(!isLoginUnique(login, logins)){
    logins.push(login)
    return console.log("Логін успішно додано!")
    }else
    return console.log("Такий логін вже використовується!")

}


addLogin(logins, 'qwerty')