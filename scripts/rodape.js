let btnRdps = document.querySelectorAll('.btnRdp');

for (let i = 0; i < btnRdps.length; i++) {
	
	btnRdps[i].addEventListener('click', function(e) {
    for (let j = 0; j < btnRdps.length; j++) {
    	btnRdps[j].classList.remove('btnRdpClicado');
    };
  	let btnRdpEl = e.currentTarget;
    btnRdpEl.classList.add('btnRdpClicado');
    

const b1 = document.getElementById('btn1');
const b2 = document.getElementById('btn2');

const bntRodape1 = document.querySelector('.btnRdp1');
var bntRodape1Clicado = false;

bntRodape1.addEventListener('click', () => {
if(bntRodape1Clicado == false) {
  bntRodape1.classList.add('btnRdpClicado');
  document.getElementById('mapeamento').style.display = 'none';
  document.getElementById('comoChegar').style.display = 'block';
  bntRodape1Clicado = true;
  return;
}
else{
  bntRodape1.classList.remove('btnRdpClicado');
  document.getElementById('comoChegar').style.display = 'none';
  document.getElementById('mapeamento').style.display = 'block';
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


bntRodape3.addEventListener('click', () => {
if(bntRodape3Clicado == false) {
  bntRodape3.classList.add('btnRdpClicado');
  document.getElementById('mapeamento').style.display = 'block';
  bntRodape3Clicado = true;
  return;
}
else{
  bntRodape3.classList.remove('btnRdpClicado');
  document.getElementById('mapeamento').style.display = 'none';
  bntRodape3Clicado = false;
}
});
  });
};


