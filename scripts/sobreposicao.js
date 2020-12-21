//Mapa Gameleira

const checkAtivaCamada = document.querySelectorAll('.ativa-camada');

for(let i = 0; i < checkAtivaCamada.length; i++) {
checkAtivaCamada[i].addEventListener('change', (e) =>  {
  const checkAtivadoEl = e.currentTarget;
  const outraClasse = checkAtivadoEl.classList[1];
  const camadaAtivar = document.querySelector('.camada.' + outraClasse);

  const ativado = checkAtivadoEl.checked;
  if(ativado) {
    camadaAtivar.classList.add('visivel');
  } else {
    camadaAtivar.classList.remove('visivel');
  }
});
}
