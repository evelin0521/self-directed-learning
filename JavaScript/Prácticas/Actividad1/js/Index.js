window.onload=start;

function start(){
  document.getElementById("button1").onclick=action1;
  document.getElementById("button2").onclick=action2;
  document.getElementById("button3").onclick=action3;
  document.getElementById("button4").onclick=action4;
}

function action1(){
  document.querySelector(".container-content").innerHTML="Hello world";
}

function action2(){
  document.querySelector(".container-content").innerHTML="<img src='resources/img.png'>";
}

function action3(){
  document.querySelector(".container-content").insertAdjacentHTML("beforeend", "<button class=buttons>Botón</button>");
}

function action4(){
  document.querySelector(".container-content").innerHTML="";
}