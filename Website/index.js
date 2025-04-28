try{
    const divident = Number(window.prompt("Enter a divident: "));
    const divisor = Number(window.prompt("Enter a divisor: "));

    if(divisor == 0){
        throw new Error("You can't divide by zero!");
    }
    if(isNaN(divisor) || isNaN(divident)){
        throw new Error("Values must be a number!")
    }

    const result = divident/divisor;
    console.log(result);
}
catch(error){
    console.error(error);
}

console.log("You have reached the end!");