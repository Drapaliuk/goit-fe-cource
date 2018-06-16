// HOME WORK

const cancel = 'Відмінено користувачем!';
const accessDenied = 'Доступ обмежено!';
const welcome = 'Ласкаво просимо!';
const ADMIN_LOGIN = 'admin';
const ADMIN_PASSWORD = 'm4ngo1zh4ackz0r'
let login;
let password;


const adminLogin = prompt ('Будь ласка введіть логін')
if(adminLogin === ADMIN_LOGIN){
    const adminPassword = prompt ('Будь ласка введіть пароль')
    if(adminPassword === ADMIN_PASSWORD){
        login = alert(welcome)
    }else if(adminPassword === null){
        login = alert(cancel)
    }else{
        login = alert(accessDenied)
    }
}else if(adminLogin === null){
    password = alert(cancel)
}else{
    password = alert(accessDenied)
}

// EXTRA TASK
// let seats;
// const hurgada = 25;
// const taba = 6;
// const sharm = 15;
// const offer = prompt('Будь ласка виберіть набряк подорожі')
// if(offer === 'sharm'){
//     seats = prompt('Будь ласка введіть необхідну кількість місць')
//     }
//     if(seats <= sharm){
//     alert('Щасливої дороги!')
//     }else{
//     alert('Місць немає!')
// else if(offer === 'hurgada'){
//     seats = prompt('Будь ласка введіть необхідну кількість місць')
//     }
//     if(seats <= hurgada){
//     alert('Щасливої дороги!')
//     }else{
//     alert('Місць немає!')