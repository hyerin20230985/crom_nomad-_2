const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const date = new Date();
const hours = date.getHours();
let hi;

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

if (hours >= 6 && hours < 12) {
  hi = "moring";
}
else if (hours >= 12 && hours < 18) {
  hi = "afternoon";
}
else {
  hi = "night";
}

function paintGreetings(username) {
  greeting.innerText = `Good ${hi}, ${username}.`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(savedUsername);
}