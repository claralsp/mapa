navigator.geolocation.getCurrentPosition(localizarPredio);

let predios = [
  {
    nome: "bandex",
    circulos: [
      {
        raio: 0.00010470912090127272,
        centro: {
          x: -19.939239,
          y: -43.999947
        }
      },
      {
        raio: 0.00010470912090127272,
        centro: {
          x: -19.939178,
          y: -43.999823
        }
      },
      {
        raio: 0.00010470912090127272,
        centro: {
          x: -19.939091,
          y: -43.999664
        }
      }
    ],
    videos: {
      principal: '',
      p20: '',
      decom: '',
      p18: '',
      p4: '',
      p5: '',
      depart: '',
      biblioteca: '',
      oficinas: '',
      p12: '',
      p8e9: '',
      cemig: '',
      p19: '',
      portaria: ''
    }
  },
  {
    nome: "p20",
    circulos: [
      {
        raio: 0.00013370115930708704,
        centro: {
          x: -19.938832,
          y: -43.999809
        }
      },
      {
        raio: 0.00013370115930708704,
        centro: {
          x: -19.938914,
          y: -43.999958
        }
      },
      {
        raio: 0.00013370115930708704,
        centro: {
          x: -19.939004,
          y: -44.000108
        }
      },
    ],
    videos: {
      bandex: '',
      decom: '',
      principal: '',
      p18: '',
      p4: '',
      p5: '',
      depart: '',
      biblioteca: '',
      oficinas: '',
      p12: '',
      p8e9: '',
      cemig: '',
      p19: '',
      portaria: ''
    }
  },
  {
    nome: "decom",
    circulos: [
      {
        raio: 0.00011535163631348725,
        centro: {
          x: -19.939583,
          y: -43.998186
        }
      }
    ],
    videos: {
      bandex: '',
      p20: '',
      principal: '',
      p18: '',
      p4: '',
      p5: '',
      depart: '',
      biblioteca: '',
      oficinas: '',
      p12: '',
      p8e9: '',
      cemig: '',
      p19: '',
      portaria: ''
    }
  },
  {
    nome: "principal",
    circulos: [
      {
        raio: 0.00011374532957721413,
        centro: {
          x: -19.938619,
          y: -43.998829
        }
      },
      {
        raio: 0.00011374532957721413,
        centro: {
          x: -19.939047,
          y: -43.999272
        }
      },
      {
        raio: 0.00011374532957721413,
        centro: {
          x: -19.938986,
          y: -43.999152
        }
      },
      {
        raio: 0.00011374532957721413,
        centro: {
          x: -19.938905,
          y: -43.999006
        }
      },
      {
        raio: 0.00011374532957721413,
        centro: {
          x: -19.938802,
          y: -43.998837
        }
      },
      {
        raio: 0.00011374532957721413,
        centro: {
          x: -19.938696,
          y: -43.998676
        }
      },
      {
        raio: 0.00011374532957721413,
        centro: {
          x: -19.938615,
          y: -43.998558
        }
      },
      {
        raio: 0.00011374532957721413,
        centro: {
          x: -19.938902,
          y: -43.998703
        }
      },
      {
        raio: 0.00011374532957721413,
        centro: {
          x: -19.939054,
          y: -43.998636
        }
      },
      {
        raio: 0.00011374532957721413,
        centro: {
          x: -19.939104,
          y: -43.998542
        }
      },
      {
        raio: 0.00011374532957721413,
        centro: {
          x: -19.939213,
          y: -43.998714
        }
      },
      {
        raio: 0.00011374532957721413,
        centro: {
          x: -19.939281,
          y: -43.998835
        }
      },
      {
        raio: 0.00011374532957721413,
        centro: {
          x: -19.939376,
          y: -43.999022
        }
      }
    ],
    videos: {
      bandex: '',
      p20: '',
      decom: '',
      p18: '',
      p4: '',
      p5: '',
      depart: '',
      biblioteca: '',
      oficinas: '',
      p12: '',
      p8e9: '',
      cemig: '',
      p19: '',
      portaria: ''
    }
  },
  {
    nome: "p18",
    circulos: [
      {
        raio: 0.00015009663554410555,
        centro: {
          x: -19.939968,
          y: -43.998949
        }
      }
    ],
    videos: {
      bandex: '',
      p20: '',
      principal: '',
      decom: '',
      p5: '',
      p4: '',
      depart: '',
      biblioteca: '',
      oficinas: '',
      p12: '',
      p8e9: '',
      cemig: '',
      p19: '',
      portaria: ''
    }
  },
  {
    nome: "p5",
    circulos: [
      {
        raio: 0.00009716995420030493,
        centro: {
          x: -19.939590,
          y: -44.000281
        }
      },
      {
        raio: 0.00009716995420030493,
        centro: {
          x: -19.939653,
          y: -44.000247
        }
      }
    ],
    videos: {
      bandex: '',
      p20: '',
      principal: '',
      decom: '',
      p18: '',
      p4: '',
      depart: '',
      biblioteca: '',
      oficinas: '',
      p12: '',
      p8e9: '',
      cemig: '',
      p19: '',
      portaria: ''
    }
  },
  {
    nome: "p4",
    circulos: [
      {
        raio: 0.0000924391691864567,
        centro: {
          x: -19.939511,
          y: -44.000113
        }
      },
      {
        raio: 0.0000924391691864567,
        centro: {
          x: -19.939623,
          y: -44.000038
        }
      },
      {
        raio: 0.0000924391691864567,
        centro: {
          x: -19.939697,
          y: -43.999992
        }
      }
    ],
    videos: {
      bandex: '',
      p20: '',
      principal: '',
      decom: '',
      p5: '',
      p18: '',
      depart: '',
      biblioteca: '',
      oficinas: '',
      p12: '',
      p8e9: '',
      cemig: '',
      p19: '',
      portaria: ''
    }
  },
  {
    nome: "depart",
    circulos: [
      {
        raio: 0.00015482893786553448,
        centro: {
          x: -19.939577,
          y: -43.999713
        }
      }
    ],
    videos: {
      bandex: '',
      p20: '',
      principal: '',
      decom: '',
      p5: '',
      p4: '',
      p18: '',
      biblioteca: '',
      oficinas: '',
      p12: '',
      p8e9: '',
      cemig: '',
      p19: '',
      portaria: '',
    }
  },
  {
    nome: "biblioteca",
    circulos: [
      {
        raio: 0.00013771347065699022,
        centro: {
          x: -19.939435,
          y: -43.999485
        }
      }
    ],
    videos: {
      bandex: '',
      p20: '',
      principal: '',
      decom: '',
      p5: '',
      p4: '',
      p18: '',
      depart: '',
      oficinas: '',
      p12: '',
      p8e9: '',
      cemig: '',
      p19: '',
      portaria: ''
    }
  },
  {
    nome: "oficinas",
    circulos: [
      {
        raio: 0.00008415461960110693,
        centro: {
          x: -19.939259,
          y: -44.000506
        }
      },
      {
        raio: 0.00008415461960110693,
        centro: {
          x: -19.939409,
          y: -44.000565
        }
      }
    ],
    videos: {
      bandex: '',
      p20: '',
      principal: '',
      decom: '',
      p18: '',
      p4: '',
      p5: '',
      depart: '',
      biblioteca: '',
      p12: '',
      p8e9: '',
      cemig: '',
      p19: '',
      portaria: ''
    }
  },
  {
    nome: "p12",
    circulos: [
      {
        raio: 0.0001333304166351025,
        centro: {
          x: -19.939851,
          y: -43.99830
        }
      },
      {
        raio: 0.0001333304166351025,
        centro: {
          x: -19.939947,
          y: -43.998472
        }
      },
      {
        raio: 0.0001333304166351025,
        centro: {
          x: -19.940029,
          y: -43.998636
        }
      }
    ],
    videos: {
      bandex: '',
      p20: '',
      principal: '',
      decom: '',
      p18: '',
      p4: '',
      p5: '',
      depart: '',
      biblioteca: '',
      oficinas: '',
      p8e9: '',
      cemig: '',
      p19: '',
      portaria: ''
    }
  },
  {
    nome: "p8e9",
    circulos: [
      {
        raio: 0.00008935882720915027,
        //esse circulo eh do que seria o p8, o menorzinho
        centro: {
          x: -19.939441,
          y: -43.998707
        }
      },
      {
        raio: 0.00008935882720915027,
        //p9
        centro: {
          x: -19.939521,
          y: -43.998850
        }
      },
      {
        raio: 0.00008935882720915027,
        // p9 tambem
        centro: {
          x: -19.939577,
          y: -43.998960
        }
      }
    ],
    videos: {
      bandex: '',
      p20: '',
      principal: '',
      decom: '',
      p18: '',
      p4: '',
      p5: '',
      depart: '',
      biblioteca: '',
      oficinas: '',
      p12: '',
      cemig: '',
      p19: '',
      portaria: ''
    }
  },
  {
    nome: "cemig",
    circulos: [
      {
        raio: 0.00009968951800459939,
        centro: {
          x: -19.938716,
          y: -44.000119
        }
      }
    ],
    videos: {
      bandex: '',
      p20: '',
      principal: '',
      decom: '',
      p5: '',
      p4: '',
      p18: '',
      depart: '',
      oficinas: '',
      p12: '',
      p8e9: '',
      biblioteca: '',
      p19: '',
      portaria: ''
    }
  },
  {
    nome: "p19",
    circulos: [
      {
        raio: .0001015972440580406,
        centro: {
          x: -19.939842,
          y: -43.999406
        }
      },
      {
        raio: .0001015972440580406,
        centro: {
          x: -19.939832,
          y: -43.999243
        }
      }
    ],
    videos: {
      bandex: '',
      p20: '',
      principal: '',
      decom: '',
      p5: '',
      p4: '',
      p18: '',
      depart: '',
      oficinas: '',
      p12: '',
      p8e9: '',
      biblioteca: '',
      cemig: '',
      portaria: ''
    }
  },
  {
    nome: "portaria",
    circulos: [
      {
        raio: 0.00007766595135621686,
        centro: {
          x: -19.938274,
          y: -43.999333
        }
      }
    ],
    videos: {
      bandex: '',
      p20: '',
      principal: '',
      decom: '',
      p5: '',
      p4: '',
      p18: '',
      depart: '',
      oficinas: '',
      p12: '',
      p8e9: '',
      cemig: '',
      p19: '',
      biblioteca: ''
    }
  }
];

let paraOndeQueroIr = prompt('Qual prédio quer ir?');
videoEl.src = predio.videos[paraOndeQueroIr]

function localizarPredio(geoLocalizacao)
{
  let x = (geoLocalizacao.coords.latitude);
  let y = (geoLocalizacao.coords.longitude);
  let userDentroCirculo = false;
  let predioUser = null;

  for(let predio of predios) {
    for(let circulo of predio.circulos) {

      let distanciaUserACirculo = calculaDistancia(
        {
          x:x,
          y:y
        },
        circulo.centro
      );

      userDentroCirculo = distanciaUserACirculo <= circulo.raio;

      if(userDentroCirculo) {
        predioUser = predio;
        break;
      }
    }
    if(userDentroCirculo) {
      break;
    }
  }
  console.log(predioUser);

}


function calculaDistancia(a, b)
{
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}