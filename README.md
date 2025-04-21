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

## 0. Extra`s
```javascript
    //This is used to add any pop up to the website 
    document.getElementById("MyH1").textContent = `Hello`;
    document.getElementById("MyP").textContent = 'I love pizza';

    // using innerHTMl we can insert html through javascript
    document.getElementById("MyH").innerHTML = `<p>brr brr patapim</p>`
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