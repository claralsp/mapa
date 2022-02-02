navigator.geolocation.getCurrentPosition(localizarPredio);

let predios = [{
    nome: "Bandejão",
    circulos: [{
        raio: 0.00010470912090127272,
        centro: {
          x: -19.939229,
          y: -44.000017
        }
      },
      {
        raio: 0.00010470912090127272,
        centro: {
          x: -19.939138,
          y: -43.999863
        }
      },
      {
        raio: 0.00010470912090127272,
        centro: {
          x: -19.939051,
          y: -43.999704
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
    nome: "Prédio 20",
    circulos: [{
        raio: 0.00013370115930708704,
        centro: {
          x: -19.938792,
          y: -43.999849
        }
      },
      {
        raio: 0.00013370115930708704,
        centro: {
          x: -19.938874,
          y: -43.999998
        }
      },
      {
        raio: 0.00013370115930708704,
        centro: {
          x: -19.938964,
          y: -44.000148
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
    nome: "DECOM (p. 17)",
    circulos: [{
      raio: 0.00013535163631348725,
      centro: {
        x: -19.939583,
        y: -43.998186
      }
    }],
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
    nome: "Prédio Principal",
    circulos: [{
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
    nome: "Prédio 18",
    circulos: [{
      raio: 0.00012509663554410555,
      centro: {
        x: -19.939978,
        y: -43.998959
      }
    }],
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
    nome: "Prédio 5",
    circulos: [{
        raio: 0.00009716995420030493,
        centro: {
          x: -19.939590,
          y: -44.000381
        }
      },
      {
        raio: 0.00009716995420030493,
        centro: {
          x: -19.939653,
          y: -44.000347
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
    nome: "Prédio 4",
    circulos: [{
        raio: 0.0000924391691864567,
        centro: {
          x: -19.939501,
          y: -44.000193
        }
      },
      {
        raio: 0.0000924391691864567,
        centro: {
          x: -19.939643,
          y: -44.000068
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
    nome: "Pós-graduação",
    circulos: [{
      raio: 0.00015482893786553448,
      centro: {
        x: -19.939567,
        y: -43.999763
      }
    }],
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
    nome: "Biblioteca",
    circulos: [{
      raio: 0.00013771347065699022,
      centro: {
        x: -19.939425,
        y: -43.999525
      }
    }],
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
    nome: "Oficinas",
    circulos: [{
        raio: 0.00009415461960110693,
        centro: {
          x: -19.939239,
          y: -44.000596
        }
      },
      {
        raio: 0.00009415461960110693,
        centro: {
          x: -19.939389,
          y: -44.000655
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
    nome: "Prédio 12 (Civil)",
    circulos: [{
        raio: 0.0001333304166351025,
        centro: {
          x: -19.939871,
          y: -43.99828
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
          x: -19.940049,
          y: -43.998616
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
    nome: "Prédios 8 e 9",
    circulos: [{
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
    nome: "CEMIG",
    circulos: [{
      raio: 0.00009968951800459939,
      centro: {
        x: -19.938686,
        y: -44.000189
      }
    }],
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
    nome: "Prédio 19",
    circulos: [{
        raio: .0001315972440580406,
        centro: {
          x: -19.939842,
          y: -43.999406
        }
      },
      {
        raio: .0001015972440580406,
        centro: {
          x: -19.939812,
          y: -43.999263
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
    nome: "Portaria",
    circulos: [{
      raio: 0.00011766595135621686,
      centro: {
        x: -19.938274,
        y: -43.999333
      }
    }],
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

// let paraOndeQueroIr = prompt('Qual prédio quer ir?');
// videoEl.src = predio.videos[paraOndeQueroIr]

function localizarPredio(geoLocalizacao) {
  let x = (geoLocalizacao.coords.latitude);
  let y = (geoLocalizacao.coords.longitude);
  let userDentroCirculo = false;
  let predioUser = null;

  for (let predio of predios) {
    for (let circulo of predio.circulos) {

      let distanciaUserACirculo = calculaDistancia({
          x: x,
          y: y
        },
        circulo.centro
      );

      userDentroCirculo = distanciaUserACirculo <= circulo.raio;

      if (userDentroCirculo) {
        predioUser = predio;
        break;
      }
    }
    if (userDentroCirculo) {
      break;
    }
  }
  // console.log(predioUser);

  return predioUser;
}


function calculaDistancia(a, b) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}


