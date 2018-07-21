let userInput
const numbers = []
let total = 0;
do{
    userInput = Number(prompt('Введіть будь ласка число!'));
    var revision = isNaN(userInput);
    if(revision === true){
        alert('Було введено не число, спробуйте ще раз')
        continue
    }
    numbers.push(userInput)
    
}while (userInput != 0 && userInput != null && userInput !== 0);


for(let key in numbers){
    total += numbers[key];
}

if(numbers.length > 1){
  alert(`Загальна сума дорівнює ${total}` );
}



const password = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd']
let attempts = 3;
do{
    var ques = prompt("Введіть будь ласка пароль")
    if(ques === null){
        break
    }
    for(var i = 0; i < password.length; i++)
    if(ques === password[i]){
        alert('Ласкаво просимо!')
        break
    }
    attempts -= 1;
    if(attempts === 0){
        alert('У Вас закінчились спроби, аккаунт заблоковано!')
        break
    }
    if(ques !== password[i]){
        alert(`Невірний пароль, у вас залишилось ${attempts} спроб`);
    }
}while(ques !== password[i] && attempts !== 0);