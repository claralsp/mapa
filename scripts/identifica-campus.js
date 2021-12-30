navigator.geolocation.getCurrentPosition(localizarCampus);
let id = navigator.geolocation.watchPosition(acompanharPosicao);


let campi = [{
    nome: "novaSuica",
    latMinima: -19.931815506981785,
    latMaxima: -19.928971182124805,
    longMinima: -43.97855065037827,
    longMaxima: -43.9760079163305
  },
  {
    nome: "novaGameleira",
    latMinima: -19.941016184384264,
    latMaxima: -19.9376526075887,
    longMinima: -44.00112230991754,
    longMaxima: -43.99764616716641
  }
];

function localizarCampus(geoLocalizacao) {
  let x = (geoLocalizacao.coords.latitude);
  let y = (geoLocalizacao.coords.longitude);
  let userDentroCampus = false;
  let campusUser = null;
  let bodyEl = document.querySelector("body");

  for (let campus of campi) {
    userDentroCampus = x >= campus.latMinima && x <= campus.latMaxima && y >= campus.longMinima && y <= campus.longMaxima;
    if (userDentroCampus) {
      campusUser = campus;
      break;
    }
  }

  if (campusUser != null) {
    if (campusUser.nome === "novaSuica") {
      bodyEl.classList.add('usuario-no-c1');
    } else if (campusUser.nome === "novaGameleira") {
      bodyEl.classList.remove('mostrando-c1');
      bodyEl.classList.add('mostrando-c2');
      bodyEl.classList.add('usuario-no-c2');
    }
  }

  const mostrandoCampus = campusUser?.nome || 'novaSuica';
  document.dispatchEvent(new CustomEvent('campuschanged', { detail: { campus: mostrandoCampus } }));

}

function acompanharPosicao(geoLocalizacao) {
  let x = (geoLocalizacao.coords.latitude);
  let y = (geoLocalizacao.coords.longitude);
  let userDentroCampus = false;
  let campusUser = null;
  let bodyEl = document.querySelector("body");

  for (let campus of campi) {
    userDentroCampus = x >= campus.latMinima && x <= campus.latMaxima && y >= campus.longMinima && y <= campus.longMaxima;
    if (userDentroCampus) {
      campusUser = campus;
      break;
    }
  }

  if (campusUser != null && campusUser.nome === "novaSuica") {
    bodyEl.classList.add('usuario-no-c1');
  } else if (campusUser != null && campusUser.nome === "novaGameleira") {
    bodyEl.classList.add('usuario-no-c2');
  }
}