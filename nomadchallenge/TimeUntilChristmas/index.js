// html의 h2태그 안에 d-day삽입
const christ = document.querySelector("h2");

function newDay() {
  // D-day 날짜지정
  const masTime = new Date("2022-12-25");
  // 오늘날짜 지정
  const normalTime = new Date();
  // 새로운 변수를 두어 d-day 날짜에서 오늘날짜를 빼주어
  // 밀리초의 값으로 가지고온다
  const New = masTime - normalTime;

  // Math.floor 함수를 이용해서 근접한 정수값을 가져온다.
  // 밀리초 값이기 때문에 1000을 곱한다.
  // 1000*60 => 60초(1분)*60 => 60분(1시간)*24 = 24시간(1day)
  // 나머지 연산자(%)를 이용홰 시/분/초 를 구한다
  const NewDay = Math.floor(New / (1000 * 60 * 60 * 24));
  const NewHour = Math.floor((New / (1000 * 60 * 60)) % 24);
  const NewMin = Math.floor((New / (1000 * 60)) % 60);
  const NewSec = Math.floor((New / 1000) % 60);

  christ.innerText = `${NewDay} 일 ${NewHour} 시간 ${NewMin} 분 ${NewSec} 초 남았습니다`;
}

newDay();
setInterval(newDay, 1000);
