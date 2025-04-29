# JAVASCRIPT NOTES

## Table of Content
- [JAVASCRIPT NOTES](#javascript-notes)
  - [Table of Content](#table-of-content)
  - [0. Extra\`s](#0-extras)
  - [1. Variables](#1-variables)
  - [2. Arithmatic operator](#2-arithmatic-operator)
  - [3. Accept user input](#3-accept-user-input)
  - [4. Type Conversion](#4-type-conversion)
  - [5. Declaring Constant](#5-declaring-constant)
  - [6. Math Library](#6-math-library)
  - [7. Random Number Generator](#7-random-number-generator)
  - [8.ternary operator](#8ternary-operator)
  - [9. Switch](#9-switch)
  - [10. String Methods](#10-string-methods)
  - [11. String slicing](#11-string-slicing)
  - [12. Method Chaining](#12-method-chaining)
  - [13. Operators](#13-operators)
  - [14. Function](#14-function)
  - [15. Variablr Scope](#15-variablr-scope)
  - [16. Arrays](#16-arrays)
  - [17. Spread Operator](#17-spread-operator)
  - [18. Rest parameters](#18-rest-parameters)
  - [19. CallBacks](#19-callbacks)
  - [20. ForEach() loop](#20-foreach-loop)
  - [21. Map() method](#21-map-method)
  - [22. Filter() method](#22-filter-method)
  - [23. reduce() method](#23-reduce-method)
  - [24. Function expression](#24-function-expression)
  - [25. Arrow functions](#25-arrow-functions)
  - [26. Javascript objects](#26-javascript-objects)
  - [27. this keyword](#27-this-keyword)
  - [28. Constructor](#28-constructor)
  - [29. Classes](#29-classes)
  - [30. STATIC keyword](#30-static-keyword)
  - [31. Inheritance](#31-inheritance)
  - [32. super Keyword](#32-super-keyword)
  - [33. getters, setters](#33-getters-setters)
  - [34. Destructuring](#34-destructuring)
  - [35. Nested Objects](#35-nested-objects)
  - [36. Array objects](#36-array-objects)
  - [37. Sort()](#37-sort)
  - [38. Shuffle an array](#38-shuffle-an-array)
  - [39. Date objects](#39-date-objects)
  - [40. Closures](#40-closures)
  - [41. setTimeout()](#41-settimeout)
  - [42. ES6 Module](#42-es6-module)
  - [43. asynchronous code](#43-asynchronous-code)
  - [44. Errors](#44-errors)
  - [45. DOM](#45-dom)
  - [46. Element selectors](#46-element-selectors)
    - [1. document.getElementById()](#1-documentgetelementbyid)
    - [2. document.getElementsClassName()](#2-documentgetelementsclassname)
    - [3. document.getElementByTagName()](#3-documentgetelementbytagname)
    - [4. document.querySelector()](#4-documentqueryselector)
    - [5. document.querySelectorAll()](#5-documentqueryselectorall)
  - [47. DOM Navigation](#47-dom-navigation)
    - [1. .firstElementChild](#1-firstelementchild)
    - [2. lastElementChild](#2-lastelementchild)
    - [3. .nextElementChild](#3-nextelementchild)
    - [4. .previousElementChild](#4-previouselementchild)
    - [5. .parentElement](#5-parentelement)
    - [6. .children](#6-children)
  - [48. Add \& change HTML](#48-add--change-html)

## 0. Extra`s
```javascript
    //This is used to add any pop up to the website 
    document.getElementById("MyH1").textContent = `Hello`;
    document.getElementById("MyP").textContent = 'I love pizza';

    // using innerHTMl we can insert html through javascript
    document.getElementById("MyH").innerHTML = `<p>brr brr patapim</p>`

    //bit lagg to compute a specific task, implmenting a delay
    hello();
    goodBye();

    function hello(){
        setTimeout(function(){
            console.log("GoodBye!"); //This line wil be displaced after 3000ms
        }, 3000);
    }

    function goodBye(){
        console.log("Hello!");
    }

    //To give any number a precission of 'x' digit after decimal
    let num = 15;
    console.log(`$${num.toFixed(2)}`) //-> 15.00

    //dir
    console.dir(document);
    //This will list all of the propert of the object (documetn)
```
- [To Table of Content](#table-of-content)

## 1. Variables 
- A container that stores the value, Behaves as if it were the value it contains
```javascript
    let x;      //Declaration
    x = 100;   //assignment

    let age = 5;
    let price = 5.6;
    let gpa = 9.1;

    //use ${variable} to put the value of variable in the sentence
    //use typeof to find data type of the variable
    console.log(typeof age);   // number
    console.log(`I am ${age} old`);

    let firstname = "Ashutosh";
    let favouriteFood = "PuranPoli";
    let gmail = "ashutoshgandule!@gmail.com";

    console.log(typeof gmail);   //string
    console.log(`My name is ${firstname}`)

    let online = true;
    let forSale = true;
    let isStudent = false;

    console.log(typeof online); //boolean
    console.log(`Are you online ${online}`);

    let name = "Ashutosh";
    let age = 18;
    let isStudent = false;

    document.getElementById(`P1`).textContent = `My name is ${name}`;
    document.getElementById(`P2`).textContent = `I am ${age} years old`;
    document.getElementById(`P3`).textContent = `Am i a student ${isStudent}`;
```
- [To Table of Content](#table-of-content)

## 2. Arithmatic operator
- operands(values, variables, etc)
- operands(+, -, *, /)
- ex. 11 = x +5
```javascript
let student = 30;

student += 1;
student -= 1;
student *= 2;
student /= 2;
student **= 2; //used to power 30 * 30
student %= 2;

/*opertator precedence
1. Paranthesis ()
2. Exponents
3. Multiplication & Division & Modulo
4. Addition & Substraction*/

let result = 1 + 2 * 3 + 4 ** 2;
``` 
- [To Table of Content](#table-of-content)

## 3. Accept user input
- 1. Easy way = window.prompt
- 2. PROFFESSIONAL WAY = HTML textbox
```javascript
    //Easy Way
    let username;
    username = window.prompt('What`s your name : '); //we get an pop up to enter the name
    console.log(username);

    //Proffesional Way
    let username;
    document.getElementById(`MyButton`).onclick = function() {
        username = document.getElementById(`MyInput`).value; //getting the vlaue from the textbox
        document.getElementById(`MyH1`).textContent = `Hello ${username}`;
    }
``` 
```HTML
    //HTML Code
    <h1 id="MyH1">Welcome</h1>
    <label for="input">Username:</label>
    <input type="text" id="MyInput"><br>
    <button id="MyButton">Subimt</button>
```
- [To Table of Content](#table-of-content)

## 4. Type Conversion
- usualy when we declare any variable it is an string datatype
```javascript
    let age = window.prompt("How old are you");
    age = Number(age); //without this line age will be treated as string 
    age += 1;          //if age = 25, output would be 251 
    console.log(age, typeof(age));

    age = Stirng(age);   //More example
    age = Boolean(age);
```
- [To Table of Content](#table-of-content)

## 5. Declaring Constant
- to make any variable const replace `let` with `const` and make the name of variable uppercase
```javascript
//To find Circumference of circle
const PI = 3.145916;
let radius;
let circumference;

document.getElementById("MyButton").onclick = function(){
    radius = document.getElementById("MyText").value;
    radius = Number(radius);
    circumference = 2*PI*radius;
    document.getElementById("MyH3").textContent = circumference + "cm";
}
```
```HTML
    <h1 id="MyH1">Enter the radius of circle: </h1>
    <label for="input">Radius: </label>
    <input type="text" id="MyText"><br><br>
    <button id="MyButton">SUBMIT</button>
    <h3 id="MyH3"></h3>
```
- [To Table of Content](#table-of-content)

## 6. Math Library
- built in object that provides a collection of properties and methods
```javascript
console.log(Math.PI) //Gives the value of universal constant PI -> 3.1415926535
console.log(Math.E) //Value universal constant e -> 2.71828181

z = Math.round(x) //roundoff the variable x
z = Math.floor(x) //floor the roundof 3.21 -> 3
z = Math.ceil(x)  //ceil the roundof 3.21 -> 4
z = Math.trunc(x)  //Truncate the value after the decimal 3.21 -> 3
z = Math.pow(x, y) //X to the power y
z = Math.sqrt(x) //square root of the variable x
z = Math.log(x) //log to the base 10 of z log(x)
z = Math.sin(x) //Trignometric x is in radian
z = Math.cos(x)
z = Math.tan(x)
z = Math.abs(x) //Modulus of the variable x -3.21 -> 3.21
z = Math.sign(x) //sign of x -3.21 -> -1, 3.21 -> +1, 0 -> 0

let max = Math.max(x, y, z) //Greatest of given variable
let min = Math.min(x, y, z) //Smallest of given variable
``` 
- [To Table of Content](#table-of-content)

## 7. Random Number Generator
- To generate a random number we use `Math` function 
- `Math` contain random number generator  `Math.random()` it will give random nunmber from 0 to 1
```javascript
const max = 100;
const min = 50;

let random = Math.floor(Math.random() * (max -min)) + min;

console.log(random);
``` 
- [To Table of Content](#table-of-content)

## 8.ternary operator
- A shortcut to `if{}` and `else{}` statements
- Help'a to assign a variable based on condition
- condition ? codeIfTrue : codeIfFalse;
```javascript
let purchaseamount = 125;
let discount = purchaseamount > 100 ? 10 : 0;
console.log(`Your total is $${purchaseamount - purchaseamount * (discount/100)}`);
```     
- [To Table of Content](#table-of-content)

## 9. Switch
- can be an efficient replacement to many else if statements
```javascript
let testscore = 33;
let lettergrade;

switch(true){
    case testscore>=90 :
        lettergrade = 'A';
        break;
    case testscore>=80 :
        lettergrade = 'B';
        break;
    case testscore>=70 :
        lettergrade = 'C';
        break;
    case testscore>=60 :
        lettergrade = 'D';
        break;
}
console.log(lettergrade);
```
- [To Table of Content](#table-of-content) 

## 10. String Methods
- Allows you to manipulate and work with text(String)
```javascript
let username = "BroCode";

username.charAt(0); //-> B
username.indexOf("o"); //returns the index of the first occurence of the charachter -> 2
username.lastIndexOf("o"); //returs the index of the last occurence of th echarachter -> 4
username.length; //gives the length of the variable -> 7

let username = "   BroCode";
username.trim(); //trims all the whitespaces in the string -> "BroCode"

username.toUpperCase(); //all charachter to uppercase -> "BROCODE"
username.toLowerCase(); //all charachter to lowercse -> "brocode"
username.repeat(3); //repeats the string times the number eithin the parenthisis -> BrocodeBrocodeBrocode

let username = "  BroCode";
username.startsWith("  "); //returns an boolean value -> true
username.endsWith("a"); //returns an booleaan value -> false

let username = "Bro Code";
username.includes(" "); //returns an boolean value if string include the charachter within parenthesis -> true

let phoneNumber = "123-456-7890";
phoneNUmber.replaceAll("-", " "); //used to repplace all charchter before the semi colon in the string with the charachter after the semi colon -> "123 456 7890"
phoneNumber.padStart(15, "0"); //first No signifys the number of charachter string must have, second numer is included to the string at the start until the length of string reaches it's desire length mentioned in the first No -> 000123-456-7890
phoneNumber.padEnd(15, "0"); //first No signifys the number of charachter string must have, second numer is included to the string at the end until the length of string reaches it's desire length mentioned in the first No -> 000123-456-7890
```
- [To Table of Content](#table-of-content)

## 11. String slicing
- creating a substring from a portion of another string
- `string.slice(start, end);`
```javascript
const email = "ashutosh@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1); //in this case without end it will work
//we may also use the index in negative numers email.slice(-1, -2) -> m

console.log(username);
console.log(extension);
```
- [To Table of Content](#table-of-content)

## 12. Method Chaining
- Insted of writing several line of to accomplish a set of condition we can do `Method chaining`
- `Method Chaining` means insted of making extra variables conducting set of `methods` accomplish them all in one line
- calling one method after the another in one continous line of code    
```javascript
let username = window.prompt("Enter your username :");

//without method chaining
username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extra  = username.slice(1);
extra = extra.toLowerCase();
username = letter + extra;

console.log(username);

//using method chaining
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username);
```
- [To Table of Content](#table-of-content)

## 13. Operators
- ` = ` assignment operator
- ` == ` comparison operator (compares if values are equal)
- ` === ` strict equality operator (compare if values & datatypes are equal)
- ` != ` inequality operator
- ` !== ` strictly inequality operator
```javascript
const PI = 3.1415;
if(PI === "3.1415"){ //false it compares datatype aswell as (PI) is 'Number' and "3.1415" is string same explanation for strictly inequality operator
    console.log("This is PI");
}
else{
    console.log("This is NOT PI");
}
``` 
- [To Table of Content](#table-of-content)

## 14. Function
- A section of reusable code
- Declare code once, use it whenever you want
- Call the function to execute the code
- `SEQUENCE` does matter while passing the arguments
```javascript
function happyBirthday(username, age){
    console.log(`Happ birthday ${username}`);
    console.log(`You are ${age} years old`)
}

happyBirthday("Ashutosh", 18);
happyBirthday("Prathamesh", 20);

//using return keyword
function isValidEmail(email){

    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}

console.log(isValidEmail("ashutishgandulegmail.com")); //False
``` 
- [To Table of Content](#table-of-content)

## 15. Variablr Scope
- where an element is recognized and accessible `LOCAL vs GLOBAL`
- Any variable declared under a `Function`, `Set of curly brases`
- If there is choice between `LOCAL` and `GLOBAL` more priority is given to local variablea 
```javascript
function function1(){
    let x = 5; //Local
    console.log(x);
}

function function2(){
    let x = 9; //Local
    console.log(x);
}

function1(); // -> 5

//Global
let x = 3;

function function1(){
    console.log(x);
}
function function2(){
    console.log(x);
}

function1(); //3
function2(); //3
``` 
- [To Table of Content](#table-of-content)

## 16. Arrays
- A variable like structure that can hold more than 1 value.
```javascript
let fruits = {"Mango", "Orange", "Apple"};

fruits.push("Coconut") //pushes an element to the end of the array
fruits.pop(); //removes the last element from the array
fruits.unshift("Apple"); //push the element at the start shifts the array forward
fruits.shift(); //to remove the element from the begining of array
fruits.length(); //passes No of elements in the array (Size of array)
fruits.indexof("Apple"); //passes endex of written element -> 2, if the element does'nt exist it passes -1
fruits.sort(); //sorts the element of array in Alphabetical order
fruits.sort().reverse(); //sorts the element of array in Alphabetical order and then reverse the rder

console.log(fruits[0]); //Mango
console.log(fruits[1]); //Orange
console.log(fruits[2]); //Apple

for(let fruit of fruits){   //Diff way to access element of array fruits
    console.log(fruit);     //name of variable(fruit) can be changed as per need
}
``` 
- [To Table of Content](#table-of-content)

## 17. Spread Operator
- It is represented as `...`.
- `...` allows an iterable such as an array or string to be extended into seperate element (Unpack the elements)
```javascript
let number = [1, 2, 3, 4, 5];

let max = Math.max(...number); //without (...) output is NAN, using (...) we unpack all the  
let min = Math.min(...number); //elements of the array like removing all elements from the box

console.log(max);
console.log(min);

//can also used in case of string 
let username = "Vada pav";
let letters = [...username].join('-'); //leterrs seperated 
//using join('-') it will join the seperated string with -

console.log(letters);

//Can make a copy of an array, or combine two array
let fruits = ["Apple", "Orange", "Coconut"];
let snacks = ["Vada pav", "Samosa", "Kachori"];

let newFruits = [...fruits, ...snacks, "Eggs", "Milks"];

console.log(newFruits);
``` 
- [To Table of Content](#table-of-content)

## 18. Rest parameters
- `...rest` allowa a funnction work wit a variable number of arguments by bundling them into an array
- `spread` -> expands an array into seperate elements
- `rest` -> bundles seperate elements into array
```javascript
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
``` 
- [To Table of Content](#table-of-content)

## 19. CallBacks
- A function that is passed as an argument to another function
- Used to handle `asynchronous` operations:
  1. Reading a file
  2. Network Request
  3. Interacting with Databases
- It simpley is "Hey when you're done, call this next";
- It used to set a flow of function to ensure that the following function executes after the desired functionn
```javascript
sum(displayConsole, 1, 2)

function sum(callback, x, y){
    let result = x + y;
    callback(result);
}

function displayConsole(result){
    console.log(result);
}
```
- [To Table of Content](#table-of-content)

## 20. ForEach() loop
- Method used to iterate over the elements of an array and apply a specified function `(callbacks)` to each element
- Example <`array.forEach(callback)`> element, index, array are provided
```javascript
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(power);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}
function power(element, index, array){
    array[index] = Math.pow(element, 2);
}
function display(element){
    console.log(element);// 1 2 3 4 5
}
```
- [To Table of Content](#table-of-content)

## 21. Map() method
- Accepts a callback and applies that function to each element of an array, then return a new array.
- The key difference between `forEach` and `map` is forEach changes the orignal array with the new altered array where as map does'nt change the orignal array
- After the alterations using `map` we still can access our orignal array
- Map provides only `element`
```javascript
//example 1
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);
console.log(squares);

function square(element){
    return Math.pow(element, 2);
}

//example 2
const dates = ["2022-1-10", "2023-2-20", "2024-3-30"];
const formatedDates = dates.map(format);
console.log(formatedDates);

function format(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
```  
- [To Table of Content](#table-of-content)

## 22. Filter() method
- Creates an new array by filtering out elements
- It includes the element in the following array if it passes the condition(True);
```javascript
const number = [1, 2, 3, 4, 5, 6, 7];
const evenNums = number.filter(isEven); //alters array according if true
console.log(evenNums);

function isEven(element){
    return element%2 === 0; //return an boolean value true/false
}
``` 
- [To Table of Content](#table-of-content)

## 23. reduce() method
- reduce the element of an array to a single value
```javascript
const prices = [5, 35, 10, 45, 8];
const total = prices.reduce(sum);
console.log(`$${total.toFixed(2)}`);

function sum(accumulator, element){
    return accumulator + element;
}
```
- **Explanation** ----->
  1. Accumulator -> 0, element -> 5, return -> 5
  2. Accumulator -> 5, element -> 35, return -> 40
  3. Accumulator -> 40, element -> 10, return -> 50
  4. Accumulator -> 50, element -> 45, return -> 95
  5. Accumulator -> 95, element -> 8, return -> 103 **total** -> 103.00
- [To Table of Content](#table-of-content)

## 24. Function expression
- `Function expression` - A way to define function as values or variable
- `Function declaration` - define a reusable block of code that performs a specific task
- Callback is `asynchronous` operation
- Higher order function
- Closures
- Event Listners
```javascript
setTimeout(function(){ 
    console.log("Hello")
}, 3000);
``` 
- In above example we have an hole function `function()` as an argument which is treated an an value to the function, we currently giving an lag to thee function execution
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});
console.log(squares);
``` 
- In above example insted of give call to functio we directly passed the argument as the function itself
- One of the benifit of using this is we are not polutin the global namespace
- [To Table of Content](#table-of-content)
- 
## 25. Arrow functions
- A consice way to write function expression good for simple functions that you use only once 
- syntax :(parameters) => some code
```javascript
const hello = (name, age) => {console.log(`Hello ${name}`)
                              console.log(`You are ${age} years old`)};

hello("Ashu", 18);
``` 
- No need tu declare a new function
- Use when you are going to call the functio just once or twice 
- Insted of `Function expression` used in above topic we can
```javascript
setTimeout( () => console.log("Hello"), 3000); //Just simple as that
``` 
- Also used in methods like .map(), .reduce(), etc
```javascript
const numbers = [1, 2, 3, 4, 5]
const squares = numbers.map( (element) => Math.pow(element, 2));

console.log(squares);
``` 
- [To Table of Content](#table-of-content)
- 
## 26. Javascript objects
- A collection of related properties and/or methods, Can represent real world objects (people, products, places)
- object = {key:value, function()}
- object can't have same name
```javascript
const person = { //here person is an object
    firstname: "Ashutosh",
    lastname: "Gandule",
    age: "48",
    isEmployed: false,
    sayHello: function(){console.log("Hi i am Ashutosh")},
}

person.sayHello();
console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
console.log(person.isEmployed);
```   
- [To Table of Content](#table-of-content)

## 27. this keyword
- Reference to the object where `this` is used
- The object depends on the immediate context
- ex. `person.name = this.name`
```javascript
const person = { //here person is an object
    firstname: "Ashutosh",
    sayHello: function(){console.log(`Hi i am ${this.firstname}`)},
}

person.sayHello();
``` 
- To access the property of the object in it self we use this.key `this.firstname`
- This will also work same for object.key `person.firstname` as well
```javascript 
console.log(this); 
```
- This will return an window object in the whole tab in which we are and it's properties
- `this` does'nt work for `Arrow function`
- [To Table of Content](#table-of-content)

## 28. Constructor
- Special method for defining the properties and method of objects
- To construct an object automatically all we have to do is to pass in some unique data to construct th object
```javascript
function car(make, model, year, color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function(){console.log(`You are a driving ${this.model}`)}
}

const car1 = new car("Ford", "Mustang", 1969, "red");
const car2 = new car("Dodge", "Challenger", 2024, "Blue");
// use 'new' keyword to assign values to keyobject before call

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
car1.drive();

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
car2.drive();
``` 
- [To Table of Content](#table-of-content)

## 29. Classes
- (ES6 feature) provides a more structured and more cleaner way to work with object compared to traditional constructor functions
- ex. static keyword, encapsulation, inheritance
```javascript
class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){   //No need to use functio keyword inside the class
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}
const salesTax = 0.05;

const product1 = new Product("shirt", 19.99);
const product2 = new Product("pant", 22.5);
// Constructor will be called automatically just pass the argument

product1.displayProduct();
const total1 = product1.calculateTotal(salesTax);
console.log(`Total price(including tax) is: $${total1.toFixed(2)}`);

product2.displayProduct();
const total2 = product1.calculateTotal(salesTax);
console.log(`Total price(including tax) is: $${total2.toFixed(2)}`);
```  
- [To Table of Content](#table-of-content)

## 30. STATIC keyword
- Ketword that defines properties or method  that belong to a class itself rather than the object created from that class
- Class owns anything static, not the object
```javascript
class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius; 
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
```
- Another example using constructor as well 
```javascript
class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUsercount(){
        console.log(`There are ${User.userCount} users online`);
    }

    sayHello(){
        console.log(`Hi, My name is ${this.username}`);
    }
}

const user1 = new User("Ashutosh");
const user2 = new User("Prathamesh");

user1.sayHello();
user2.sayHello();
User.getUsercount();
```
- [To Table of Content](#table-of-content)

## 31. Inheritance
- Allows a new class to inherit properties and methods of existing class `(parent -> child)` helps with code reusability
- We use `extend` keyword infront of the child class to inherit the property of the parent class written ahead of it
```javascript
class animal{
    isAlive = true;

    eat(){
        console.log(`This is ${this.name} is eating`);
    }
    sleep(){
        console.log(`This is ${this.name} is sleeping`);
    }
}
class rabbit extends animal{
    name = "rabbit";
}
class fish extends animal{
    name = "fish";
}
class hawk extends animal{
    name = "hawk";
}

const rabbits = new rabbit();
const fishs = new fish();
const hawks = new hawk();

console.log(rabbits.isAlive);
rabbits.eat();
fishs.eat()
hawks.eat()
```
- [To Table of Content](#table-of-content)  

## 32. super Keyword
- Keyword is used in classes to call the constructor or access the properties and methods of a parent (superclass)
- (this -> this object) same like (super -> the parent)
```javascript
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}mph`)
    }
}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`)
        super.move(this.runSpeed);
    }
}
class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }

    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}
class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        console.log(`This ${this.name} can fly`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit", 10, 25);
const fish = new Fish("fish", 25, 56);
const hawk = new Hawk("hawk", 18, 70);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed)

rabbit.run();
fish.swim();
hawk.fly();

//Before using this keyword in child class we mush call the constructor of the parent class
//Using Super it will be more code reusability
``` 
- [To Table of Content](#table-of-content)

## 33. getters, setters
- `getter` -> Special method that makes the property readable
- `setter` -> Special methot that makes the property writable
- Validate and modify a value when reading/writing a property
```javascript
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth; //here this_width implies that this is an private propert
        }
        else{
            console.error("Width must be positive number!");
        }
    }

    set height(newHeight){
        if(newHeight > 0){
            this._height = newHeight; //here this_width implies that this is an private propert
        }
        else{
            console.error("Height must be positive number!");
        }
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }

    get area(){
        return this._width * this._height;
    }
}
const rectangle = new Rectangle(3, 4);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
```  
- While assigning values initialy to an object we can got through setters to go through some validation
- [To Table of Content](#table-of-content) 

## 34. Destructuring
- Extracts value from arrays and objects, then assign them to variables in convinent way
- `[]` -> To perform array destruction
- `{}` -> To perform object destructing
```javascript
let a = 1;
let b = 2;

[a, b] = [b, a]; //marked

console.log(a);
console.log(b);
```
- -------> Example 1(Swapping of two numbers)
- On the L.H.S of equal to we are performing `destructing`
- On the R.H.S of equal to we are performing `Creation of new array`
```javascript
let colors = ["Red", "Green", "Blue", "Black", "White"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);
``` 
- -------> Example 2(Swapping elements of array)
- Works same like abbove explanantion
- It all works like swap colors[0] <---> colors[4] & colors[4] <---> colors[0]
- First element of R.H.S. will swap with first element of L.H.s and vice versa
```javascript
let colors = ["Red", "Green", "Blue", "Black", "White"];

const [firstColor, secondColor, thirdColor, ...restColor] = colors

console.log(firstColor); //red
console.log(secondColor); //green
console.log(thirdColor); //blue
console.log(restColor); //["bleck", "white"]
``` 
- -------> Example 3(Assign array elements to variable)
- In above example "firstColor", "secondColor" and "thirdColor" are variables
- "restColor" is an array which stores colors rest then by storing in variables 
```javascript
const person1 = {
    firstName : "Ashutosh",
    lastName : "Gandule",
    age : 18,
}

const {firstName, lastName, age, job="Unemployed"} = person1; //We can set default value while extracting like used here in case of "job"

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
``` 
- -------> Example 4(Extracting values from an object)
- The name of variable in {} must match to name of variable in the object
```javascript
function displayPerson({firstName, lastName, age, job="Unemployed"}){
    console.log(`Name: ${firstName} ${lastName}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}

const person1 = {
    firstName : "Ashutosh",
    lastName : "Gandule",
    age : 18,
}

displayPerson(person1);
``` 
- ------> Examlpe 5(Destructuring in Function Parameters)
- [To Table of Content](#table-of-content) 

## 35. Nested Objects
- Objects inside of another objects, Allow you to represent more complex datastructure
- child object is enclosed by an parent object
- E.x. -> Person{Address{}, ContactInfo{}}
```javascript
const person = {
    firstName : "Spongebob",
    lastName : "Squarepants",
    age : 24,
    isStudent : true,
    hobbies : ["Karate", "Cooking", "JellyFishing"],
    address : {
        street : "124 consch st.",
        city : "Bikini Bottom",
        country : "Int. waters",
    }
}

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies[1]);
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.country);

//We can also loop through the objects
for (const property in person.address){
    console.log(person.address[property]) //124 consch st. Bikini Bottom Int. waters
}

```
- [To Table of Content](#table-of-content)

## 36. Array objects
```javascript
const fruits = [{name: "Apple", color: "red", calories: 95}, 
                {name: "Orange", color: "prange", calories: 45}, 
                {name: "Banana", color: "yellow", calories: 105}, 
                {name: "Coconut", color: "white", calories: 25}, 
                {name: "Pineapple", color: "yellow", calories: 37}]

console.log(fruits[0].name) //arrayname[index].name_propert(ofObject)
```
- We can access each propert of object using the last line of code in the above block
```javascript
fruits.push({name: "Grapes", color: "Green", calories: 62})
//Also can be used for pop() to remove the last object
``` 
- We can add more objects to the array using `push` as well as delete the object using `pop`
```javascript
fruits.forEach(fruit => console.log(fruit.name))
```  
- We can also access each property using `forEach loop`
```javascript
const fruitsName = fruits.map(fruit => fruit.name); //return name of fruits
const fruitColor = fruits.map(fruit => fruit.color);
console.log(fruitsName);
console.log(fruitColor);
``` 
- Using `map` we can create an seperate array of specific propert of the object
```javascript
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow"); //return the object of array having color "yellow"
console.log(yellowFruits);
``` 
- Using `filter` we can create an array of proprty of object which pass the condition provided
```javascript
const maxFruits = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max); //return the object of array having highest amount of calories
console.log(maxFruits);
``` 
- Uisng `reduce` we can create an array which will pass condition, a bit same like `filter`
- [To Table of Content](#table-of-content)

## 37. Sort()
- Method to sort element of an array in a place
- Sort element as string in `Lexicographic` order, not `alphabetical`
- `Lexicographic` -> (alphabet, number, symbol) as string
```javascript
const numbers = [1, 10, 4, 5, 6 ,2, 45, 76, 55];

numbers.sort();
console.log(numbers); //OUTPUT -> [1, 10, 2, 4, 45, 5, 55, 6, 76]
``` 
- Example of sorting lexicographically
```javascript
const numbers = [1, 10, 4, 5, 6 ,2, 45, 76, 55];

numbers.sort((a, b) => a -b); //will return a -ve, 0, +ve value
console.log(numbers); //[1, 10, 2, 4, 45, 5, 55, 6, 76]
``` 
- We will examine two contigious values
- using `a - b` the sort method will be carries accordingly ans will sort the array `Ascendingly`
- For sorting the `Descendingly` use `b - a` insted of `a - b`
```javascript
const people = [{name: "Spongebob", age: 30, gpa: 3.0}, 
                {name: "Patrick", age: 37, gpa: 2.0}, 
                {name: "Squidward", age: 50, gpa: 4.0}, 
                {name: "Sandy", age: 27, gpa: 2.7}]

const peoples = people.sort((a, b) => a.name.localeCompare(b.name));
console.log(peoples)
``` 
- To sort the name in an array of an object we can use `a.name.localeCompare(b.name)` this will sort the name `Lexicographly`
- For reverse sorting use `b.name.localeCompare(a.name)`
- Remaining sortinng will be smae as abive examples
- [To Table of Content](#table-of-content)

## 38. Shuffle an array 
- Shuffling the elements of an array using an dedicated function insted of `card.sort(() => Math.random() - 0.5)`
```javascript
const card = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 'J', 'Q', 'K']

shuffle(card);

console.log(card);

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));

        [array[i], array[random]] = [array[random], array[i]];
    }
}
``` 
- [To Table of Content](#table-of-content)


## 39. Date objects
- Object that contains the values that represent date and times
- These objects can be changed and formated
```javascript
const date = new Date();
console.log(date);
```
- This will an output of `Sat Apr 26 2025 16:46:05 GMT+0530 (India Standard Time)`
- Format of Date is as follows -> `Date(year, month, day, hour, minute, second, ms)`
- Here everything is normal except for year "0 -> January" and further vice versa
```javascript
const date = new Date("2024-01-02T12:00:00Z");
console.log(date);
``` 
- Gives an output like -> Tue Jan 02 2024 17:30:00 GMT+0530 (India Standard Time)
```javascript
const date = new Date(170000000000); //Date(0) -> Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
console.log(date);
``` 
- When we pass `170000000000` we tell the date() to give an date an time which is 170000000000ms ahead of `Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)`
```javascript
const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const seconds = date.getSeconds();
const dayOfWeek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minute);
console.log(seconds);
console.log(dayOfWeek);
``` 
- This block of code will an specific segrigated date time year etc
- We can also set the time using `date.set(parameter)(time wanted to be passed)`
```javascript
const date1 = new Date(2024-12-31);
const date2 = new Date(2023-1-1);

