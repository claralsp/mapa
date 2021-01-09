let btnRdps= document.querySelectorAll('.btnRdp');
const bntRodape1 = document.querySelector('.btnRdp1');
const bntRodape2 = document.querySelector('.btnRdp2');
const bntRodape3 = document.querySelector('.btnRdp3');


for (let i = 0; i < btnRdps.length; i++) {
	btnRdps[i].addEventListener('click', function(e) {
  
    for (let j = 0; j < btnRdps.length; j++) {
    	btnRdps[j].classList.remove('btnRdpClicado');
    };
    
  	let btnRdpEl = e.currentTarget;
    btnRdpEl.classList.add('btnRdpClicado');
    

  if(bntRodape1 == bntRodape1Clicado) {
    bntRodape1.classList.add('btnRdpClicado');
    document.getElementById('comoChegar').style.display = 'block';
  }

  if(bntRodape2 == bntRodape2Clicado) {
    bntRodape2.classList.add('btnRdpClicado');
    bntRodape2Clicado = true;
    document.getElementById('secao-busca').style.display = 'block';
    return;
  }
  
  if(bntRodape3 == bntRodape3Clicado) {
      document.getElementById('mapeamento').style.display = 'block';
      bntRodape3Clicado = true;
      return;
    }
  });
};




