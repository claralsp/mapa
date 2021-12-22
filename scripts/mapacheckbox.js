const btn_1 = document.getElementById('btn1');
const btn_2 = document.getElementById('btn2');
const bodyEl = document.querySelector('body');

btn_1.addEventListener('click', () => {
  bodyEl.classList.remove('mostrando-c2');
  bodyEl.classList.add('mostrando-c1');
  window.campusAtual = 'novaSuica';
  window.mapasComCamadas[1].deactivateEvents();
  window.mapasComCamadas[0].activateEvents();
});

btn_2.addEventListener('click', () => {
  bodyEl.classList.remove('mostrando-c1');
  bodyEl.classList.add('mostrando-c2');
  window.campusAtual = 'novaGameleira';
  window.mapasComCamadas[0].deactivateEvents();
  window.mapasComCamadas[1].activateEvents();
});