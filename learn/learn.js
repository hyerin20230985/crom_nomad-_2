console.log(4545454);
//로그 출력
const a = 5;
//상수. 바뀌지 않는 값
let b = 2;
b = 5;
//중간에 값을 업데이트할 수 있음 재선언X 
var c = 3;
//다 가능 but 가능한 안 쓸 것
Array.pusy(sum);
//리스트에 추가하기

//Objects
player = {
    name: "player",
    points: 10,
    fat: true,
    Hello: function (otherpersonname) {
        console.log("hi!" + otherpersonname);
    }
    //리스트 안에 function은 위치가 반대로
};
//Objects 를 제외한 그 안에 있는 값은 변경 가능
player.lastName = "red";
//오브젝트 리스트 안에 추가 가능
player.points = player.points + 15;
//interger과 더할 수 있음

//functions
function sayHello(nameofPerson, age){
    console.log("Hello my name is" + nameofPerson + "and I'm" + age);
}

sayHello("player", 22);
// sayHello() 괄호 안에 있는 데이터를 출력

//Return
const age = 96;
function calculaAge(ageOfFG) {
    return ageOfFG + 2;
}
//리턴값을 설정하면 결과값은 함수의 리턴값으로 대체됨
const krAge = calculaAge(age);

//사용자에게 팝업을 통해 입력받는 함수
const agee = prompt("How old are you?");

//입력받은 값을 정수로 바꿔주는 함수
parseInt(agee); //만약 숫자가 아닌것을 입력받으면 NaN

//boolean => false true

//&& => and
//|| => or

//console.dir(document) => 실행하면 설정한거 볼 수 있음음
//웹페이지 자바스크립트로 
// document.title = "Hi" 하면 타이틀이 바뀜.
// 이걸로 설정을 수정,추가 할 수 있음
// 새로 고침하면 다시 원상복귀
// => 자바스크립트와 html은 연결되어있음

//title을 가진 id 태그를 가져옴
const title = document.getElementById("title");

console.dir(title);

//class
const hellos =  document.getElementsByClassName("hello");
//Tag
const titles = document.getElementsByTagName("h1");
//쿼리셀렉터 = css셀렉터 
const titlee = document.querySelector(".hello h1:first=child");
//중복되는 것이 있을 경우 첫번째만 가져옴
//다 가져오는 경우
querySelectorAll

//events
function handleTilteClick() {
    console.log("title was clicked!");
    title.style.color = "blue";
}
function handleMouseenter() {
    console.log("mouse is here");
    title.innerText = "Mouse is here!"; //글씨 바꾸는거거
}
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
    //객체.위치.무엇을.어떻게 
}
function handleWindowCopy() {
    alert("copier!");
}
function handleWindowOffline() {
    alert("SOS no WIFI");
}
function handleWindowOnline() {
    alert("ALL GOOD");
}

title.addEventListener("click", handleTilteClick);
title.addEventListener("mouseenter", handleMouseenter);
//on이 있으면 리스너 이벤트.
//이런식으로도 적을 수 있음
title.onclick = handleTilteClick;
//window 방식
//사용자가 윈도우 탭 사이즈를 재조정할 경우 생기는 이벤트트
window.addEventListener("resize", handleWindowResize);
//사용자가 복사를 할 경우 생기는 이벤트
window.addEventListener("copy", handleWindowCopy);
//사용자가 오프라인상태일 경우 생기는 이벤트
window.addEventListener("offline", handleWindowOffline);
//사용자가 온라인상태일 경우 생기는 이벤트트
window.addEventListener("online", handleWindowOnline);

//CSS
function handleTilteClick() {
    console.log(h1.style.color); //getter
    title.style.color = "blue";
    console.log(h1.style.color); //setter 
}
function handleTilteClick() {
    const currentColor = h1.style.color; //색상을 확인하는 변수
    let newColor; //색상을 바꾸는 변수
    if(currentColor === "blue") { //=== 세개는 일치
        newColor = "tomato";
    } 
    else {
        newColor = "blue"; 
    } // 텍스트 색상이 블루일 경우 토마토로 바꾸고 블루가 아닐 경우 블루로 변경
    h1.style.color = newColor; //변수에 저장된 새로운 색을 실제로 h1 요소에 적용시키기 위해
}

/* 리스너를 하는 스텝
step 1. element 설정
step 2. event 설정
step 3. event 실행 */

/* CSS 파일과 자바스크립트의 상호작용 

CSS:
h1 {
    color: blue;
    transition: color 0.5s ease-in-out; // 트랜지션모션션
}

.active {
    color: tomato;
} */

