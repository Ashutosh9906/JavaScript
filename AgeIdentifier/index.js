const myText = document.getElementById("MyText");
const myButton = document.getElementById("MyButton");
const resultantElement = document.getElementById("resultantElement");
let age;

myButton.onclick = function(){
    age = myText.value;
    age = Number(age);
    if(age >= 100){
        resultantElement.textContent = 'You are TOO OLD to enter this site!';
    }
    else if(age == 0){
        resultantElement.textContent = 'You can`t enter, you were just born!';
    }
    else if(age >= 18){
        resultantElement.textContent = 'You are old enough to enter this site!';
    }
    else if(age <= 0){
        resultantElement.textContent = 'Your age can`t be less than 0!';
    }
    else{
        resultantElement.textContent = 'You must be 18+ to enter this site!';
    }
}