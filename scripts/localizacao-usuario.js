const triangulacoes = {
  novaGameleira: {
    latitudeLongitude: {
      A: { // entrada do prédio da civil
        x: -19.93985382312717,
        y: -43.998469856830965
      },
      B: { // rua atrás da cozinha do cafézinho de professores do p. principal
        x: -19.938572939813014,
        y: -43.9985154544082
      },
      C: { // fim da rua atrás do prédio da biblioteca
        x: -19.93972979247039,
        y: -43.99988578681686
      }
    },
    mapinha: {
      A: {
        x: 0.378350515,
        y: 0.154577883
      },
      B: {
        x: 0.184536082,
        y: 0.561236623
      },
      C: {
        x: 0.716494845,
        y: 0.418549346
      }
    }
  },
  novaSuica: {
    latitudeLongitude: {
      A: { // meio da obra de arte na amazonas
        x: -19.930120919621533,
        y: -43.979031681148165
      },
      B: { // meio do prédio atrás do ginásio
        x: -19.929723710211455,
        y: -43.97609730405467
      },
      C: { // caixa d'água do bandeijão
        x: -19.930579049671913,
        y: -43.978504629912266
      }
    },
    mapinha: {
      A: {
        x: 0.144375554,
        y: 0.397344229
      },
      B: {
        x: 0.916740478,
        y: 0.477017365
      },
      C: {
        x: 0.251550044,
        y: 0.567926456
      }
    }
  }
};

window.campusAtual = { usuarioVendo: 'novaSuica', usuarioPosicionado: null };

function converteParaCoordenadasBaricentricas(x, y, A, B, C) {
  const origem = B;
  const base1 = {
    x: A.x - B.x,
    y: A.y - B.y
  };
  const base2 = {
    x: C.x - B.x,
    y: C.y - B.y
  };
  const PmenosOrigem = {
    x: x - origem.x,
    y: y - origem.y
  };

  const coordenadasBaricentricas = {
    x: null,
    y: null
  };


  coordenadasBaricentricas.y = (PmenosOrigem.y * base1.x - PmenosOrigem.x * base1.y) / (base1.x * base2.y - base1.y * base2.x);
  coordenadasBaricentricas.x = (PmenosOrigem.x - coordenadasBaricentricas.y * base2.x) / base1.x;

  return coordenadasBaricentricas;
}

function converteBaricentricasParaMapa(x, y, A, B, C) {
  const origem = B;
  const base1 = {
    x: A.x - B.x,
    y: A.y - B.y
  };
  const base2 = {
    x: C.x - B.x,
    y: C.y - B.y
  };

  return {
    x: origem.x + x * base1.x + y * base2.x,
    y: origem.y + x * base1.y + y * base2.y
  };
}

function converteLatLonParaPorcentagem(latitude, longitude, campusAtual) {
  const triangulacao = triangulacoes[campusAtual];
  const baricentricas = converteParaCoordenadasBaricentricas(latitude, longitude, triangulacao.latitudeLongitude.A, triangulacao.latitudeLongitude.B, triangulacao.latitudeLongitude.C);
  const noMapa = converteBaricentricasParaMapa(baricentricas.x, baricentricas.y, triangulacao.mapinha.A, triangulacao.mapinha.B, triangulacao.mapinha.C);

  return noMapa;
}


function posicionaMarcador(gps) {
  const idMarcador = window.campusAtual.usuarioPosicionado === 'novaSuica' ? 'marcador1' : 'marcador2';
  const marcadorEl = document.querySelector(`#${idMarcador}`);
  
  const noMapa = converteLatLonParaPorcentagem(gps.coords.latitude, gps.coords.longitude, window.campusAtual.usuarioPosicionado);
  
  marcadorEl.style.left = `calc(${noMapa.x * 100}%  - var(--tamanho) / 2)`;
  marcadorEl.style.top = `calc(${noMapa.y * 100}% - var(--tamanho) * 1.2)`;
}

function identificaPredioOndeEsta(gps) {
  const predio = localizarPredio(gps);
  const identificacaoEl = document.querySelector('.identificacao-do-predio');
  if (predio) {
    identificacaoEl.querySelector('.predio-do-usuario').innerText = predio.nome;
  }
  identificacaoEl.classList.toggle('localizado', predio !== null);

  return predio;
}


function encontrouPosicao(gps) {
  // isto é usado quando ativamos modo debug (popular dados iniciais)
  window.lastGPSDataReceived = gps

  // 1. identifica o campus (se algum)
  const campusOndeEsta = identificarCampusContinuamente(gps)
  if (campusOndeEsta !== window.campusAtual.usuarioPosicionado) {
    document.dispatchEvent(new CustomEvent('campuschanged', { detail: { usuarioPosicionado: campusOndeEsta, preventAutoChange: true }}));
  }

  // 2. verifica se está dentro de um prédio desse campus
  const predio = identificaPredioOndeEsta(gps);
  if (predio !== window.ultimoPredioOndeEstava) {
    let caminhoSom = predio ? 'saiu-de-predio' : 'entrou-em-predio';
    caminhoSom = `sounds/${caminhoSom}.wav`;
    try {
      new Audio(caminhoSom).play();
    } catch (erro) {
      console.debug('Erro ao tocar som referente a prédios: ', erro);
    }
    window.ultimoPredioOndeEstava = predio;
  }


  if (!campusOndeEsta) {
    return;
  }

  // 3. posiciona marcador do usuário
  posicionaMarcador(gps);

  // 4. se estiver em modo debug, atualiza dados na interface
  if (window.debuggingGPS) {
    atualizaDadosDeGPSEmDebug(gps);
  }
}

function tratamentoDeErros(erro) {
  switch (erro.code) {
    case erro.PERMISSION_DENID:
      alert("Localização rejeitada!");
      break;

    case erro.POSITION_UNAVAILABLE:
      alert("Localização indisponível!");
      break;

    case erro.timeout:
      alert("Resquisição expirada.");
      break;

    case erro.UNKNOWN_ERROR:
      alert("Erro desconhecido.");
      break;
  }
}


// ativa o GPS continuamente
if (navigator.geolocation) {
  navigator.geolocation.watchPosition(encontrouPosicao, tratamentoDeErros, {
    enableHighAccuracy: true
  });
}