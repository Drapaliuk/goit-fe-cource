const DOMelem = document.querySelector('.hw7')
 

const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    },

  ];




const functionForArticle = function({img, title, text, link}){

const wrapper = document.createElement('div')
wrapper.classList.add('wrapper')

const imga = document.createElement('img')
imga.classList.add('post__image')
imga.setAttribute('src', img)

const titles = document.createElement('h2')
titles.classList.add('post__title')
titles.textContent = title

const p = document.createElement('p')
p.classList.add('post__text')
p.textContent = text

const btn = document.createElement('a')
btn.textContent = 'read more'
btn.classList.add('button')
btn.setAttribute('src', link)

wrapper.append(imga, titles,text, btn)

return wrapper

}

const createCards = function(posts, callback){
    const arr = []
   
    posts.forEach(element => {
      arr.push(callback(element))
    });
    return arr

}



const ex = createCards(posts, functionForArticle)

DOMelem.append(...ex)
