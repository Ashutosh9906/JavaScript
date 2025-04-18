function openFridge(...foods){ //used rest parameter to combine all the food into one single foods
    console.log(foods); // -> "Vada Pav", "Dosa", "Samosa", "Puran Poli", "Varan Bhat"
    console.log(...foods); //This is spread operator to unpack the array
    // -> Vada Pav Dosa Samosa Puran Poli Varan Bhat
}

let food1 = "Vada Pav";
let food2 = "Dosa";
let food3 = "Samosa";
let food4 = "Puran Poli";
let food5 = "Varan Bhat";

openFridge(food1, food2, food3, food4, food5);