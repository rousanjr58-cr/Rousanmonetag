const forgiveBtn = document.getElementById('forgiveBtn');
const hiddenMessage = document.getElementById('hiddenMessage');

forgiveBtn.addEventListener('click', () => {
  hiddenMessage.style.display = 'block';

  forgiveBtn.innerText = 'You are my forever ❤️';

  createHearts();
});

function createHearts() {
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');

    heart.innerHTML = '💖';
    heart.classList.add('heart');

    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    heart.style.position = 'fixed';
    heart.style.fontSize = Math.random() * 25 + 20 + 'px';
    heart.style.animation = `fly ${Math.random() * 3 + 3}s linear forwards`;

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }
}

const style = document.createElement('style');
style.innerHTML = `
@keyframes fly {
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }

  100% {
    transform: translateY(-120vh) scale(1.5);
    opacity: 0;
  }
}
`;

document.head.appendChild(style);

// Sparkle Cursor Effect

document.addEventListener('mousemove', (e) => {
  const sparkle = document.createElement('div');

  sparkle.innerHTML = '✨';
  sparkle.style.position = 'fixed';
  sparkle.style.left = e.clientX + 'px';
  sparkle.style.top = e.clientY + 'px';
  sparkle.style.pointerEvents = 'none';
  sparkle.style.fontSize = Math.random() * 10 + 10 + 'px';
  sparkle.style.animation = 'sparkle 1s linear forwards';

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.remove();
  }, 1000);
});

const sparkleStyle = document.createElement('style');

sparkleStyle.innerHTML = `
@keyframes sparkle {
  0% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }

  100% {
    opacity: 0;
    transform: scale(2) translateY(-25px);
  }
}
`;

document.head.appendChild(sparkleStyle);

const messages = [
  'My Cutie Pie 💖',
  'My Rasmalai 🥺',
  'My Universe ✨',
  'My Everything 💞',
  'I Love You Forever ❤️'
];

setInterval(() => {
  const msg = document.createElement('div');

  msg.innerText = messages[Math.floor(Math.random() * messages.length)];

  msg.style.position = 'fixed';
  msg.style.left = Math.random() * window.innerWidth + 'px';
  msg.style.bottom = '-50px';
  msg.style.color = 'white';
  msg.style.fontWeight = 'bold';
  msg.style.fontSize = '1rem';
  msg.style.pointerEvents = 'none';
  msg.style.animation = 'loveFloat 6s linear forwards';

  document.body.appendChild(msg);

  setTimeout(() => {
    msg.remove();
  }, 6000);
}, 1200);

const loveStyle = document.createElement('style');

loveStyle.innerHTML = `
@keyframes loveFloat {
  0% {
    transform: translateY(0);
    opacity: 0;
  }

  20% {
    opacity: 1;
  }

  100% {
    transform: translateY(-120vh);
    opacity: 0;
  }
}
`;

document.head.appendChild(loveStyle);

// Typing Animation

const title = document.querySelector('h1');
const originalText = title.innerText;

let index = 0;

title.innerText = '';

function typeText() {
  if(index < originalText.length) {
    title.innerText += originalText.charAt(index);
    index++;
    setTimeout(typeText, 100);
  }
}

typeText();
