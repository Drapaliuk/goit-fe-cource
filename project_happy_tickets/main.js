'use strict'
const inputWithValue = document.querySelector('#inputWithValue')
const form = document.querySelector('form')
const list = document.querySelector('.list-of-result')



function formListener(value){
    if(!value){
        alert('write the number in field')
        return
    }
    let valToStr = value.toString()
    const pattern = /\D/ig;
    if(valToStr.length % 2 !== 0 || valToStr.match(pattern)){
        alert('write ONLY the number with odd sum of the numbers')
        return 
    }
    let draft = 0
    let acc = 0
    let resultArr = []
    let idx = 0;
    let arrForIdx = [0]
    let allGaps = []
    let res = '0.' + valToStr

    let y = res.split('')
    let x = Number(y.map((el, idx) => {
        if(idx === 1){
            return el = '.'
       }else if(idx === y.length - 1)
           return el = '1'
       else return '0'
    }).join(''))

    do{
        idx += 1
        draft += x
        acc = draft.toFixed(valToStr.length)
        let likeNumberTicket = acc.split('').reverse().join('').split('', valToStr.length)
        let firstHalf = likeNumberTicket.slice(0, (valToStr.length/2))
        let secondHalf = likeNumberTicket.slice((valToStr.length / 2), valToStr.length)
        
        let amountOfFirstHalf = firstHalf.reduce((acc, value) => acc + Number(value), 0)
        let amountOfSecondHalf = secondHalf.reduce((acc, value) => acc + Number(value), 0)
        if(amountOfFirstHalf === amountOfSecondHalf){
            arrForIdx.push(idx)
            allGaps.push(idx - arrForIdx[arrForIdx.length - 2])
            resultArr.push(`${firstHalf} and ${secondHalf},      GAP = ${idx - arrForIdx[arrForIdx.length - 2]}`)
        }

    }while(acc <= res)
   return resultArr.length
}

function textCreator(value){

}

function htmlNodeCreator(nodeName, parent, dataForContent){
    if(!dataForContent) return

    let htmlNode = document.createElement(nodeName)
    parent.appendChild(htmlNode)
    htmlNode.textContent = `There will be ${dataForContent} happy tickets in party from ${inputWithValue.value}`

}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    let resultOfFunction = formListener(inputWithValue.value)
    htmlNodeCreator('li', list, resultOfFunction)
})

