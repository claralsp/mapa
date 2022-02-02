if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register(location.pathname + 'sw.js')
    // .register('/sw.js') em ambiente de dev. local
    // .register('/mapa/sw.js') no ambiente do github
    .then(() => { 
      console.log('Registrou o service worker');
    }, (erro) => {
      console.error('Erro ao registrar service worker: ', erro)
    });
}
