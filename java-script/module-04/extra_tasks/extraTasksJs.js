                               // Task #1 


/*  
  Напишите скрипт, который, для объекта user, последовательно: 
  
    - добавляет поле mood со значением 'happy'
    
    - заменяет значение hobby на 'javascript'
    
    - удаляет свойство premium
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя цикл for...in
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.keys и for...of
    
    - выводит содержимое объекта user в формате ключ:значение 
      используя Object.entries и for...of
*/                    
                                                     
const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true
  };

user.mood = 'happy'
user.hobby = 'javascript'
delete user.premium

console.log(user)

for(const keys in user){
    console.log('Key: ', keys)
    console.log('   value: ', user [keys])
}

const arrKeys = Object.keys (user);

for(const arrRev of arrKeys){
    console.log('Key: ', arrRev)
    console.log('   value: ', user [arrRev])
}

const pares = Object.entries(user);
console.log(typeof pares)

for (const entry of pares) {
    const key = entry[0];
    const value = entry[1];
  
    console.log(`${key}: ${value}`)
}




// =========================================== Task # 2


//   Напиште скрипт который определит и выведет в консоль 
//   имя сотрудника который выполнил больше всех задач.

//   Сотрудники и кол-во выполненых задач содержатся 
//   как свойства объекта в формате "имя":"кол-во задач"

/*
  Напиште скрипт который определит и выведет в консоль 
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся 
  как свойства объекта в формате "имя":"кол-во задач"
*/



const tasksCompleted = {
    ann: 9,
    david: 305,
    helen: 1000000,
    lorence: 9989,
    jack: 222222
  };


  const counter = function(tasks){
    tasksArrVal = Object.values(tasks);
    tasksArrKey = Object.keys(tasks);
    let largest = tasksArrVal[0]
    
    for(let item = 0; item < tasksArrVal.length; item++){
    if(tasksArrVal[item] > largest){
      largest = tasksArrVal[item]
      }
    }

    const largestNumber = tasksArrVal.indexOf(largest)
   
    return console.log(`${tasksArrKey[largestNumber]}: ${largest}`)
  }
  counter(tasksCompleted)

  //НЕ ПРАЦЮЭ ЧЕРЕЗ ФОР ОФ????????????????????????????????????????????????????????????????????????




                                    // Task #3


/*  
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

const pirates = {
    name: 'Jack',
    surename: 'Sparrow',
    cda: 3,
    cda: 1,
}

// ЧОМУ ЯКЩО 2 ОДНАКОВИХ КЛЮЧА їХ НЕ РАХУЄ?

const countProps = function(obj){
    let arr = []
    for(const key in obj){
        arr.push(obj[key]);
    }
    return arr.length;
}

const values = countProps(pirates)
console.log(values)




// Task #4

/*  
  Создайте функцию isObjectEmpty(obj), которая получает 
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).
  
  Возвращает true если объект пустой, false если не пустой.
*/




const arr = {
    name: 1,
    surname: 2,
}

const isObjectEmpty = function(obj){
    const objArr = Object.entries(obj)
    const quest = objArr.length === 0
    if(!quest){
        return quest
    }else
        return quest
    return quest
    console.log(quest)

}

const audit = isObjectEmpty(arr)
console.log(audit)









                                // Task #5

    /*  
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.
  
  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"
  
  Функция возвращает общую сумму зарплаты.
*/

const worker = {
    Jack: 100,
    Nick: 20,
    Andrew:1,
}


const countTotalSalary = function(salaries){
    let total = 0;
    for(const workerSalaries in salaries){
        total += salaries[workerSalaries]
    }
    console.log(total)
}

countTotalSalary(worker)






// Task #6

/*  
  Напишите функцию getAllPropValues(arr, prop), 
  которая получает массив объектов и имя ключа, 
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

const users = [
    { name: 'Poly', age: 7, mood: 'happy' },
    { name: 'Mango', age: 4, mood: 'blissful'},
    { name: 'Ajax', age: 3, mood: 'tired' }
  ];

const getAllPropValues = function(arr, prop){
    for(let i = 0; i < arr.length; i++){
        const exit = arr[i][prop]
        console.log(exit)
    }
}

getAllPropValues(users, 'mood')







// Task #7


/*  
  Напишите код, который бы  с помощью 
  функции-конструкора User, позволял создавать 
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей, 
  необходимо передать как аргументы 
  при вызове конструктора.
  
  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью 
  функции getUserInfo вывести строку в консоль.
*/



function user(name, active, age, friends){
    this.name = name;
    this.active = active;
    this.age = age;
    this.friends = friends;
    this.getUserInfo = function(){
        console.log(
            `User ${this.name} is ${this.age} years old and has ${this.friends} friends`
        )
    }
}

const userFirst = new user('Jack', true, 33, 100);
// console.log(userFirst)
userFirst.getUserInfo()

const userSecond = new user('Jonh', false, 3, 2);
// console.log(userFirst)
userSecond.getUserInfo()

const userThirst = new user('Katya', true, 23, 10);
// console.log(userFirst)
userThirst.getUserInfo()





                                // Task #8


/*  
  Расставьте отсутствующие this 
  в методах объекта store
*/



const store = {
    products: ['bread', 'cheese', 'milk', 'apples'],
    managers: ['poly', 'mango', 'ajax'],
    addManager(managers) {
      this.managers.push(managers);
      
      console.log(managers);
    },
    removeManager(managers) {
      const idx = managers.indexOf(managers);
      
      this.managers.splice(idx, 1);
      
      console.log(managers);
    },
    getProducts() {
      console.log(this.products);
      
      return this.products;
    }
  }
  
  store.addManager('chelsey');
  
  store.removeManager('mango');
  
  store.getProducts();



  


// Task #9


/*  
  Расставьте отсутствующие this в конструкторе объектов Account
*/

function Account({ login, password, type = "regular" }) {
    this.login = login;
    this.password = password;
    this.type = type;
  
    changePassword = function(newPassword) {
      this.password = newPassword;
  
      console.log(password);
    };
  
    getAccountInfo = function() {
      console.log(`
        Login: ${login}, 
        Pass: ${password}, 
        Type: ${type}
      `);
    };
  }
  
  const account = new Account({
    login: "Mango",
    password: "qwe123",
    type: "premium"
  });
  
  console.log(account.login); // 'Mango'
  console.log(account.password); // 'qwe123'
  console.log(account.type); // 'premium'
  
  console.log(account.changePassword("asdzxc")); // 'asdzxc'
  
  console.log(account.getAccountInfo()); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'
  