
const laptops = [
    {
      size: 13,
      color: 'white',
      price: 28000,
      release_date: 2015,
      name: 'Macbook Air White 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'gray',
      price: 32000,
      release_date: 2016,
      name: 'Macbook Air Gray 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 13,
      color: 'black',
      price: 35000,
      release_date: 2017,
      name: 'Macbook Air Black 13"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'white',
      price: 45000,
      release_date: 2015,
      name: 'Macbook Air White 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'gray',
      price: 55000,
      release_date: 2016,
      name: 'Macbook Pro Gray 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 15,
      color: 'black',
      price: 45000,
      release_date: 2017,
      name: 'Macbook Pro Black 15"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'white',
      price: 65000,
      release_date: 2015,
      name: 'Macbook Air White 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'gray',
      price: 75000,
      release_date: 2016,
      name: 'Macbook Pro Gray 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
    {
      size: 17,
      color: 'black',
      price: 80000,
      release_date: 2017,
      name: 'Macbook Pro Black 17"',
      img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
      descr:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
    },
  ];









function getFilteredItems() {
    const controls = {
      size: Array.from(document.querySelectorAll('input[name="size"]:checked')),
      color: Array.from(
        document.querySelectorAll('input[name="color"]:checked'),
      ).map(item => item.value),
      release_date: Array.from(
        document.querySelectorAll('input[name="release_date"]:checked'),
      ).map(item => item.value),
    };
    return controls;
  }
  

  
  
  
  function getFilteredValues(inputs) {
    let customSizes = arr => arr.map(elem => elem.value);
    const filter = {
      size: customSizes(inputs.size),
      color: inputs.color,
      release_date: inputs.release_date,
    };
    return filter;
  }
  

  
  
  function displayItems() {
    const userFilter = getFilteredValues(getFilteredItems());
    const itemsToShow = arr =>
      arr.filter(
        item =>
          userFilter.size.includes(String(item.size)) &&
          userFilter.color.includes(item.color) &&
          userFilter.release_date.includes(String(item.release_date)),
      );
      console.log(userFilter);
      console.log(laptops);
    const getItems = itemsToShow(laptops);
    console.log(getItems);
    return getItems;
  }
  
  
  function showItems(evt) {
    evt.preventDefault();
    document.querySelector('.result').innerHTML = "";
    const filteredItems = displayItems();
    console.log(filteredItems);
    const source = document.querySelector('#items').innerHTML.trim();
    const template = Handlebars.compile(source);
    const markup = filteredItems.map(el => template(el));
    markup.map(el =>
      document.querySelector('.result').insertAdjacentHTML('beforeend', el),
    );
  }
  
  document.querySelector(".js-form").addEventListener("submit", showItems);