let navMenu = document.querySelectorAll(".nav > li");
navMenu[0].classList.add("active");

navMenu.forEach((element) => {
    element.addEventListener("click", function() {
        navMenu.forEach(function(element) {
            return element.classList.remove("active");
        })
        element.classList.add("active");
    })
})