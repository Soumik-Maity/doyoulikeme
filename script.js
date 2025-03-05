const yesEl = document.getElementById('yes-btn');
const noEl = document.getElementById('no-btn');
const replyEl = document.getElementById('reply');
yesEl.addEventListener('click', () => {
    replyEl.textContent = 'Same here!';
} )
noEl.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - noEl.clientWidth;
    const maxY = window.innerHeight - noEl.clientHeight;
    
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    noEl.style.position = 'absolute';
    noEl.style.left = `${randomX}px`;
    noEl.style.top = `${randomY}px`;
});