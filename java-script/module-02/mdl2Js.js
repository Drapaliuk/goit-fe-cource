let userInput
const numbers = []
let total = 0;
do{
    userInput = Number(prompt('Введіть будь ласка число!'));
    numbers.push(userInput)
} while (userInput != 0)

for(let key in numbers){
    total += numbers[key];
}

if(numbers.length > 1){
  alert(`Загальна сума дорівнює ${total}` );
}



// let userInput
// const numbers = []
// let total = 0;
// do{
//     userInput = Number(prompt('Введіть будь ласка число!'));
//     numbers.push(userInput)
//     if(userInput === NaN){
//       alert('Було введено не число, спробуйте ще раз')
//       }
// } while (userInput != 0)

// for(let key in numbers){
//     total += numbers[key];
// }

// if(numbers.length > 1){
//   alert(`Загальна сума дорівнює ${total}` );
// }