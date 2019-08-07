function openNav() {
    // document.getElementById("navbar").style.width = "100%";
    // document.getElementById("navbar").style.display = "block";
    var element = document.getElementById("navbar");
    element.classList.remove("site-nav-hidden");
    element.classList.add("site-nav-visible")
}

function closeNav() {
    // document.getElementById("navbar").style.display = "none";
    var element = document.getElementById("navbar");
    element.classList.remove("site-nav-visible");
    element.classList.add("site-nav-hidden")
}