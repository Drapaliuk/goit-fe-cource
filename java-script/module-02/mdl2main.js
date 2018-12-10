'use strict'

let userInput
const numbers = []
let total = 0;
do{
    userInput = prompt('Введіть будь ласка число!');
    console.log(userInput)

    if(Number.isNaN(Number(userInput))){
        alert('Було введено не число, спробуйте ще раз')
        continue
    }else if(userInput !== '0'){
      numbers.push(Number(userInput))
    }
    
    console.log(numbers)
}while (userInput !== null);



if(numbers.length > 1){
  console.log(total)
  for(let key of numbers){
        total += key;
    }
}
if(total > 0){
  alert(`Загальна сума дорівнює ${total}`)
}