function handleTilteClick() {
    h1.className = "active"; //getter 이자 setter
}
h1.addEventListener("click", handleTilteClick);
//실행하면 클릭하면 h1의 클래스가 active로 바뀌고 tomato 색상으로 변경됨
function handleTilteClick() {
    const clickedClass = "active";
    if (h1.className === clickedClass){
        h1.className = "";
    }
    else {
        h1.className = clickedClass;
    }
}
//remove, add
function handleTilteClick() {
    const clickedClass = "active";
    if (h1.classList.contains(clickedClass)){
        h1.classList.remove(clickedClass);
    }
    else {
        h1.classList.add(clickedClass);
    }
}
//toggle - 위에 if문을 간략하게 한줄로 정리할 수 있는 방식
function handleTilteClick() {
    h1.classList.toggle("active");
    //h1의 classList에 clickclass가 존재하는지 확인해서
    //만약 있다면 toggle이 active를 제거하고 
    //존재하지 않다면 toggle이 active를 classList에 추가함
}

//--4주차--//
//login-form 이라는 id를 가진 태그를 찾고 그 안에 있는 input 과 button 이라는 태그를 찾는다
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

//이런식으로도 가능함함
const loginform = document.querySelector("#login-form");
const logininput = document.querySelector("#login-form input");
const loginbutton = document.querySelector("#login-form button");

function onLoginBtnClick() {
    console.log(loginInput.value);
    //입력받은 값을 출력하고 싶을때 
}

function onLoginBtnClick() {
    const username = loginInput.value;
    if (username === "") {
        alert("Please write your name");
    }
    //입력받는 값을 value 로 선언하고 value 가 만약 공백일 경우
    //당신의 이름을 쓰라고 출력
    else if(username.length > 15) {
        alert("Your name is too long");
        //lengh => 길이 
    }
} 

loginButton.addEventListener("click", onLoginBtnClick);
/*파라미터와 아규먼트 차이
Parameter: 매개변수. 
def cancat(str1, str2):
    return a + " " + b

Argument: 전달인자, 인자
cancat("parameter", "argument")
*/
function onLoginSumit(tomato) {
    tomato.preventDefault();
    //일어난 event에 대한 정보를 지닌 argument를 보여줌
    //그리고 브라우저에서 실행하려는 동작을 허용하지 않아 막아버림
    //ex) 링크의 경우, 링크로 이동하지 않고 막을 수 있음
    console.log(tomato);
}
//submit을 하면 onLoginSumit 호출
loginForm.addEventListener("submit", onLoginSumit);

//링크
const link = document.querySelector("a");
//h1
const greeting = document.querySelector("h1");
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = "username";
//관습: string만 포함된 변수는 대문자로 쓴다 + 중요한 변수가 아니라서.
//본인이 생성한 string을 반복해서 사용할 경우, 오타 오류를 막기 위해 대문자 벼눗로 저장시키는게 좋음
//그러면 오타 오류를 잡을 수 있음

/* css
.hidden {
    display: none;
} */
//사라지게 하는것
//visibility:hidden 과 display: none 의 차이점
//visibility:hidden => 공간은 그대로 두고 보이는 것.
//display: none => 잡아둔 공간도 사라짐

function onLoginSumit(event) {
    event.preventDefault();
    //form이 submit했을때 새로고침하는 행동을 막음
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //form에 클래스 hidden 을 추가 => 사라짐
    const username = loginInput.value;
    //input에 입력한 값을 username에 저장
    localStorage.setItem(USERNAME_KEY, "username");
    //로컬스토리지에 username이라는 키값에 username에 입력된 값을 저장
    greeting.innerText = "Hello " + username;
    greeting.innerText = `Hello ${username}`; //유의할점: ``O " " X '' X
    //두가지 방식으로 적을 수 있음.
    //h1을 greeting으로 선언하고 h1 안에 Hello와 저장된 username을 출력
    greeting.classList.remove(HIDDEN_CLASSNAME);
    //h1에 있는 hidden class를 지워서 나타나게 출력
    //=> form을 작성할때는 h1 이 안보이는 상태였지만 submit을 하면 나타남
}
//saving value
//local storage : 브라우저에 저장할 수 있게 해주는 것. 개발자도구에서 확인가능
//저장: localStorage.setItem("key", "value")
//출력: localStorage.getItem("key")
//삭제: localStorage.removeItem("key")

function paintGreetings(username) { 
    //아래와 인자가 다른 이유는 이름을 받는 곳이 다르기 때문
    //여기서는 input에서 받은 username을 사용
    h1.innerText = `Hello ${username}`;
    //h1에 텍스트를 이름을 추가해서 생성
    h1.classList.remove(HIDDEN_CLASSNAME);
    //hidden으로 가려진 h1에서 hidden을 지움
}
const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    //만약 이름이 저장되어있지 않다면 hidden으로 가려진 form에서 hidden을 지우고
    loginForm.addEventListener("submit", onLoginSumit);
    //form 이벤트를 재생
}   
else {
    //show the h1
    paintGreetings(savedUsername);
    //여기서는 localStorage에서 받은 username을 사용함.
}










