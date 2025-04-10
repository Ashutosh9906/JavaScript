const checkBox = document.getElementById("checkBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const myButton = document.getElementById("myButton");
const subResult = document.getElementById("subResult");
const payementResult = document.getElementById("payementResult");

myButton.onclick = function(){
    if(checkBox.checked){
        subResult.textContent = 'You have subscribes to our channel';
    }
    else{
        subResult.textContent = "You have'nt subrcribed to our channel!";
    }

    if(visaBtn.checked){
        payementResult.textContent = "You are paying with VISA";
    }
    else if(masterCardBtn.checked){
        payementResult.textContent = "You are paying with MASTERCARD";
    }
    else if(payPalBtn.checked){
        payementResult.textContent = "You are paying with PAYPAL";
    }
    else{
        payementResult.textContent = "You must select a payament type!";
    }
}