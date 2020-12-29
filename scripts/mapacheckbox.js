const btn_1 = document.getElementById('btn1');
const btn_2 = document.getElementById('btn2');
const bodyEl = document.querySelector('body');

btn_1.addEventListener('click', () => {
  bodyEl.classList.remove('mostrando-c2');
  bodyEl.classList.add('mostrando-c1');
});

btn_2.addEventListener('click', () => {
  bodyEl.classList.remove('mostrando-c1');
  bodyEl.classList.add('mostrando-c2');
});
