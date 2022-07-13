document.querySelector("#app").innerHTML=`<h1> Hello </h1>`;
const h1=document.querySelector("h1");

function superEventHandler(event) {
    
    if(event.type === "mouseover") {
        h1.style.color="red";
        h1.innerText="Mouse Over";
    }
    if(event.type === "mouseout"){
        h1.style.color="blue";
        h1.innerText="Mouse Out";
    }
    if(event.type === "resize"){
        h1.style.color="green";
        h1.innerText="Resize";
    }
    if(event.type === "contextmenu"){
        h1.style.color="yellow";
        h1.innerText="MouseRightClick";
    }
}

h1.addEventListener("mouseover", superEventHandler);
h1.addEventListener("mouseout", superEventHandler);
window.addEventListener("resize", superEventHandler);
window.addEventListener("contextmenu", superEventHandler);
