document.querySelector("#app").innerHTML=`<h1> Hello </h1>`;
const h1=document.querySelector("h1");
//const div1=document.querySelector("#app");

const superEventHandler = {
ove: function () {
    h1.style.color="red";
    h1.innerText="Mouse Over";
},
ovo: function () {
    h1.style.color="blue";
    h1.innerText="Mouse Out";
},
rsz: function () {
    h1.style.color="green";
    h1.innerText="Resize";
},
cttmu: function () {
    h1.style.color="yellow";
    h1.innerText="MouseRightClick";
},
};

h1.addEventListener("mouseover", superEventHandler.ove );
h1.addEventListener("mouseout", superEventHandler.ovo);
window.addEventListener("resize", superEventHandler.rsz);
window.addEventListener("contextmenu", superEventHandler.cttmu);
