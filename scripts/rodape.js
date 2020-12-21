const bntRodape1 = document.querySelector('.btnRdp1');
var bntRodape1Clicado = false;

bntRodape1.addEventListener('click', () => {
  if(bntRodape1Clicado == false) {
    bntRodape1.classList.add('btnRdpClicado');
    bntRodape1Clicado = true;
    return;
  }
  else{
    bntRodape1.classList.remove('btnRdpClicado');
    bntRodape1Clicado = false;
  }
});

const bntRodape2 = document.querySelector('.btnRdp2');
var bntRodape2Clicado = false;

bntRodape2.addEventListener('click', () => {
  if(bntRodape2Clicado == false) {
    bntRodape2.classList.add('btnRdpClicado');
    bntRodape2Clicado = true;
    document.getElementById('secao-busca').style.display = 'block';
    return;
  }
  else{
    bntRodape2.classList.remove('btnRdpClicado');
    document.getElementById('secao-busca').style.display = 'none';
    bntRodape2Clicado = false;
  }
});


const bntRodape3 = document.querySelector('.btnRdp3');
var bntRodape3Clicado = false;

bntRodape3.addEventListener('click', () => {
  if(bntRodape3Clicado == false) {
    bntRodape3.classList.add('btnRdpClicado');
    bntRodape3Clicado = true;
    return;
  }
  else{
    bntRodape3.classList.remove('btnRdpClicado');
    bntRodape3Clicado = false;
  }
});
