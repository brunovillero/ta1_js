const btnToggle = document.getElementById("toggle");
const text = document.querySelector("p");

btnToggle.addEventListener("click", toggle);

function toggle() {
    if (text.style.display === "none") {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}