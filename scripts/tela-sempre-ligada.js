let travadorDeTela = null

async function travarTela() {
  if ('wakeLock' in navigator && !travadorDeTela) {
    try {
      travadorDeTela = await navigator.wakeLock.request('screen');
      console.info('Travou a tela para ela não apagar...');
    } catch (err) { 
      console.warn(`${err.name}, ${err.message}`);
    }
  }
}

async function destravarTela() {
  if (travadorDeTela) {
    try {
      await travadorDeTela.release();
      console.info('Destravou a tela...');
    } catch (err) {
      console.warn(`${err.name}, ${err.message}`);
    } finally {
      travadorDeTela = null;
    }
  }
}


document.addEventListener('visibilitychange', async () => {
  if (travadorDeTela !== null && document.visibilityState === 'visible') {
    travadorDeTela = await navigator.wakeLock.request('screen');
  }
});