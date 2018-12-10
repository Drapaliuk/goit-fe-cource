const firstSmallImg = document.querySelector('.preview > li > img')

const dataFullView = firstSmallImg.getAttribute('data-fullview')

const fullView = document.querySelector('.fullview > img')

fullView.setAttribute('src', dataFullView)

const fullViewImg = fullView.firstElementChild


const preview = document.querySelector('.preview')

const gallery = Array.from(preview.children)

const func = function(event){
    
    if(event.target.nodeName !== 'IMG') return
    const x = event.target.getAttribute('data-fullview')
    fullView.setAttribute('src', x)

    const i = event.target.parentNode
    
    gallery.forEach(element => {
        if(element.classList.contains('uniq'))
            element.classList.remove('uniq')
    });



    i.classList.add('uniq')
}


preview.addEventListener('click', func)




































