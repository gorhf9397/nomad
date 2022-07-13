const clock = document.querySelector("h1#clock");

function getClock() {
  const date = new Date();
  const Month = String(date.getMonth()).padStart(2, 0);
  const Day = String(date.getDay()).padStart(2, 0);
  const Hour = String(date.getHours()).padStart(2, 0);
  const Minute = String(date.getMinutes()).padStart(2, 0);
  const Second = String(date.getSeconds()).padStart(2, 0);
  clock.innerText = `${date.getFullYear()}-${Month}-${Day} ${Hour}
  :${Minute}:${Second}`;
}
getClock();
setInterval(getClock, 1000);
