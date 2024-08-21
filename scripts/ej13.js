const btn = document.querySelector("button");
const text = document.querySelector("p");

btn.addEventListener("click", changeText);

function changeText() {
    text.innerHTML = "Texto cambiado";
}
