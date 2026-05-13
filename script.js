// script.js

// Typing Animation

const text = "I'm Sorry My Love ❤️";

const typing = document.querySelector('.typing');

let i = 0;

function typeEffect(){

  if(i < text.length){

    typing.innerHTML += text.charAt(i);

    i++;

    setTimeout(typeEffect,100);

  }

}

typeEffect();


// Mouse Glow Effect

const glow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove',(e)=>{

  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';

});


// 3D Floating Card

const card = document.getElementById('card');

document.addEventListener('mousemove',(e)=>{

  let x = (window.innerWidth / 2 - e.pageX) / 25;
  let y = (window.innerHeight / 2 - e.pageY) / 25;

  card.style.transform = `
    rotateY(${x}deg)
    rotateX(${-y}deg)
  `;

});


// Forgive Button

document.getElementById('loveBtn').addEventListener('click',()=>{

  alert("Yayyyyy ❤️ Thank you my cutie pie 🥺✨");

});


// Hidden Secret Message

const secretBtn = document.getElementById('secretBtn');

const secretMessage = document.getElementById('secretMessage');

secretBtn.addEventListener('click',()=>{

  secretMessage.classList.toggle('show');

  if(secretMessage.classList.contains('show')){

    secretBtn.innerText = "Close Secret ❤️";

  }else{

    secretBtn.innerText = "Tap For Secret 💌";

  }

});


// Music AutoPlay Fix

window.addEventListener('click',()=>{

  document.getElementById('bgMusic').play();

},{ once:true });
