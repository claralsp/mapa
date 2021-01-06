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
      A: {
        x: null,
        y: null
      },
      B: {
        x: null,
        y: null
      },
      C: {
        x: null,
        y: null
      }
    },
    mapinha: {
      A: {
        x: null,
        y: null
      },
      B: {
        x: null,
        y: null
      },
      C: {
        x: null,
        y: null
      }
    }
  }
};
let campusAtual = 'novaGameleira';


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

function encontrouPosicao(gps) {
  const posicao = {
    x: gps.coords.latitude,
    y: gps.coords.longitude
  };
  const triangulacao = triangulacoes[campusAtual];
  const baricentricas = converteParaCoordenadasBaricentricas(posicao.x, posicao.y, triangulacao.latitudeLongitude.A, triangulacao.latitudeLongitude.B, triangulacao.latitudeLongitude.C);
  const noMapa = converteBaricentricasParaMapa(baricentricas.x, baricentricas.y, triangulacao.mapinha.A, triangulacao.mapinha.B, triangulacao.mapinha.C);

  const bolotinhaEl = document.querySelector('#bolotinha-do-gps');
  bolotinhaEl.style.left = `calc(${noMapa.x * 100}%  - var(--tamanho) / 2)`;
  bolotinhaEl.style.top = `calc(${noMapa.y * 100}% - var(--tamanho) / 2)`;
}

function tratamentoDeErros(erro) {
  switch (erro.code) {
    case erro.PERMISSION_DENID:
      alert("Geolocalização rejeitada!");
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

function atualizaPosicao() {
  if (navigator.geolocation) {

    //timeout: tempo limite para obter a geolocalização: 30s
    let options = { enableHighAccuracy: true, timeout: 30000 };
    navigator.geolocation.watchPosition(encontrouPosicao, tratamentoDeErros, options);
  } else {
    alert("Localização não suportada pelo navegador!");
  }

}

