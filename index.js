/* ===== LOGO FLOAT ===== */
const logo = document.querySelector('.logo');
let t = 0;
setInterval(() => {
  t += 0.05;
  const y = Math.sin(t) * 8;
  logo.style.transform = `translateX(-50%) translateY(${y}px)`;
}, 30);


/* ===== PINK CIRCLE ORBIT ===== */
const circle = document.querySelector('.orbit');
if (circle) {
  let angle = 0;
  setInterval(() => {
    angle += 0.03;
    const x = Math.cos(angle) * 25;
    const y = Math.sin(angle) * 8;

    circle.style.transform = `
      translateX(-50%)
      translate(${x}px, ${y}px)
      rotate(-20deg)
    `;
  }, 30);
}

/* ===== 3D MOUSE EFFECT ===== */
const cylinder = document.querySelector('.cylinder');

document.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth / 2 - e.clientX) / 40;
  const y = (window.innerHeight / 2 - e.clientY) / 40;

  cylinder.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});



  
 
 
  
  
