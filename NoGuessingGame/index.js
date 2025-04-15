const minNum = 50;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum + 1 - minNum)) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess)

    if(isNaN(guess)){
        window.alert(`Please enter a valid number!`);
    }
    else if(guess < minNum || guess > maxNum){
        window.alert(`Please enter a valid number!`);
    }
    else{
        attempts++;
        if(guess<answer){
            console.alert(`TOO LOW! TRY AGAIN`);
        }
        else if(guess>answer){
            console.alert(`TOO HIGH! TRY AGAIN`);
        }
        else{
            console.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts`);
            running = false;
        }
    }
}