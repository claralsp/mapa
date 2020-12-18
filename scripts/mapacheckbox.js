var btn_1 = document.getElementById('btn1');
var mapa_1 = document.getElementById('mapa1');
var btn_2 = document.getElementById('btn2');
var mapa_2 = document.getElementById('mapa2');

btn_1.addEventListener('click', () => {
  if(mapa_1.style.display != 'block') {
    mapa_1.style.display = 'block';
    btn1.classList.add('bntClicado');
    return;
  }
  mapa_1.style.display = 'none';
  btn1.classList.remove('bntClicado');
});

btn_2.addEventListener('click', () => {
    if(mapa_2.style.display != 'block') {
      mapa_2.style.display = 'block';
      btn2.classList.add('bntClicado');
      return;
    }
    mapa_2.style.display = 'none';
    btn2.classList.remove('bntClicado');
  });
