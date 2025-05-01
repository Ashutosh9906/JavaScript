// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES AND PROPERTIES
newH1.textContent = "This is new H1";
newH1.style.backgroundColor = "yellow";
newH1.id = "myH1";
newH1.style.textAlign = "center"

//STEP 3 APPEND ELEMENT TO DOM
document.body.append(newH1); //add newH1 at end of body
document.body.prepend(newH1); ////add newH1 at start of body
document.getElementById("box1").append(newH1); //last child BOx 1 is first child
document.getElementById("box1").prepend(newH1);

const box2 = document.getElementById("box2");
document.body.insertBefore(newH1, box2); //this will add newH1 befroe box2

const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1, boxes[2]);
// Placing newH1 without using it's either using querySelectorAll

//STEP 4 REMOVE HTML ELEMENT
document.getElementById("box1").removeChild(newH1); //This will remove the newH1 from the box1
