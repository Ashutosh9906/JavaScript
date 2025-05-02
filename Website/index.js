let buttons = document.querySelectorAll(".myButton");

buttons.forEach(button => {
    button.addEventListener("click", event => {
        event.target.remove();
        //But to update the Dom we have to redefine it
        buttons = document.querySelectorAll(".myButton");
        console.log(buttons);
    })
})