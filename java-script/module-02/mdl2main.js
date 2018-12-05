let userInput
const numbers = []
let total = 0;
do{
    userInput = prompt('Введіть будь ласка число!');
    

    if(Number.isNaN(Number(userInput))){
        alert('Було введено не число, спробуйте ще раз')
        continue
    }
    
    numbers.push(Number(userInput))
    console.log(numbers)
}while (userInput !== null);



if(numbers.length > 0){
    for(let key of numbers){
        total += key;
    }
  alert(`Загальна сума дорівнює ${total}` );
}