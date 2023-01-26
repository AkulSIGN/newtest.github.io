
let nav = document.getElementById("nav");
let menu = document.getElementById("menu");

menu.addEventListener("click",()=>{
if(nav.style.display=="flex"){
nav.style.display="none";
menu.innerHTML = "menu";
}else{
nav.style.display="flex";
menu.innerHTML = "close";
}
})

let quote = document.getElementById('quote');
let quotes = ["Change is the end result of all true learning.","All things are possible because anything can be learned.","Education is part of the foundation of all progress and growth.","Education is the tool that breaks down all barriers.","Learning allows us to make sense of the world around us, the world inside of us, and where we fit within the world.","The world around us is everything external.","Change is the end result of all true learning."];
function RQ(quotes) {
const randomIndex = Math.floor(Math.random() * quotes.length);
const item = quotes[randomIndex];
return item;
}
const result = RQ(quotes);
var i = 0;
var txt = result;
var txt1 = "Thanks You for visiting Our website ♡!";
var speed = 100;

function typeWriter(){
if (i < txt.length) {
document.getElementById("quote").innerHTML += txt.charAt(i);
document.getElementById("thanks").innerHTML += txt1.charAt(i);
i++;
setTimeout(typeWriter, speed);
}
}
window.onload = typeWriter();

let home = document.getElementById("home");
home.style.fontSize = "30px";
home.addEventListener("click",()=>{
alert("You are at home page");
})

let about = document.getElementById("about");
about.addEventListener("click",()=>{
window.location.href = "";
})
