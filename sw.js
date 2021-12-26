self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('mcefet').then((cache) => cache.addAll([     
      // html
      '/',
      '/index.html',
      '/sobre.html',
      '/mcefet.webmanifest',

      // css
      '/estilos.css',
      '/fonts.css',
      '/pino-gps.css',

      // js
      '/scripts/hammer.min.js',
      '/scripts/identifica-campus.js',
      '/scripts/localizacao-usuario.js',
      '/scripts/mapacheckbox.js',
      '/scripts/mapeamento-c2.js',
      '/scripts/pesquisa.js',
      '/scripts/rodape.js',
      '/scripts/sobreposicao.js',
      '/scripts/trabalhar-offline.js',
      '/scripts/zoom-no-mapa.js',

      // imagens
      '/images/c1/banheiros.png',
      '/images/c1/base.png',
      '/images/c1/caixas-eletronicos.png',
      '/images/c1/lugares-para-comer.png',
      '/images/c1/lugares-para-descansar.png',
      '/images/c1/predios-e-entradas.png',
      '/images/c2/banheiros.png',
      '/images/c2/base.png',
      '/images/c2/caixas-eletronicos.png',
      '/images/c2/lugares-para-comer.png',
      '/images/c2/lugares-para-descansar2.png',
      '/images/c2/predios-e-entradas2.png',
      '/images/fotos/coutinho.webp',
      '/images/fotos/perfil.jpg',
      // // '/images/fotos/.png',
      // // '/images/fotos/.png',
      // // '/images/fotos/.png',
      // // '/images/fotos/.png',
      // // '/images/fotos/.png',
      // // '/images/fotos/.png',
      '/images/cabecalho.png',
      '/images/comochegar.png',
      '/images/fav.png',
      '/images/gps-icone-cinza.webp',
      '/images/gps-icone-dourado.webp',
      '/images/lugaresnocampus.png',
      '/images/mapacampus.png',
      '/images/menu.png',
      '/images/social-media.png',

      // fontes
      '/fonts/fontawesome-social-webfont.eot',
      '/fonts/fontawesome-social-webfont.svg',
      '/fonts/fontawesome-social-webfont.ttf',
      '/fonts/fontawesome-social-webfont.woff',
      '/fonts/fontawesome-webfont.eot',
      '/fonts/fontawesome-webfont.svg',
      '/fonts/fontawesome-webfont.ttf',
      '/fonts/fontawesome-webfont.woff',
      '/fonts/FontAwesome.otf',
      '/amethyst/Amethyst.ttf'
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