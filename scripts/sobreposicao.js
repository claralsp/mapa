//Mapa Gameleira

const ativadores = document.querySelectorAll('.ativadores-de-camadas');

for (let ativadorContainerEl of ativadores) {
  ativadorContainerEl.addEventListener('change', (e) => {
    if (e.target.matches('.ativa-camada')) {
      const checkAtivadoEl = e.target;
      const outraClasse = checkAtivadoEl.classList[1];
      const camadaAtivar = document.querySelector('.camada.' + outraClasse);
  
      const ativado = checkAtivadoEl.checked;
      if (ativado) {
        camadaAtivar.classList.add('visivel');
      } else {
        camadaAtivar.classList.remove('visivel');
      }
    }
  });
}