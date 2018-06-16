// HOME WORK

const cancel = 'Відмінено користувачем!';
const accessDenied = 'Доступ обмежено!';
const welcome = 'Ласкаво просимо!';
const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r'

const adminLogin = prompt ('Будь ласка введіть логін')
if(adminLogin === ADMIN_LOGIN){
    const adminPassword = prompt ('Будь ласка введіть пароль')
    if(adminPassword === ADMIN_PASSWORD){
        alert(welcome)
    }else if(adminPassword === null){
        alert(cancel)
    }else{
        alert(accessDenied)
    }
}else if(adminLogin === null){
    password = alert(cancel)
}else{
    password = alert(accessDenied)
}