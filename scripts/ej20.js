const image = document.getElementById("image");

//image.onmouseout = changeImage;
image.onmouseover = changeImage;
image.onmouseout = changeImage;

function changeImage(event){
    if(event.type == "mouseover"){
        image.src = "./assets/border_collie2.webp";
    } else {
        image.src = "./assets/border_collie1.webp";
    }
}