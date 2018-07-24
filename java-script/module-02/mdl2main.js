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