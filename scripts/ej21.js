const input = document.getElementById("input_text");

input.addEventListener("focus", handleFocus);
input.addEventListener("focusout", handleFocus);

function handleFocus(event){
    if(event.type == "focus"){
        input.style["border-width"] = "3px";
        input.style["border-color"] = "black";
    } else {
        input.style["border-width"] = "";
        input.style["border-color"] = "";
    }
}