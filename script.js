function myMenu() {
    var x = document.getElementById("popup");
    if (x.style.display === "none") {
        x.style.display = "flex";
    } else {
        x.style.display = "none";
    }
}

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}