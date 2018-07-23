let userInput
const numbers = []
let total = 0;
do{
    userInput = Number(prompt('Введіть будь ласка число!'));
    const revision = isNaN(userInput);
    if(revision){
        alert('Було введено не число, спробуйте ще раз')
        continue
    }
    numbers.push(userInput)
}while (userInput != 0);

for(let key of numbers){
    total += key;
}

if(numbers.length > 0){
  alert(`Загальна сума дорівнює ${total}` );
}




const password = ['q', 'e', 'qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd']
let attempts = 3;

do{
    var ques = prompt("Введіть будь ласка пароль")
    if(ques === null){
        break
    }
    for(let value of password)
    if(ques === value){
        alert('Ласкаво просимо!')
        break
    }
    attempts -= 1;
    if(attempts === 0){
        alert('У Вас закінчились спроби, аккаунт заблоковано!')
        break
    }
    if(ques !== value){
        alert(`Невірний пароль, у вас залишилось ${attempts} спроб`)
        }
}while(ques !== value && attempts !== 0);