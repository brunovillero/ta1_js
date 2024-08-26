const p = document.getElementById("window_size");

function reportWindowSize() {
    p.textContent = "Height: " + window.innerHeight + " " + "Width: " + window.innerWidth;
}
  
window.onresize = reportWindowSize;