if(date1 > date2){
    console.log("Happy New Year")
}
```
- We can also compare two dates
- [To Table of Content](#table-of-content)

## 40. Closures
- A function defined inside of another function, the inner function has access to variables and scope of outer function
- Allow for private variables and state maintenance
- Use frequently in JS frameworks: React, vue, Angular
```javascript
function createCounter(){
    let count = 0; //Act's like an private data, can't be accessed or changed outside the function

    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
        return count;
    }

    return {increment, getCount}; //returning an object which has reference to the functions 
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();
console.log(counter.count); //undefined
console.log(`The current count is ${counter.getCount()}`) //Will print count
```      
- [TO Table of Content](#table-of-content)

## 41. setTimeout()
- Function in javascript that allowss you to schedule the execution of a function after a moment of time(millisecond)
- Times are approximate (Varies based on the workload of javascript runtime env)
- setTimeout(callBack, delay)
- clearTimeout(timeoutId) = can cancel a timeout before it triggers
```javascript
const timeoutId = setTimeout(() => window.alert("Hello"), 3000);
clearTimeout(timeoutId); //this line will stop the execution of above line
```  
- [To Table of Content](#table-of-content)

## 42. ES6 Module
- An external file that contains reusable code that can imported into other javascript file
- Write reusable code for many differnt apps
- Can contains variables, classes, functions, ....and more
- Introducesd as an part of ECMSScript 2015 update
```javascript
<script type="module" src="index.js"></script>
``` 
- Insted of only script we have to add `type` as well to inport modules externally
- To import this `ES6` modules we have prefix all the variables, functions, ... with `export`
```javascript
//mathUtil.js file (ES6 Module)
export const PI = 3.141659;

