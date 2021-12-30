self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('mcefet').then((cache) => cache.addAll([     
      // html
      '/mapa/',
      '/mapa/index.html',
      '/mapa/sobre.html',
      '/mapa/mcefet.webmanifest',

      // css
      '/mapa/estilos.css',
      '/mapa/fonts.css',
      '/mapa/pino-gps.css',

      // js
      '/mapa/scripts/hammer.min.js',
      '/mapa/scripts/identifica-campus.js',
      '/mapa/scripts/localizacao-usuario.js',
      '/mapa/scripts/mapacheckbox.js',
      '/mapa/scripts/mapeamento-c2.js',
      '/mapa/scripts/pesquisa.js',
      '/mapa/scripts/rodape.js',
      '/mapa/scripts/sobreposicao.js',
      '/mapa/scripts/tela-sempre-ligada.js',
      '/mapa/scripts/trabalhar-offline.js',
      '/mapa/scripts/zoom-no-mapa.js',

      // imagens
      '/mapa/images/c1/banheiros.png',
      '/mapa/images/c1/base.png',
      '/mapa/images/c1/caixas-eletronicos.png',
      '/mapa/images/c1/lugares-para-comer.png',
      '/mapa/images/c1/lugares-para-descansar.png',
      '/mapa/images/c1/predios-e-entradas.png',
      '/mapa/images/c2/banheiros.png',
      '/mapa/images/c2/base.png',
      '/mapa/images/c2/caixas-eletronicos.png',
      '/mapa/images/c2/lugares-para-comer.png',
      '/mapa/images/c2/lugares-para-descansar2.png',
      '/mapa/images/c2/predios-e-entradas2.png',
      '/mapa/images/fotos/coutinho.webp',
      '/mapa/images/fotos/perfil.jpg',
      // // '/mapa/images/fotos/.png',
      // // '/mapa/images/fotos/.png',
      // // '/mapa/images/fotos/.png',
      // // '/mapa/images/fotos/.png',
      // // '/mapa/images/fotos/.png',
      // // '/mapa/images/fotos/.png',
      '/mapa/images/cabecalho.png',
      '/mapa/images/comochegar.png',
      '/mapa/images/fav.png',
      '/mapa/images/gps-icone-cinza.webp',
      '/mapa/images/gps-icone-dourado.webp',
      '/mapa/images/lugaresnocampus.png',
      '/mapa/images/mapacampus.png',
      '/mapa/images/menu.png',
      '/mapa/images/social-media.png',

      // fontes
      '/mapa/fonts/fontawesome-social-webfont.eot',
      '/mapa/fonts/fontawesome-social-webfont.svg',
      '/mapa/fonts/fontawesome-social-webfont.ttf',
      '/mapa/fonts/fontawesome-social-webfont.woff',
      '/mapa/fonts/fontawesome-webfont.eot',
      '/mapa/fonts/fontawesome-webfont.svg',
      '/mapa/fonts/fontawesome-webfont.ttf',
      '/mapa/fonts/fontawesome-webfont.woff',
      '/mapa/fonts/FontAwesome.otf',
      '/mapa/amethyst/Amethyst.ttf'
    ]))
    .catch(error => {
      console.error(`Error inside sw.js: ${error}`)
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});