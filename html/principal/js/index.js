	function scrollwin(){
		window.scroll({
			top: 0, 
			left: 0, 
			behavior: 'smooth' 
		});
	}

	function detectarNavegador(){
		var agente = navigator.userAgent;
		var navegador = '';
		if(agente.includes('Edge/') || agente.includes('Trident')){
			navegador = 'Microsoft';
		}else if(agente.includes('Firefox/')){
			navegador = 'Firefox';
		}else {
			navegador = 'Chrome';
		}

		return navegador;
	}




	var imagenes;
	var contenidoImagenes = [
	'North Zone of Spain needs water inmediatly',
	'Wonderful views are getting worse',
	'Ecosystems need to come back to life'
	];
	var titulos = [
	'North Zone',
	'Wonderful brige',
	'Ecosystems'
	];

	var navegador = detectarNavegador();
	if(navegador=='Microsoft'){
		imagenes = ['desierto.jxr','sequia1.jxr','sequia2.jxr'];
	}else if(navegador=='Firefox'){
		imagenes = ['desierto.jpg','sequia1.jpg','sequia2.jpg'];
	}else {
		imagenes = ['desierto.webp','sequia1.webp','sequia2.webp'];
	}
	

	function crearImagenes(){
		var carta  =  document.getElementById('baraja');


		for (var i = 0; i < imagenes.length; i++) {
			var caja  = document.createElement('div');
			var titulo = document.createElement('h2');
			titulo.setAttribute('class','grid_12');
			titulo.innerHTML = titulos[i];
			caja.appendChild(titulo);


			var divLimpiar= document.createElement('div');
			divLimpiar.setAttribute('class','clear');
			caja.appendChild(divLimpiar);


			var caja2 = document.createElement('div');
			caja2.style.position = 'relative';
			var contenido = document.createElement('div');
			contenido.setAttribute('class','contenido');
			contenido.innerHTML = contenidoImagenes[i] + '<br><br>';
			var boton = document.createElement('a');
			boton.setAttribute('href','');
			boton.innerHTML = 'Show more';
			contenido.appendChild(boton);
			
			caja2.appendChild(contenido);


			var imagen = document.createElement('img');
			imagen.src = '../../img/' + imagenes[i];
			imagen.setAttribute('alt','');
			caja2.appendChild(imagen);


			caja.appendChild(caja2);
			
			baraja.appendChild(caja);
		}


	}

