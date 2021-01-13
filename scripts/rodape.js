const botoesRodape = document.querySelectorAll('.btn-rodape');

for (let btnRodapeEl of botoesRodape) {
	btnRodapeEl.addEventListener('click', function(e) {
    // deixa todos inativos
    for (let el of botoesRodape) {
    	el.classList.remove('btn-rodape-ativo');
    }
   
    // ativa apenas o clicado
  	let btnRdpEl = e.currentTarget;
    btnRdpEl.classList.add('btn-rodape-ativo');

    // mostra o conteúdo do botão que foi clicado
    mostraConteudoDoBotao(btnRdpEl.id);
  });
}


function mostraConteudoDoBotao(idBotao) {
  switch (idBotao) {
    case 'btn-mapa-campus':
      document.body.classList.add('aba-mapa-ativa');
      document.body.classList.remove('aba-busca-ativa');
      document.body.classList.remove('aba-como-chegar-ativa');
      break;
      
    case 'btn-lugares-campus':
      document.body.classList.remove('aba-mapa-ativa');
      document.body.classList.add('aba-busca-ativa');
      document.body.classList.remove('aba-como-chegar-ativa');
      break;
      
      case 'btn-como-chegar':
      document.body.classList.remove('aba-mapa-ativa');
      document.body.classList.remove('aba-busca-ativa');
      document.body.classList.add('aba-como-chegar-ativa');
      break;
  }
}
