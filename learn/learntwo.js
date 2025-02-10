const clock = document.querySelector("h2#clock")

//interval : '매번' 일어나야 하는 무언가
function sayHello() {
    console.log("hello");
}
//setInterval은 두개의 인자를 가짐
//첫번째인자는 내가 실행하고자 하는 function
//두번째인자는 호출되는 function 간격을 몇 ms로 할지
setInterval(sayHello, 5000);

//반복되지 않고 한번만 실행되는것
//두번째인자: 얼마나 기다릴지
setTimeout(sayHello, 5000);

function getClock() {
    //new Date() 는 내 시간을 알려줌
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}
getClock();
//1초마다 getClock 을 실행
setInterval(getClock, 1000);

//첫번째인자: string의 길이가 2가 되도록 함.
//두번째인자: 만약 string이 두개가 아니면 앞에 "0"을 붙임
//padStart 는 말그대로 string이 시작되는 부분에 padding을 넣어달라는거임
"1".padStart(2,"0");
//반대로 padEnd는 string 뒤에 문자를 추가하는것

//만약 number 데이터타입에서 string 으로 바꾸고 싶다면
String(new Date())
//앞에 String으로 감싸면 됨

const quotes [
    {"...~~~"},
    {"~~~..."}
];
//이런식으로 오브젝트를 묶어서 array 를 만들 수 있음음
 
const quotee [
    { 
        quote: "~~~",
        author: "~~~"
     }
];
//이런식으로 오브젝트를 따로 지정할 수 있음

console.log(quotes[0]);
//파이썬과 같이 행렬에 있는 인덱스를 불러올 경우 []을 사용하고 인덱스는 항상 0부터
console.log(quotes[10-1]);
//마지막 행렬의 인덱스를 가져오고 싶을땐 -1 을 해주기
console.log(quotes[0-9]);
//0부터 마지막까지 불러오기

//random()은 0부터 1까지의 랜덤한 숫자를 제공
//만약 random() * 10 을 하면 0부터 10까지의 숫자 제공

//round() 는 만약 소수점 1.1 이 있을때 1만 제공
//ceil() 은 1.0 이상이 되는 순간 2를 제공
//floor()은 1.99999 여도 1을 제공

Math.floor(Math.random() * 10);
//0부터 10까지 정수만 출력됨

//length 를 쓰면 행렬의 길이를 알아낼 수 있음 
console.log(quotes[Math.floor(Math.random() * quotes.length)]);

//폴더 안에 있는 이미지 이름들을 자바스크립트 파일에서도 똑같이 쓰인다.

//createElement(): 자바스크립트에서 태그를 생성할 수 있음
bgImage.src = `img/${chosenImage}`;
//만들어진 태그에 소스를 넣는데 항상 내가 만든 string 을 넣고 싶으면 `` 과 ${} 을 이용해서 사용

//이렇게 만들어진 태그는 자바스크립트에 존재하고 body 태그 안에는 존재하지 않음
document.body.appendChild(bgImage);
//appendchild 를 사용해서 html 안에 넣을 수 있음.

//css:  z-index는 text의 z-index 보다 낮으면 뒷 배경으로 설정된다.

parsedToDos.forEach((item) => console.log(item));

function sayHello(item) {
    console.log(item);
}
parsedTODOs.forEach(sayHello);
//위와 아래의 코드 작동은 똑같음. 위처럼 한줄에 쉽게 할 수 있음
// => : arrow function(화살표 함수). 

navigator.geolocation.getCurrentPosition()
/*위치 좌표를 알려주는 코드
getCurrentPosition()은 두개 인자를 받음
첫번째: 모든게 잘됐을 실행되는 함수 (successcallback)
두번째: 에러가 발생했을 때 실행되는 함수 (errorcallback */

