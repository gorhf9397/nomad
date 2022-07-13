
document.getElementById("app").innerHTML=`<h1>Hello Vanilla</h1>`;

const body = document.querySelector("body");

window.onresize = function () {
    if(window.innerWidth < 450) {
        body.classList.remove("second");
        body.classList.remove("third");
        body.classList.add("first");
    }else if (window.innerWidth < 600) {
        body.classList.remove("first");
        body.classList.remove("third");
        body.classList.add("second");
    }else {
        body.classList.remove("first");
        body.classList.remove("second");
        body.classList.add("third");
    }
};