export function getCircumference(radius){
    return 2 * PI * radius;
}

export function getArea(radius){
    return PI * radius * radius;
}

export function getVolume(radius){
    return (4/3) * PI * radius * radius;
}
```
```javascript
//index.js file
import {PI, getArea, getVolume, getCircumference} from './mathUtil.js'; //here we use object destructuring

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`);
``` 
- [To Table of Content](#table-of-content)

## 43. asynchronous code
- `synchronous` -> Executes line by line consecutively in a sequentialy manner
- A code that waits for an operation to complete
- `asynchronous` -> Allows multiple operations to be performed concurrently withour waiting 
- Doesn't block the execution flow and allows the program to continue
- (I/O operations, network request, fetching data,)
- Handeled with: Callbacks, promises, Async/Awaits
```javascript
setTimeout(() => console.log("Task 1"), 3000) 
console.log("Task 2");
console.log("Task 3");
console.log("Task 4");
```  
- We can use `setTimeout()` function to add delay to print "Task 1" which asynchronous
```javascript
function func1(callback){
    setTimeout(() => {console.log("Task 1");
                      callback()}, 3000)
}
function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}
func1(func2);
``` 
- We can do the same thing using function callbacks

## 44. Errors
- `error` -> An object that is created to represent a problem that occurs, Occur often when taking user inputs or establishing a connection
- `try { }` -> Enclose code that might potentially cause an error
- `catch { }` -> Catch and handle any thrown Errors from try { }
- `finnaly { }` -> (optional) Always executes. Used mostly for clean up, E.x. close files, close connection, release resources
- Errors can be generated for all sorts of issues like `NETWORK ERROR`, `PROMISE REJECTION`, `SECURITY ERROR`
```javascript
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
//Above line will always be executed ass we have managed to handle error if any occur 
``` 
- [To Table of Content](#table-of-content)

## 45. DOM
- Object that represents the page you see in the web browser and provides you with an API to interact with it
- Web broweser constructs the DOM when it loads as HTML document, and structures all the elements in a tree-like representation
- Javascript can access the DOM to dynamically change the content, structure, and style of thw web page
```javascript
const username = "";
const welcomeMsg = document.getElementById("welcomeMsg"); //getElementById("") was the API key to access DOM

welcomeMsg.textContent += username === "" ? ' Guest' : username;
``` 
- [TO Table of Content](#table-of-content)

## 46. Element selectors
- Methods used to target and manipulate HTML elements 
- They allow you to select one or multiple HTML elements from the `DOM` (Document Object Model)
- Some Element selectors
  1. document.getElementById()       //ELEMENT OR NULL
  2. document.getElementsClassName() //HTML COLLECTION
  3. document.getElementByTagName()  //HTML COLLECTION
  4. document.querySelector()        //ELEMENT OR NULL
  5. document.querySelectorAll()     NODELIST
### 1. document.getElementById()
```javascript
const username = "";
const welcomeMsg = document.getElementById("welcomeMsg");

welcomeMsg.style.backgroundColor = "yellow";
welcomeMsg.style.textAlign = "center"

console.log(welcomeMsg); //This will give the h1 element with all the style applied on it
```
- If we misspelled the id it return `Null` or the `Element` itself
### 2. document.getElementsClassName()
- It will return `HTML COLLECTION`
- `HTML COLLECTION` are live they update automaticilay in the `DOM`
- It is bit similar to array but technically it's not the same
- `HTML COLLECTION` are iterable, can't use `forEach()`
- We can access elements of collection by using index NO
```javascript
const fruits = document.getElementsByClassName("fruits");

console.log(fruits);
//This will return an HTMl collection with all the elements having the class fruits
//All the elements are assigned a contigious number starting with 0

for(let fruit of fruits){
    fruit.style.backgroundColor = "yellow";
}
//This will iterate through all the class elements

Array.from(fruits).forEach(fruit => { //thus will return an array 
    fruit.style.backgroundColor = "yellow"
})
//To use forEach method for fruits we first have to typecast fruits as an array
```
### 3. document.getElementByTagName()
- It act same as like of the above topic
```javascript
const h4Element = document.getElementsByTagName("h4");
const LiElements = document.getElementsByTagName("li")

console.log(h4Element);
//Works same as like it does to ByClassname

h4Element[0].style.backgroundColor = "hsl(0, 0%, 85%)";
h4Element[1].style.backgroundColor = "hsl(0, 0%, 85%)";
for(let LiElement of LiElements){
    LiElement.style.backgroundColor = "hsl(88, 100.00%, 50.00%)"
}
```
- we can typrcast the `h4Element` as an array to apply it functions like `forEach()` loop
### 4. document.querySelector()
- It return `ELEMENT OR NULL`
- It will return the first occurence of the element
- If no mathch found it return `NULL`
- We can also select an class using `.classname`
```javascript
let element = document.querySelector("ul")
element.style.backgroundColor = "yellow";
console.log(element);
```
### 5. document.querySelectorAll()
- This returns a `NODELIST`
- `NODELIST` is similar to `HTML COLLECTION` except it has builtin methods 
- `NODELIST` are statics, so they do not update automatically in the `DOM`
```javascript
const fruits = document.querySelectorAll("ul")

fruits[0].style.backgroundColor = "red";
console.log(fruits);
// Or we can use forEach() as it has built in methods

fruits.forEach(fruit => {
    fruit.style.backgroundColor = "yellow";
})
```
- [To Table of Content](#table-of-content)

## 47. DOM Navigation
- The process of navigating through structures of an HTML document using `javascript`
```html
    <ul id="fruits">     <!--parent -->
        <li>Apple</li>   <!--firstBorn-->
        <li>Orange</li>  <!--secondBorn-->
        <li>Coconut</li> <!--thirdBorn-->
    </ul>

    <ul id="Vagetables">
        <li>Onion</li>
        <li>Carrot</li>
        <li>potatoes</li>
    </ul>

    <ul id="desert">
        <li>cake</li>
        <li>pie</li>
        <li>ice cream</li>
    </ul>
```
- This is the `HTML` file which we are gonna try `DOM NAVIGATON`
- DOM NAVIGATION can be done using
  1. .firstElementChild
  2. .lastElementChild
  3. .nextElementSibling
  4. .previousElementSibling
  5. .parentElement
  6. .children
### 1. .firstElementChild
```javascript
const ulElement = document.querySelectorAll("ul");

ulElement.forEach(ulElements => {
    const firstChild = ulElements.firstElementChild;
    firstChild.style.backgroundColor = "yellow"
})
```
- Following code will set backgroundColor of firstChild of all ul element to yellow
### 2. lastElementChild
```javascript
const ulElement = document.querySelectorAll("ul");

ulElement.forEach(ulElements => {
    const firstChild = ulElements.lastElementChild;
    firstChild.style.backgroundColor = "yellow"
})
```
- Following code will set backgroundColor of lastChild of all ul element to yellow
### 3. .nextElementChild
- There will be i small change in HTML file we will be assigning id to each `li` element
```javascript
const element = document.getElementById("fruits");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "yellow"
```    
- If we choose an `ul` itself with it's id the imediate next `ul` will be highlighted
### 4. .previousElementChild
```javascript
const element = document.getElementById("desert");
const nextSibling = element.previousElementSibling;
nextSibling.style.backgroundColor = "yellow"
``` 
- If we choose an `ul` itself with it's id the imediate before `ul` will be highlighted
### 5. .parentElement
```javascript
const element = document.getElementById("pie");
const nextSibling = element.parentElement;
nextSibling.style.backgroundColor = "yellow"
``` 
- This will highlight the parent element of selected element
- In our case we have choosen `pie` of `desert` so entire desert ul will be highlighted
### 6. .children
```javascript
const element = document.getElementById("fruits");
const children = element.children;

Array.from(children).forEach(childrens => {
    childrens.style.backgroundColor = "yellow"
})
```
- As `.children` dont't have buitIn function we have to type cast it into array and use buildIn functions
- In above example we are highlighting the child of the ul fruits
- We can also access every child using index number
- [To Table of Content](#table-of-content)

## 48. Add & change HTML
- This are some shanges in `html` file
```javascript
    <div id="box1" class="box">
        <p>Box1</p>
    </div>

    <div id="box2" class="box">
        <p>Box2</p>
    </div>

    <div id="box3" class="box">
        <p>Box3</p>
    </div>

    <div id="box3" class="box">
        <p>Box3</p>
    </div>
```  