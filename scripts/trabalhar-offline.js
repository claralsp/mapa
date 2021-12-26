if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('../sw.js')
    .then(() => { 
      console.log('Registrou o service worker');
    });
}