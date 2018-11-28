const products = {
  bread: 10,
  milk: 10,
  apples: 20,
  chicken: 50,
  cheese: 40,
};

function Cashier(name, productsDatabase) {
  this.name = name,
  this.productsDatabase = productsDatabase,
  // this.totalPrice = 0,
  this.customerMoney = 0,
  // this.changeAmount = 0,   
  this.onSuccess = function() {
    console.log(`Дякуємо за покупку, ваша решта ${this.changeAmount}`);
  }
  this.onError = function() {
    console.log('Вибачте, увас недостатнього коштів!');
  }

  this.countTotalPrice = function(order) {
      let result = 0   
      for (const key in order){
        result += order[key] * productsDatabase[key]
      }
      return result
    }

  this.getCustomerMoney = function(value) {
    this.customerMoney = value;
  }
  this.countChange = function() {
    if (this.countTotalPrice() > this.customerMoney) return null;

    return this.customerMoney - this.countTotalPrice()

  }
  
  // я замінив this.totalPrice на визов метода, ніічого не працює і я не розумію навіщо це заміняти
  // і як це пофіксити, пояснм мені будь ласка

  this.reset = function() {
    this.customerMoney = 0;
  }
}


const order = {
  bread: 12,
  milk: 2,
  apples: 1,
  cheese: 3,
};

const Jack = new Cashier('Jack', products); 
console.log("Ім'я касира: ", Jack.name);
console.log('Асортимент: ', Jack.productsDatabase);
console.log('Кошти покупця: ', Jack.customerMoney);



console.log("Загальна сума замовлення: ", Jack.countTotalPrice(order))

Jack.getCustomerMoney(500);
console.log("Кошти покупця: ", Jack.customerMoney);

const changeResult = Jack.countChange();
console.log("Решта :", changeResult);

if(changeResult !== null) {
  Jack.onSuccess();
} else {
  Jack.onError();
}

Jack.reset();
console.log("Кошти покупця: ", Jack.customerMoney);