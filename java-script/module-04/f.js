const autoFillingIn = function(){
    const bread = Number(prompt('Bread (cost 10$)'));
    const milk = Number(prompt('Milk (cost 15$)'));
    const apples = Number(prompt('Apples (cost 20$)'));
    const chicken = Number(prompt('Chicken (cost 50$)'));
    const cheese = Number(prompt('Cheese (cost 40$)'));
    const order = {
        bread: bread,
        milk: milk,
        apples: apples,
        cheese: cheese,
        chicken: chicken,
    }
    console.log(order);
    return order
}
const order = autoFillingIn()

const{bread = 0, milk = 0, apples = 0, cheese = 0, chicken = 0} = order

const products = {
    bread: 10 * bread,
    milk: 15 * milk,
    apples: 20 * apples,
    chicken: 50 * chicken,
    cheese: 40 * cheese,
};

const getCustomerMoney = function() {
    const howMm = Number(prompt('Скільки коштів у вас є в наявності?'));
    return howMm
}

const burMon = getCustomerMoney()

const countTotalPrice = function(order){
    let total = 0;
    for(const cost in order){
        total += order[cost]
    }
    return total
}
const total = countTotalPrice(products)

const change = function(buyerMoney, totalPrice){
    const change = buyerMoney - totalPrice
    if(change > -1){
        return alert(`Вітаємо з покупкою, ваша решта становить ${change} гривень`)
    }else return alert("У вас недостатньо коштів!")
}
change(burMon, total)