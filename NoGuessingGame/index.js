const minNum = 50;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum +1)) + minNum;
const MyInput = document.getElementById("MyInput");
const MyButton = document.getElementById("MyButton");
const result = document.getElementById("result");

let running = true;
let guess;
let attempts = 0;

while(running){
    MyButton.onclick = function(){
        guess = MyInput.textContent;
        guess = Number(guess);

        if(isNaN(guess)){
            result.textContent = `Enter an Valid text!`;
        }
        else if(guess<minNum || guess>maxNum){
            result.textContent = `Enter an Valid text!`;
        }
        else{
            attempts++;
            if(guess<answer){
                result.textContent = `TOO LOW! TRY AGAIN`;
            }
            else if(guess>answer){
                result.textContent = `TOO HIGH! TRY AGAIN`;
            }
            else{
                result.taxtContent = `CORRECT! answer is ${answer}. No of attempts is ${attempts} attempts`
                running = false;
            }
        }
    }
}