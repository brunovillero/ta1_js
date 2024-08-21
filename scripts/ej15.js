const btnAdd = document.getElementById("add");
const btnRemove = document.getElementById("remove");
const text = document.querySelector("input");
const ul = document.querySelector("ul");

btnAdd.addEventListener("click", addElement);
btnRemove.addEventListener("click", removeElement);

function addElement() {
    if(text.value != ""){
        let listItem = document.createElement("li");
        listItem.innerHTML = text.value;
        ul.append(listItem);
        text.value = "";
    }
}

function removeElement() {
    if(ul.lastChild){
        ul.removeChild(ul.lastChild);
    }
}