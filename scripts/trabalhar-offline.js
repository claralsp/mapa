if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/mapa/sw.js')
    .then(() => { 
      console.log('Registrou o service worker');
    });
}