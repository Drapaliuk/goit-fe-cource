const users = [
    {
      id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      eyeColor: 'blue',
      phone: '+1 (848) 556-2344',
      friends: ['Sharron Pace'],
      isActive: false,
      balance: 2811,
      skills: ['ipsum', 'lorem'],
      gender: 'male',
      age: 37,
    },
    {
      id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      eyeColor: 'blue',
      phone: '+1 (855) 582-2464',
      friends: ['Briana Decker', 'Sharron Pace'],
      isActive: true,
      balance: 3821,
      skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
      gender: 'female',
      age: 34,
    },
    {
      id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      eyeColor: 'green',
      phone: '+1 (814) 593-3825',
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
      isActive: false,
      balance: 3793,
      skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
      gender: 'male',
      age: 24,
    },
    {
      id: '249b6175-5c30-44c6-b154-f120923736f5',
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      eyeColor: 'green',
      phone: '+1 (909) 547-2687',
      friends: ['Goldie Gentry', 'Aisha Tran'],
      isActive: true,
      balance: 2278,
      skills: ['adipisicing', 'irure', 'velit'],
      gender: 'female',
      age: 21,
    },
    {
      id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      eyeColor: 'blue',
      phone: '+1 (956) 512-2693',
      friends: ['Jordan Sampson', 'Eddie Strong'],
      isActive: true,
      balance: 3951,
      skills: ['ex', 'culpa', 'nostrud'],
      gender: 'male',
      age: 27,
    },
    {
      guid: '150b00fb-dd82-427d-9faf-2879ea87c695',
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      eyeColor: 'brown',
      phone: '+1 (876) 411-2433',
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
      isActive: false,
      balance: 1498,
      skills: ['non', 'amet', 'ipsum'],
      gender: 'male',
      age: 38,
    },
    {
      id: 'e1bf46ab-7168-491e-925e-f01e21394812',
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      eyeColor: 'brown',
      phone: '+1 (979) 504-2554',
      friends: ['Goldie Gentry', 'Briana Decker'],
      isActive: true,
      balance: 2764,
      skills: ['lorem', 'veniam', 'culpa'],
      gender: 'female',
      age: 39,
    },
  ]; 
  
  
//    * Получить массив имен (поле name) всех пользователей
//    */
console.log("")
console.log('#1 Імена всіх користувачів   ============================================================================')                           

  const getAllNames = function(users){
    users.forEach(element => {
      // return (element['name']) ????????
      const allNames = element['name']
      return console.log(allNames)
    });
  }
  
  console.log(getAllNames(users)); 
  // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
  
                        
  // /**
  //  * Получить массив объектов пользователей по цвету глаз (поле eyeColor)
  //  */
  console.log("")
  console.log('#2 Колір очей  ============================================================================')                           


  const getUsersByEyeColor = (arr, color) => {
  
    return arr.filter(i => i.eyeColor === color);
  
  }
  
  console.log(getUsersByEyeColor(users, 'blue'))
  console.log(getUsersByEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
  

                                              
  // /**
  //  * Получить массив имен пользователей по полу (поле gender)
  //  */
  console.log("")
  console.log('#3 Імена користувачів відповідно статі   ============================================================================')                           


  const getUsersByGender = (arr, gender) => {
      return arr.filter(z => z.gender === gender)
  }
  console.log(getUsersByGender(users, 'female')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
  
  
  // /**
  //  * Получить массив только неактивных пользователей (поле isActive)
  //  */
  console.log("")
  console.log('#4 Неактивні користувачі ============================================================================')                           

  const getInactiveUsers = arr => {
    return arr.filter(y => y.isActive === false)
  };
  
  console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

                        
                                   
  // /**
  //  * Получить пользоваля (не массив) по email (поле email, он уникальный)
  // //  */
  console.log("")
  console.log('#5 Знайдено за email` ом ============================================================================')                           

  const getUserByEmail = (arr, email) => {
    return arr.find(z => z.email === email)
  };
  
  console.log(getUserByEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
  console.log(getUserByEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
  


  
  // /**
  //  * Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age)
  //  */
  console.log("")
  console.log('#6 За віковою категорією ============================================================================')                           


  const getUsersWithAge = (arr, min, max) => {
    return arr.filter(d => d.age > min && d.age < max);
  };
  
  console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
                                              
  console.log(getUsersWithAge(users, 30, 40)); // // [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
                                   

  
  // /**
  //  * Получить общую сумму баланса (поле balance) всех пользователей
  //  */
  console.log("")
  console.log('#7 Загальний баланс користувачів ============================================================================')                           

  const getTotalBalance = arr => {
      return arr.reduce((acc, z) => acc + z.balance, 0)
  };
  
  console.log(getTotalBalance(users)); // 20916
                                  

  

  
  // /**
  //  * Массив имен всех пользователей у которых есть друг с указанным именем
  //  */
  console.log("") 
  console.log('#8 Пошук за наявністю друга в списку ============================================================================')                           

  const getUsersByFriend = (arr, name) => {
    return arr.filter(x => x.friends.includes(name)).map(y => y.name)

    // ЩО Я В ЦЬОМУ АЛЬТЕРНАТИВНОМУ ВАРІАНТІ ЗРОБИВ НЕ ТАК?????

//     let newArr = []
//     arr.forEach(element => {
//       if(element.friends === element.friends.includes(name)){
//         newArr.push(element ["name"])
//         console.log(newArr)
//         console.log(element.friends)
//       }
//      console.log(newArr)
};
  
  
  
  
  
  console.log(getUsersByFriend(users, 'Padilla Garrison')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
  console.log(getUsersByFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
