
function ativaDepuracaoDoMapeamentoDePredios(campus) {
  // pega tamanho da imagem base
  let mapaVisivelEl = document.querySelector('.mostrando-c1 #mapa1 .base, .mostrando-c2 #mapa2 .base')
  const { width: largura, height: altura } = mapaVisivelEl.getBoundingClientRect()
  const baseEl = document.querySelector(`#mapa${campus === 'novaGameleira' ? 2 : 1} .base`)
  const nomeDaCamadaDeDebug = 'debug-predios'
  
  // cria e configura um canvas
  const canvasEl = document.createElement('canvas')
  canvasEl.width = largura
  canvasEl.height = altura
  canvasEl.classList.add(nomeDaCamadaDeDebug, 'camada', 'images-mapa', 'visivel')
  canvasEl.style.transform = 'translate(0, 0) scale(1)'
  
  // solicita um contexto para desenharmos
  const ctx = canvasEl.getContext('2d')
  const UMA_VOLTA = 2 * Math.PI
  const CORES = ['#51574a', '#447c69', '#74c493', '#8e8c6d', '#e4bf80', '#e9d78e', '#e2975d', '#f19670', '#e16552', '#c94a53', '#a34974', '#993767', '#65387d', '#4e2472', '#9163b6', '#e279a3', '#e0598b', '#7c9fb0', '#5698c4']

  // percorre os prédios desenhando os círculos que o compõem
  for (let predio of predios) {
    const indiceCorAleatoria = Math.floor(Math.random() * CORES.length)
    const [corAleatoria] = CORES.splice(indiceCorAleatoria ?? 0, 1) ?? 'black'

    ctx.strokeStyle = corAleatoria
    ctx.fillStyle = '#fff6'
    ctx.lineWidth = 2

    for (let circulo of predio.circulos) {
      // converte lat/lon para coordenadas do mapa
      const { x, y } = converteLatLonParaPorcentagem(circulo.centro.x, circulo.centro.y, campus)
      const { x: xRaio, y: yRaio } = converteLatLonParaPorcentagem(circulo.centro.x + circulo.raio, circulo.centro.y, campus)
      const raio = calculaDistancia({ x: xRaio, y: yRaio }, { x, y })

      // desenha um círculo
      ctx.beginPath()
      ctx.arc(x * largura, y * altura, raio * altura, 0, UMA_VOLTA)
      ctx.stroke()
      ctx.fill()
    }
  }

  // insere o canvas como uma camada do mapa
  document.querySelector('#mapa2 .mapa-com-camadas').insertBefore(canvasEl, baseEl)
  window.mapasComCamadas[1].layers.push(canvasEl)

  // cria e insere um novo ativador de camada
  const templateAtivador = `
    <div class="custom-control custom-switch form-row">
      <input class="ativa-camada ${nomeDaCamadaDeDebug} custom-control-input" type="checkbox" id="ativa-debug-c2" value="${nomeDaCamadaDeDebug}" checked>
      <label for="ativa-debug-c2" class="custom-control-label">Depuração dos prédios</label>
    </div>
  `
  document.querySelector('#mapa2 .ativadores-de-camadas').innerHTML += templateAtivador
}


let jaAdicionouCamadasDebug = false

function ativaModoDebug() {
  // coloca uma camada de círculos nos prédios do C2 (referente a mapeamento-c2)
  if (jaAdicionouCamadasDebug) return
  jaAdicionouCamadasDebug = true
  ativaDepuracaoDoMapeamentoDePredios('novaGameleira')
  // ativaDepuracaoDoMapeamentoDePredios('novaSuica') ainda não há mapeamento-c1

  // coloca um painel de coordenadas de GPS
  const containerEl = document.querySelector('#parte2')
  const template = `
    <aside id="debug-gps">
      <span class="minimizar">×</span>
      <h3>Informações do GPS</h3>
      <div class="dados-gps">
        <div class="dado-gps">
          <span class="propriedade-gps">Timestamp: </span>
          <span class="valor-gps" id="timestamp">XXX</span>
        </div>      
        <div class="dado-gps">
          <span class="propriedade-gps">Latitude: </span>
          <span class="valor-gps" id="latitude">XXX</span>
        </div>      
        <div class="dado-gps">
          <span class="propriedade-gps">Longitude: </span>
          <span class="valor-gps" id="longitude">XXX</span>
        </div>      
        <div class="dado-gps">
          <span class="propriedade-gps">Altitude: </span>
          <span class="valor-gps" id="altitude">XXX</span>
        </div>      
        <div class="dado-gps">
          <span class="propriedade-gps">Accuracy: </span>
          <span class="valor-gps" id="accuracy">XXX</span>
        </div>      
        <div class="dado-gps">
          <span class="propriedade-gps">Altitude Accuracy: </span>
          <span class="valor-gps" id="altitude-accuracy">XXX</span>
        </div>      
        <div class="dado-gps">
          <span class="propriedade-gps">Heading: </span>
          <span class="valor-gps" id="heading">XXX</span>
        </div>      
        <div class="dado-gps">
          <span class="propriedade-gps">Speed: </span>
          <span class="valor-gps" id="speed">XXX</span>
        </div>      
      </div>
    </aside>
  `
  const debugEl = document.createRange().createContextualFragment(template).firstElementChild
  debugEl.querySelector('.minimizar').addEventListener('click', () => debugEl.classList.toggle('minimizado'))
  containerEl.appendChild(debugEl)
  window.debuggingGPS = true
  atualizaDadosDeGPSEmDebug(window.lastGPSDataReceived)

  // toca sonzinho
  new Audio('sounds/modo-debug-ativado.mp3').play()
}


function atualizaDadosDeGPSEmDebug(gps) {
  const containerEl = document.querySelector('#debug-gps')
  const rootProps = containerEl.querySelectorAll('#timestamp')
  const coordsProps = containerEl.querySelectorAll('.valor-gps:not(#timestamp)')
  const [timestampEl] = rootProps
  const [latEl, lonEl, altEl, accEl, altAccEl, headEl, speedEl] = coordsProps
  
  timestampEl.innerHTML = dataFormatada(gps?.timestamp) ?? 'sem dados'
  latEl.innerHTML = gps?.coords?.latitude ?? 'sem dados'
  lonEl.innerHTML = gps?.coords?.longitude ?? 'sem dados'
  altEl.innerHTML = gps?.coords?.altitude ?? 'sem dados'
  accEl.innerHTML = gps?.coords?.accuracy ?? 'sem dados'
  altAccEl.innerHTML = gps?.coords?.altitudeAccuracy ?? 'sem dados'
  headEl.innerHTML = gps?.coords?.heading ?? 'sem dados'
  speedEl.innerHTML = gps?.coords?.speed ?? 'sem dados'
}

function dataFormatada(timestamp) {
  const d = new Date(timestamp)
  const hours = d.getHours(),
    minutes = d.getMinutes(),
    seconds = d.getSeconds(),
    millis = d.getMilliseconds(),
    month = d.getMonth() + 1,
    day = d.getDate(),
    year = d.getFullYear() % 100

  function pad(d) {
    return (d < 10 ? '0' : '') + d
  }

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${millis} ${pad(day)}/${pad(month)}/${pad(year)}`
}

document.querySelector('#titulopagina').addEventListener('dblclick', e => {
  ativaModoDebug()
})