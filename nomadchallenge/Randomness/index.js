const btn = document.querySelector("#app");
const body = document.querySelector("body");

const colors =  ["red","skyblue","orange","green","white","yellow","gray"];

function backLinear() {
    body.style.background = `linear-gradient(0.25turn , ${colors[Math.floor(Math.random() * colors.length)]},
     ${colors[Math.floor(Math.random() * colors.length)]})`;
}

btn.addEventListener("click", backLinear);