//1
document.getElementById("container")

//2
document.querySelector("#container")

//3
document.querySelectorAll(".second")


//4
document.querySelector("ol .third")

//5
const sectionToChange = document.querySelector("#container")
sectionToChange.innerText = "Hello!";

//6
let toAdd = document.querySelector(".footer");
toAdd.classList.add("main");

//7
document.getElementsByClassName("main").classList.remove("footer");

//8
let element = document.createElement('li')

//9
element.innerText("four")

//10
function exerciseTen() {
    let ul = document.querySelector("ul")
    ul.appendChild(element)
}

//11
let all = document.querySelectorAll("ol")
for (let i = 0; i < all.length; i++) {
    all[i].style.backgroundColor = "green";
}

//12
let footer = document.querySelector(".footer")
footer.remove()