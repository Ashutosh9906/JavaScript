class animal{
    isAlive = true;

    eat(){
        console.log(`This is ${this.name} is eating`);
    }
    sleep(){
        console.log(`This is ${this.name} is sleeping`);
    }
}
class rabbit extends animal{
    name = "rabbit";
}
class fish extends animal{
    name = "fish";
}
class hawk extends animal{
    name = "hawk";
}

const rabbits = new rabbit();
const fishs = new fish();
const hawks = new hawk();

console.log(rabbits.isAlive);
rabbits.eat();
fishs.eat()
hawks.eat()