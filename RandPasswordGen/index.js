const passwordLength = document.getElementById("textbox");
const includeUppercase = document.getElementById("includeUppercase");
const includeLowercase = document.getElementById("includeLowercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const finalPassword = document.getElementById("password");
const button = document.getElementById("button");

function generatePassword(){

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "1234567890";
    const symbols  = "!@#$%^&*()_+-=<>";

    let password = "";
    let allowedchar = "";

    allowedchar += includeUppercase.checked ? uppercase : "";
    allowedchar += includeLowercase.checked ? lowercase : "";
    allowedchar += includeNumbers.checked ? numbers : "";
    allowedchar += includeSymbols.checked ? symbols : "";

    if(passwordLength.value <= 0){
        finalPassword.textContent = "Length must be greater than 1";
    }
    else if(allowedchar.length === 0){
        finalPassword.textContent = "You must select atleast one option";
    }
    else{
        for(let i = 0; i<passwordLength.value; i++){
            let randomIndex = Math.floor(Math.random() * allowedchar.length);
            password += allowedchar[randomIndex];
        }
        finalPassword.textContent = password;
    }
}