const btn = document.getElementById("increment");
const counter = document.getElementById("counter");

btn.addEventListener("click", increment);

function increment() {
    let value = parseInt(counter.innerHTML);
    value++;
    counter.innerHTML = value;
}