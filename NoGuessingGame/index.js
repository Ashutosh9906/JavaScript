const minNum = 50;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum + 1 - minNum)) + minNum;
const MyButton = document.getElementById("MyButton");
const MyInput = document.getElementById("MyInput");
const result = document.getElementById("result");

let attempts = 0;
let guess;
let running = true;

// while(running){
//     guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
//     guess = Number(guess)

//     if(isNaN(guess)){
//         window.alert(`Please enter a valid number!`);
//     }
//     else if(guess < minNum || guess > maxNum){
//         window.alert(`Please enter a valid number!`);
//     }
//     else{
//         attempts++;
//         if(guess<answer){
//             window.alert(`TOO LOW! TRY AGAIN`);
//         }
//         else if(guess>answer){
//             window.alert(`TOO HIGH! TRY AGAIN`);
//         }
//         else{
//             window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts`);
//             running = false;
//         }
//     }
// }
while(running){
    MyButton.onclick = function(){
        guess = MyInput.value;
        guess = Number(guess);

        if(isNaN(guess)){
            result.textContent = `Please enter a valid number!`;
        }
        else if(guess<minNum || guess>maxNum){
            result.textContent = `Please enter a valid number!`;
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
                result.textContent = `Correct! The answer was ${answer}. It took you ${attempts} attempts`;
                running = false;
            }
        }
    }
}