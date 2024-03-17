const button = document.querySelector('.action-btn');
const boxes = document.querySelectorAll('.animate-box');

button.addEventListener('click', () => {
  boxes.forEach(box => box.classList.toggle('active'));
});
