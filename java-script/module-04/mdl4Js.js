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
    console.log(`Дякуємо за покупку, ваша решта ${this.changeAmount} гривень`);
  }
  this.onError = function() {
    console.log('Вибачте, увас недостатнього коштів!');
  }

  this.countTotalPrice = function(order) {
      const orderArr = Object.entries(order);

      for (const item of orderArr) {
        const amount = item[1];
        const price = productsDatabase[item [0]]
        this.totalPrice += amount * price;
      }
    }
  this.getCustomerMoney = function(value) {
    this.customerMoney = value;
  }
  this.countChange = function() {
    const client = this.customerMoney;
    const total = this.totalPrice;
    if (total > client) return null;
    
    const change = client - total;
    this.changeAmount = change;
    return change;
  }
  this.reset = function() {
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;
  }
}


const order = {
  bread: 1777,
  milk: 2,
  apples: 1,
  cheese: 3
};

const Jack = new Cashier('Jack', products); 
console.log("Перевірка параметрів")
console.log("Ім'я касира: ", Jack.name);
console.log(Jack.productsDatabase);
console.log(Jack.totalPrice);
console.log(Jack.customerMoney);
console.log(Jack.changeAmount);
console.log("")

console.log("Оформлення замовлення")

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

console.log("")

console.log('Reset')
Jack.reset();
console.log("Загальна сума замовлення: ", Jack.totalPrice);
console.log("Кошти покупця: ", Jack.customerMoney);
console.log("Решта: ", Jack.changeAmount);