const btnStart = document.querySelector('.js-start')
const btnStop = document.querySelector('.js-take-lap')
const jsTime = document.querySelector('.js-time')
const reset = document.querySelector('.js-reset')
const jsLeps = document.querySelector('.js-laps')
reset.setAttribute('disabled', '')

const timeCounter = 0;
let startTime = Date.now()
let seconds;
let minutes;
let milliseconds;
let deltaTime;

class Timer{
        constructor({ onTick = () => null, creator, removerAttributes, setterAttributes, forDel}){
                this.startTime = null;
                this.deltaTime = null;
                this.timerId = null;
                this.label = false;
                this.onTick = onTick;
                this.currentTime = null;
                this.savedTime = null;
                this.remover = removerAttributes;
                this.setterAttributes = setterAttributes;
                this.creator = creator;
                this.forDel = forDel;
        }

        start(){
                if(!this.label){
                        removerAttributes()
                        this.label = true
                        btnStart.textContent = "pause"
                        this.startTime = Date.now()


                        this.timerId = setInterval(() => {
                                this.currentTime = Date.now()
                                
                                this.deltaTime = this.currentTime - this.startTime;
                                
                                let newDelta = this.currentTime + this.savedTime
                                
                                this.deltaTime = newDelta - this.startTime     

                                const time = new Date(this.deltaTime)
                                
                                minutes = time.getMinutes();
                                
                                seconds = time.getSeconds();
                                
                                milliseconds = time.getMilliseconds();
                                
                                this.onTick({
                                        min:minutes,
                                        sec: seconds,
                                        ms:milliseconds,
                                })

                        }, 100)
                }else{  
                        this.label = false
                        
                        btnStart.textContent = "continue"

                        this.savedTime = this.deltaTime
                        
                        clearInterval(this.timerId)
                }
        };

        lap(){
                this.great = this.deltaTime
                this.creator(this.great)
               
        };

        reset(){
                clearInterval(this.timerId)
                btnStart.textContent = "start"
                this.label = false
                this.onTick({
                        min: '00',
                        sec: '00',
                        ms: '00',
                })
                this.great = null
                setterAttributes()
                forDel()
        }
        // Octal literals are not allowed in strict mode. ????
}



function updateJsTime({min, sec, ms}){
        jsTime.textContent = `${min}:${sec}:${ms}`
}

function creator(lap){
        const li = document.createElement('li')
        li.textContent = `${lap} ms`
        jsLeps.appendChild(li)

}

function removerAttributes(){
        reset.removeAttribute('disabled')
}

function setterAttributes(){
        reset.setAttribute('disabled', '')
}

function forDel(){
        const lapsResult = Array.from(jsLeps.children)
        lapsResult.forEach(element => {
                element.remove()
        });

}

const timer = new Timer({
        startValue: 0,
        onTick: updateJsTime,
        creator: creator,
})

btnStart.addEventListener('click', timer.start.bind(timer))
btnStop.addEventListener('click', timer.lap.bind(timer))
reset.addEventListener('click', timer.reset.bind(timer))

