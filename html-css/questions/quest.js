class Animal {
    constructor(name, sound){
        this.name = name;
        this.sound = sound;
    }

move() {
    console.log(`My name is ${this.name}, i am moving`)
}
soundVoice(){
    console.log(`${this.name} can make ${this.sound}`)
}
}

console.log("ANIMAL prototype", Animal.prototype)

class Dog extends Animal {
    constructor(name, sound, breed){
    super(name, sound);
    this.breed = breed;
    }

    bark(){
    console.log('woof!')
    }

        moveAndMakeSound(){
            super.move();
            this.bark()
        }

}

console.log("DOG prototype", Dog.prototype)

const dog = new Dog('Mango', "woof, woof", 'shepherd')
dog.move()
dog.soundVoice()




class Cat extends Dog{
    constructor(name, sound, breed, fuckingCrazy){
        // super(name);
        super(name, sound, breed);
        this.fuckingCrazy = fuckingCrazy;

    }


}

console.log("CAT prototype", Cat.prototype)

const cat = new Cat("Kashak", "mau", "siamskiy", 30)
console.log(cat)
cat.soundVoice()


class Bird extends Animal{

}

console.log("BIRD prototype", Bird.prototype)

const someBird = new Bird("Taki", "tweet")
console.log(someBird)
someBird.soundVoice()