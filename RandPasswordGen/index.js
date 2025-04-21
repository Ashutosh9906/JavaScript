const passwordLength = 12;
const includeUppercase = document.getElementById("includeUppercase");
const includeLowercase = document.getElementById("includeLowercase");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");
const finalPassword = document.getElementById("password");
const button = document.getElementById("button");

function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols){

    const uppercasse = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "1234567890";
    const symbols = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    // allowedChars += includeUppercase.checked ? uppercasse : "";
    // allowedChars += includeLowercase.checked ? lowercase : "";
    // allowedChars += includeNumbers.checked ? numbers : "";
    // allowedChars += includeSymbols.checked ? symbols : "";

    if(includeUppercase){
        allowedChars += uppercasse;
    }
    if(includeLowercase){
        allowedChars += lowercase;
    }
    if(includeNumbers){
        allowedChars += numbers;
    }
    if(includeSymbols){
        allowedChars += symbols;
    }

    if(length <= 0){
        return `(password length must be st least 1)`;
    }
    if(allowedChars.length === 0){
        return `(Atleast 1 set of charachter needs to be selected)`;
    }

    for(let i=0; i<length; i++){
        const randomindex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomindex];
    }
    
    finalPassword.textContent = password;
}

button.onclick = generatePassword(passwordLength, includeUppercase, includeLowercase, includeNumbers, includeSymbols);

