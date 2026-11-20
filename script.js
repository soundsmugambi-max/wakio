const heart = document.getElementById('heart');
for (let layer = 0; layer < 3; layer++) {
  for (let i = 0; i < 120; i++) {
    const t = (i / 120) * Math.PI * 2;
    const scale = 1 - layer * 0.08;
    let x = 16 * Math.pow(Math.sin(t), 3) * scale;
    let y = -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) * scale;
    const span = document.createElement('span');
    span.className = 'love_word';
    span.textContent = 'I love you';
    span.style.left = (200 + x * 10) + 'px';
    span.style.top = (200 + y * 10) + 'px';
    span.style.transform = `translate(-50%, -50%) rotate(${t * 180 / Math.PI}deg)`;
    heart.appendChild(span);
  }
}