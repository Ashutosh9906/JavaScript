const fruits = [{name: "Apple", color: "red", calories: 95}, 
                {name: "Orange", color: "prange", calories: 45}, 
                {name: "Banana", color: "yellow", calories: 105}, 
                {name: "Coconut", color: "white", calories: 25}, 
                {name: "Pineapple", color: "yellow", calories: 37}]

fruits.push({name: "Grapes", color: "Green", calories: 62})
//Also can be used for pop() to remove the last object

// fruits.splice(1, 2)

// console.log(fruits) //arrayname[index].name_propert(ofObject)

// fruits.forEach(fruit => console.log(fruit.name))

// const fruitsName = fruits.map(fruit => fruit.name); //return name of fruits
// const fruitColor = fruits.map(fruit => fruit.color);
// console.log(fruitsName);
// console.log(fruitColor);

// const yellowFruits = fruits.filter(fruit => fruit.color === "yellow"); //return the object of array having color "yellow"
// console.log(yellowFruits);

const maxFruits = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max); //return the object of array having highest amount of calories
console.log(maxFruits);