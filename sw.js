const NOME_DO_CACHE = 'mcefet'
const PREFIXO_DE_CAMINHO = location.pathname.substring(location.pathname.indexOf('/sw.js'))
const ALL_FILES = [
  // html
  '/',
  '/index.html',
  '/sobre.html',
  '/mcefet.webmanifest',

  // // css
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
  '/scripts/tela-sempre-ligada.js',
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
].map(path => PREFIXO_DE_CAMINHO + path)


async function fetchThenCache(e) {
  try {
    // tenta usar a rede primeiro
    const [resposta, cache] = await Promise.all([fetch(e.request), caches.open(NOME_DO_CACHE)])
    await cache.put(e.request.url, resposta.clone())
    return resposta

  } catch (erro) {
    console.info('Problema no fetch de ', e.request, ': ', erro)
    return await caches.match(e.request)
  }
}

async function clearCache() {
  const keys = await caches.keys()
  return await Promise.all(keys.map(key => caches.delete(key)))
}

self.addEventListener('fetch', async e => {
  e.respondWith(fetchThenCache(e))
})

self.addEventListener('activate', async e => {
  e.waitUntil(clearCache())
  return self.clients.claim() 
})