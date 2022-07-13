const maxnum = document.querySelector("#maxnum");
const guessnum = document.querySelector("#guessnum");
const game = document.querySelector("#game");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");

function gameFormSubmit(e) {
    e.preventDefault();
    const guessNum = parseInt(guessnum.value);
    const RMAX = parseInt(maxnum.value);
    //input값의 value를 불러오면 type이 string이므로 주의할 것 (typeof 메소드로 type 확인)
    let randomNum = Math.floor(Math.random()*(RMAX+1));
    //사용자 선택 숫자 , 선택된 랜덤 숫자 안내화면 출력
    h2.innerText = `You chose : ${guessNum}, the machine chose : ${randomNum}`
    if(randomNum === guessNum) {
        h3.innerText = "You Win !!";
    }else {
        h3.innerText = "You Lose...";
    }
}

//설정한 범위 내의 값만 입력 받기 위해 동적으로 min,max 속성 부여
function MaxInput () {
    const rangeM = parseInt(maxnum.value);
    guessnum.setAttribute("max" , rangeM);
    guessnum.setAttribute("min", 1);
}

game.addEventListener("submit", gameFormSubmit);
maxnum.addEventListener("input", MaxInput);