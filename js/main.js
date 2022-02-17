function tocaSom(id){

const elemento = document.querySelector(id); // Busca elemento atraves de seus seletores.
	// Checa se o elemento é um audio.
	if (elemento != null && elemento.localName === 'audio') { 
		elemento.play();
	}
	else {
		console.log('Elemento não encontrado');
	}
}

const listaDeTeclas = document.querySelectorAll('.tecla');


for(i = 0; i < listaDeTeclas.length; i++){

	const tecla = listaDeTeclas[i];
	const instrumento = tecla.classList[1];

	// Template String
	const idAudio = `#som_${instrumento}`; // ou tocaSom("#som_"+instrumento);

	// Função anonima em JavaScript
	// listaDeTeclas[i].onclick sem ()
	listaDeTeclas[i].onclick = function(){
		tocaSom(idAudio);
	}

	// tecla.onkeydown sem ()
	tecla.onkeydown = function(evento){
		// === compara valor e tipo do dado.
		if(evento.code === 'Enter' || evento.code === 'Space'){  
		tecla.classList.add('ativa'); // Insere 'ativa' dentro da classe HTML para ficar em vermelho.
		}
		
	}

	// tecla.onkeyup sem ()
	tecla.onkeyup = function(){
		tecla.classList.remove('ativa'); // Remove 'ativa' dentro da classe HTML para ficar branco.
	}
}