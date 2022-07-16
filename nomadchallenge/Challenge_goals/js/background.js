const backimg = ["backimg1.jpg" , "backimg2.jpg" , "backimg3.jpg"];

const chosenImage = backimg[Math.floor(Math.random() * backimg.length)];

const bgimg = document.createElement("img");
bgimg.src = `img/${chosenImage}`;

document.body.appendChild(bgimg);
