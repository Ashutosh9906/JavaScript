const element = document.getElementById("fruits");
const children = element.children;

Array.from(children).forEach(childrens => {
    childrens.style.backgroundColor = "yellow"
})