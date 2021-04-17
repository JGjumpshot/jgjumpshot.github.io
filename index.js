let navMenu = document.querySelectorAll(".nav > li");
let home = document.querySelector(".nav > li");
navMenu.forEach((element) => {
    console.log(element.innerHTML);
    element.classList.remove("active");
    element.addEventListener("click", function() {
        element.classList.add("active");
    })
})