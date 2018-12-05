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
  this.customerMoney = 0,

  this.onSuccess = function(change) {
    console.log(`Дякуємо за покупку, ваша решта ${change}`);
  }

  this.onError = function() {
    console.log('Вибачте, у Вас недостатнього коштів!');
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
  this.countChange = function(order) {
    if (this.countTotalPrice(order) > this.customerMoney){
      return null;
    }

    return this.customerMoney - this.countTotalPrice(order)

  }
  

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


const totalPrice = Jack.countTotalPrice(order)
console.log("Загальна сума замовлення: ", totalPrice )

Jack.getCustomerMoney(500);
console.log("Кошти покупця: ", Jack.customerMoney);


const change = Jack.countChange(order)
console.log("Решта :", change)

if(change !== null) {
  Jack.onSuccess(change)
} else {
  Jack.onError()
}

Jack.reset();
console.log("Кошти покупця: ", Jack.customerMoney);