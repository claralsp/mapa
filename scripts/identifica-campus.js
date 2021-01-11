navigator.geolocation.getCurrentPosition(localizarCampus);
let id = navigator.geolocation.watchPosition(acompanharPosicao);

let campi = [
    {
        nome: "campus1",
        latMinima: -19.930157556478836,
        latMaxima: -19.93020565209033,
        longMinima: -43.97588977591026,
        longMaxima: -43.979443789664685
    },
    {
        nome: "campus2",
        latMinima: -19.938062048585753,
        latMaxima: -19.940278127250064,
        longMinima: -43.997893198166366,
        longMaxima: -44.000726569341225
    }
]

function localizarCampus(geoLocalizacao) 
{
    let x = (geoLocalizacao.coords.latitude);
    let y = (geoLocalizacao.coords.longitude);
    let userDentroCampus = false;
    let campusUser = null;
    let bodyEl = document.querySelector("body");
  
    for(let campus of campi) {
        userDentroCampus = x>=campus.latMinima && x<=campus.latMaxima && y>=campus.longMinima && y<=campus.longMaxima;
        if(userDentroCampus) {
          campusUser = campus;
          console.log("Voce esta no " + campusUser.nome);
          break;
        }       
    }

    if(!userDentroCampus) {
        console.log("Voce nao esta em nenhum campus");
    }

    if(campusUser.nome == "campus1") {
        bodyEl.classList.add('usuario-no-c1');
    }
    else if(campusUser.nome == "campus2") {
        bodyEl.classList.remove('mostrando-c1');
        bodyEl.classList.add('mostrando-c2');
        bodyEl.classList.add('usuario-no-c2');
    }
  
}

function acompanharPosicao(geoLocalizacao) 
{
    let x = (geoLocalizacao.coords.latitude);
    let y = (geoLocalizacao.coords.longitude);
    let userDentroCampus = false;
    let campusUser = null;
    let bodyEl = document.querySelector("body");
  
    for(let campus of campi) {
        userDentroCampus = x>=campus.latMinima && x<=campus.latMaxima && y>=campus.longMinima && y<=campus.longMaxima;
        if(userDentroCampus) {
          campusUser = campus;
          break;
        }       
    }

    if(campusUser.nome == "campus1") {
        bodyEl.classList.add('usuario-no-c1');
    }
    else if(campusUser.nome == "campus2") {
        bodyEl.classList.add('usuario-no-c2');
    }
}