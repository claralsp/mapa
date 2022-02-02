const botoesCampi = document.querySelectorAll('[data-campus]');

botoesCampi.forEach(buttonEl => buttonEl.addEventListener('click', e => {
  const { campus: usuarioVendo } = e.currentTarget.dataset;
  const changeEvent = new CustomEvent('campuschanged', { detail: { usuarioVendo } });
  document.dispatchEvent(changeEvent);
}));

document.addEventListener('campuschanged', e => {
  const usuarioVendo = e.detail.usuarioVendo || 'novaSuica';
  const usuarioPosicionado = e.detail.usuarioPosicionado || window.campusAtual.usuarioPosicionado || 'novaSuica';
  window.campusAtual = { usuarioVendo, usuarioPosicionado };

  if (!e.detail.preventAutoChange) {
    document.body.classList.toggle('mostrando-c1', usuarioVendo === 'novaSuica');
    document.body.classList.toggle('mostrando-c2', usuarioVendo === 'novaGameleira');

    if (usuarioVendo === 'novaSuica') {
      window.mapasComCamadas[1].deactivateEvents();
      window.mapasComCamadas[0].activateEvents();
    } else if (usuarioVendo === 'novaGameleira') {
      window.mapasComCamadas[0].deactivateEvents();
      window.mapasComCamadas[1].activateEvents();
    }
  }
});