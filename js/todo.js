const toDoForm = document.getElementById("todo-form");
//이미 위에서 form 을 찾아놨기 때문에 밑에 인풋을 불러올때 굳이 아이디로 안 찾아도 됨됨
const toDoInput = toDoForm.querySelector("input");
const toDOList = document.getElementById("todo-list");

const TODOS_KEY = "todos";
let toDos = [];
//사용자가 새로쓴 투두가 이전에 있던 투두를 덮어서 저장되는 현상을 막기 위해
//let 으로 변수를 바꿔서 밑에서 업데이트가 가능하게 

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}
//JSON.stringify : 어떤 행렬이나 코드를 string으로 바꿔줌

function deleteToDo() {
    //사용자가 어떤 버튼을 클릭했는지 판단할 수 있게
    //parentNode 혹은 parentElement 를 통해 어떤 부모(리스트)의 버튼인지 알 수 있음
    const li = event.target.parentElement;
    li.remove();
    //삭제버튼을 클릭한 li.id 를 제외한 todo만 남겨두기
    //li.id 는 string 타입. toDO.id 는 number 타입이여서 parseInt를 사용해서 문자열을 숫자로 바꿈
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    //없앤 상태에서 새로 생성해서 저장
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id; 
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    //.text 를 추가하지 않을 경우 사용자가 입력했을때 
    // [object, object]으로 뜨기 때문에
    //사용자가 작성한 입력값만 텍스트 추가하기 위해
    const button = document.createElement("button");
    button.innerText = "X";
    button.style.marginLeft = "20px";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    //li 에 span 추가하기
    li.appendChild(button);
    toDOList.appendChild(li);
    //ul에 li 추가하기
}

function handleToDoSubmit() {
    event.preventDefault();
    //submit이 실행되도 새로고침 현상이 안생김
    const newTodo = toDoInput.value;
    //newToDo string 은 input의 value를 비우기 전 값을 나타냄
    toDoInput.value = "";
    //공백을 넣어서 사용자가 입력을 받으면 입력받은 값이 input에 사라지게
    const newTodoObj = {
        text: newTodo,
        id: Date.now()
    };
    //array에 있는 item 이 랜덤한 id를 갖도록해서 구별하기기
    toDos.push(newTodoObj);
    //위에 만든 toDos 행렬에 입력받은 값을 푸시해서 행렬에 저장장
    paintToDo(newTodoObj);
    saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); 
    //JSON.parse : JSON 형식의 문자열을 자바스크립트 객체로 변환하는 메서드
    //서버에서 받아온 JSON 데이터를 자바스크립트에서 이용할 수 있음
    //자바스크립트는 array에 있는 각각의 item에 대해 function을 실행할 수 있음
    toDos = parsedToDos;
    //toDos에 parsedToDos 를 넣어서 이전에 있던 toDos 들을 복원
    parsedToDos.forEach(paintToDo);
    //forEach 는 array에 있는 각각의 item에 대해 funtion을 실행해줌
    //만약 () 안에 function을 넣으면 세개의 item 이 들어있으면 세번 function을 반복함
    //하지만 item들에 대해 한개의 function만 실행해줌
}

/*localstorage 에서 삭제버튼으로 지운 item을 없애고 싶을때
지우고 싶은 item을 빼고 새 array를 생성 = 지우고 싶은 item을 제외

filter() 은 리턴값이 true가 되는 함수를 쓸 경우, 모두를 반환하지만
false 를 쓸 경우 모두를 반환하지 않음
응용해서 리턴값이 item !== x 일 경우 x만 빼고 반환. (부호 가능)
text 도 가능함. */

