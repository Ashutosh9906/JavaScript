function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImage = document.getElementById("diceImage");
    const values = [];
    const images = [];
    let sum = 0;
    
    for(let i=0; i<numOfDice; i++){
        const value = Math.floor(Math.random() *6) + 1;
        values.push(value);
        images.push(`<img src="dice_images/dice_${value}.png">`);
    }

    for(let i=0; i<values.length ; i++){
        sum += Number(values[i]);
    }

    diceResult.innerHTML = `Dice: ${values.join(', ')} <br> Sum: ${sum}`;
    diceImage.innerHTML = images.join('');

}
