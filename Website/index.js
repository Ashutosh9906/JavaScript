const fruits = document.querySelectorAll("ul")

// fruits[0].style.backgroundColor = "red";
// console.log(fruits);
// Or we can use forEach() as it has built in methods

fruits.forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
})