const btn = document.getElementById('forgiveBtn');
const hidden = document.getElementById('hiddenMessage');

btn.addEventListener('click',()=>{
hidden.style.display='block';
createHearts();
});

function createHearts(){
for(let i=0;i<30;i++){
const heart=document.createElement('div');

heart.innerHTML='💖';
heart.style.position='fixed';
heart.style.left=Math.random()*window.innerWidth+'px';
heart.style.top=window.innerHeight+'px';
heart.style.fontSize=Math.random()*20+20+'px';
heart.style.animation='fly 4s linear forwards';

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},4000);
}
}

const style=document.createElement('style');

style.innerHTML=`
@keyframes fly{
0%{
transform:translateY(0);
opacity:1;
}
100%{
transform:translateY(-120vh);
opacity:0;
}
}
`;

document.head.appendChild(style);

document.addEventListener('mousemove',(e)=>{
const sparkle=document.createElement('div');

sparkle.innerHTML='✨';
sparkle.style.position='fixed';
sparkle.style.left=e.clientX+'px';
sparkle.style.top=e.clientY+'px';
sparkle.style.pointerEvents='none';
sparkle.style.animation='sparkle 1s linear forwards';

document.body.appendChild(sparkle);

setTimeout(()=>{
sparkle.remove();
},1000);
});

const sparkleStyle=document.createElement('style');

sparkleStyle.innerHTML=`
@keyframes sparkle{
0%{
opacity:1;
transform:scale(1);
}
100%{
opacity:0;
transform:translateY(-20px) scale(2);
}
}
`;

document.head.appendChild(sparkleStyle);
