
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


  function unique(arr) {
    var obj = {};
  
    for (var i = 0; i < arr.length; i++) {
      var str = arr[i].name;
      obj[str] = null;
    }
  
    return Object.keys(obj);
  }


const filter = {
  size: null,
  color: null,
  release_date: null,
}


const btn = document.querySelector('.submit')
const form = document.querySelector('.form')

form.addEventListener("submit", (event => {
  event.preventDefault()
}))

const mainFunc = function(){
  let commonArr = []
  let finalArr = []



  filter.size = Array.from(document.querySelectorAll('input[name = "size"]:checked'))
  .map(item => Number(item.value))

  filter.color = Array.from(document.querySelectorAll('input[name = "color"]:checked'))
  .map(item => item.value)

  filter.release_date = Array.from(document.querySelectorAll('input[name = "release_date"]:checked'))
  .map(item => Number(item.value))

  for(let i = 0; i < filter.size.length; i++){
    laptops.filter(num => num.size === filter.size[i])
    .forEach(num => commonArr.push(num))
  }

  for(let i = 0; i < filter.color.length; i++){
    filterByColor = laptops.filter(num => num.color === filter.color[i])
    .forEach(num => commonArr.push(num))
  }

  for(let i = 0; i < filter.release_date.length; i++){
    filterByRelese_date = laptops.filter(num => num.release_date === filter.release_date[i])
    .forEach(num => commonArr.push(num))
  }

  const uniqueName = unique(commonArr)


  for(let i = 0; i < uniqueName.length; i++){
  laptops.filter(num => num.name === uniqueName[i])
  .forEach(num => finalArr.push(num), )
}




}

btn.addEventListener('click', mainFunc)







