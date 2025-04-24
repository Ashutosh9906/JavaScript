class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
}
class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}
class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("rabbit", 10, 25);
const fish = new Fish("fish", 25, 56);
const hawk = new Hawk("hawk", 18, 70);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed)

//Before using this keyword in child class we mush call the constructor of the parent class
//Using Super it will be more code reusability