'use strict'

class Hamburger {
    constructor(size, stuffings){
    this._size = size;
    this._stuffing = stuffings;
    this._toppings = [];    
    }
    

    addTopping(...toppings){
      for(let i = 0; i < toppings.length; i++){
        const revisio = this._toppings
        .includes(toppings[i])

        if(revisio){
          continue
        }
        this._toppings.push(toppings[i])
      }
    }


    removeTopping(topping) {
      this._toppings = this._toppings.filter(num => num !== topping)
    }

    get getToppings(){
      return this._toppings
    }

    get getSize(){
        return this._size
    }

    get getStuffing(){
      return this._stuffing
    }


    calculatePrice(){
      return Hamburger.SIZES[this._size].price + Hamburger.STUFFINGS[this._stuffing].price + this._toppings.reduce((accum, elem) => accum + Hamburger.TOPPINGS[elem].price, 0)      
    
    }
    
    calculateCalories(){
      return Hamburger.SIZES[this._size].calories + Hamburger.STUFFINGS[this._stuffing].calories + this._toppings.reduce((accum, elem) => accum + Hamburger.TOPPINGS[elem].calories, 0)      
    }
    

}

Hamburger.SIZE_SMALL = 'SIZE_SMALL'
Hamburger.SIZE_LARGE = 'SIZE_LARGE'
Hamburger.STUFFING_CHEESE = 'STUFFING CHEESE'
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD'
Hamburger.STUFFING_MEET = 'STUFFING_MEET'
Hamburger.TOPPING_SPICE = 'STUFFING_SPICE'
Hamburger.TOPPING_SAUCE = 'STUFFING_SAUCE'


console.log(Hamburger.SIZE_SMALL)
console.log(Hamburger.SIZE_LARGE)
console.log(Hamburger.STUFFING_CHEESE)
console.log(Hamburger.TOPPING_SAUCE)



const chee = new Hamburger(Hamburger.SIZE_SMALL)


Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    calories: 0,
  },
  [Hamburger.TOPPING_SAUCE]:{
    price: 15,
    calories: 5,
  }

};

Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    calories: 20,
  },

  [Hamburger.STUFFING_SALAD]: {
    price: 20,
    calories: 6,
  },

  [Hamburger.STUFFING_CHEESE]: {
    price: 35,
    calories: 15,
  }

}

Hamburger.SIZES = {
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    calories: 50,
  },

  [Hamburger.SIZE_LARGE]: {
    price: 50,
    calories: 100,
  }
}

/* Вот как может выглядеть использование этого класса */

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// Спросим сколько там калорий
console.log("Calories: ", hamburger.calculateCalories());

// Сколько стоит?
console.log("Price: ", hamburger.calculatePrice());

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log("Price with sauce: ", hamburger.calculatePrice());

console.log(hamburger.getToppings)

// Проверить, большой ли гамбургер?
console.log("Is hamburger large: ", hamburger.getSize === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SAUCE);

// Смотрим сколько добавок
console.log("Hamburger has %d toppings", hamburger.getToppings.length); // 1