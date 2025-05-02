const myImg = document.getElementById("myImg");
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", event => {

    if(myImg.style.visibility === "hidden"){
        myImg.style.visibility = "visible";
        myBtn.textContent = "HIDE"
    }
    else{
        myImg.style.visibility = "hidden";
        myBtn.textContent = "SHOW"
    }
});