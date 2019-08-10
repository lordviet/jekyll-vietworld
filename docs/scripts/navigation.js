function openNav() {
    var element = document.getElementById("navbar");
    element.classList.remove("site-nav-hidden");
    element.classList.add("site-nav-visible")
}

function closeNav() {
    var element = document.getElementById("navbar");
    element.classList.remove("site-nav-visible");
    element.classList.add("site-nav-hidden")
}