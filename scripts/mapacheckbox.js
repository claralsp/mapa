const botoesCampi = document.querySelectorAll('[data-campus]');

botoesCampi.forEach(buttonEl => buttonEl.addEventListener('click', e => {
  const campus = e.currentTarget.dataset.campus;
  const changeEvent = new CustomEvent('campuschanged', { detail: { campus } });
  document.dispatchEvent(changeEvent);
}));

document.addEventListener('campuschanged', e => {
  const campus = e.detail.campus || 'novaSuica';
  window.campusAtual = campus;

  document.body.classList.toggle('mostrando-c1', campus === 'novaSuica');
  document.body.classList.toggle('mostrando-c2', campus === 'novaGameleira');

  if (campus === 'novaSuica') {
    window.mapasComCamadas[1].deactivateEvents();
    window.mapasComCamadas[0].activateEvents();
  } else if (campus === 'novaGameleira') {
    window.mapasComCamadas[0].deactivateEvents();
    window.mapasComCamadas[1].activateEvents();
  }
});