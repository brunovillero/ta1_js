const btn = document.querySelector("button");
const text = document.querySelector("input");
const ul = document.querySelector("ul");

btn.addEventListener("click", addElement);

function addElement() {
    if(text.value != ""){
        let listItem = document.createElement("li");
        listItem.innerHTML = text.value;
        ul.append(listItem);
        text.value = "";
    }
}