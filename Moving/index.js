const myBox = document.getElementById("myBox");
const movementSpeed = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown", event => {  //the page provides an object that describes the action on the object
    myBox.style.backgroundColor = "tomato";
    myBox.textContent = "😮";
})

document.addEventListener("keyup", event => {  //the page provides an object that describes the action on the object
    myBox.style.backgroundColor = "lightGreen";
    myBox.textContent = "😤";
})

document.addEventListener("keydown", event => {

    if(event.key.startsWith("Arrow")){
        
        event.preventDefault();
        
        switch(event.key){
            case "ArrowUp":
                x -= movementSpeed;
                break;
            case "ArrowDown":
                x += movementSpeed;
                break;
            case "ArrowLeft":
                y -= movementSpeed;
                break;
            case "ArrowRight":
                y += movementSpeed;
                break;
        }
        
        myBox.style.top = `${x}px`;
        myBox.style.left = `${y}px`;
    }
})