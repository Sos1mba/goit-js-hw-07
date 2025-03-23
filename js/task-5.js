const bodyColor = document.querySelector("body");
const widget = document.querySelector(".widget");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

widget.addEventListener("click", function (event) {
  if (event.target.classList.contains("change-color")) {
    const newColor = getRandomHexColor();  
    bodyColor.style.backgroundColor = newColor;  
    document.querySelector(".color").textContent = newColor; 
  }
});
