const clock = document.querySelector("#clock");

function Time() {
    const date = new Date();

    const Hour = String(date.getHours()).padStart(2,0);
    const Minutes = String(date.getMinutes()).padStart(2,0);
    const Second = String(date.getSeconds()).padStart(2,0);
    
    clock.innerText = `${Hour} : ${Minutes} : ${Second}`;
}
Time();
setInterval(Time , 1000);