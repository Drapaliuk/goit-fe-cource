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
  this.totalPrice = 0,
  this.customerMoney = 0,
  this.changeAmount = 0,   
  this.onSuccess = function() {
    console.log(`Дякуємо за покупку, ваша решта ${this.changeAmount}`);
  }
  this.onError = function() {
    console.log('Вибачте, увас недостатнього коштів!');
  }

  this.countTotalPrice = function(order) {
      // const orderArr = Object.;
      // for (const item of orderArr) {
      //   const amount = item[1];
      //   console.log(item)
      //   const price = productsDatabase[item [0]]
      //   console.log(price)
      //   this.totalPrice += amount * price;
      // }

      
      for (const key in order){
        this.totalPrice += order[key] * productsDatabase[key]
      }
      
      // Стосовно спрощення, ти це мав на увазі?

    }
  this.getCustomerMoney = function(value) {
    this.customerMoney = value;
  }
  this.countChange = function() {


    if (this.totalPrice > this.customerMoney) return null;
    
    this.changeAmount = this.customerMoney - this.totalPrice;
    return this.changeAmount
  }
  
  this.reset = function() {
    this.customerMoney = 0;
  }
}


const order = {
  bread: 1,
  milk: 2,
  apples: 1,
  cheese: 3,
};

const Jack = new Cashier('Jack', products); 
console.log("Ім'я касира: ", Jack.name);
console.log('Асортимент: ', Jack.productsDatabase);
console.log('Кошти покупця: ', Jack.customerMoney);


Jack.countTotalPrice(order);
console.log("Загальна сума замовлення: ", Jack.totalPrice);

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