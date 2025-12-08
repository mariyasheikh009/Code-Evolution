let text = document.getElementById("text");
let size = 24;

function changeColor(color) {
    text.style.color = color;
}

function changeFont(font) {
    text.style.fontFamily = font;
}

function increaseSize() {
    size++;
    text.style.fontSize = size + "px";
}

function decreaseSize() {
    size--;
    text.style.fontSize = size + "px";
}

document.getElementById("boldBtn").addEventListener("mouseover", () => {
    text.style.fontWeight = "bold";
});

document.getElementById("italicBtn").addEventListener("mouseover", () => {
    text.style.fontStyle = "italic";
});

document.getElementById("underlineBtn").addEventListener("mouseover", () => {
    text.style.textDecoration = "underline";
});
