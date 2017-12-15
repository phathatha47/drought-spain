		var intro = document.getElementById('intro');
		var menu = document.getElementsByClassName('menu')[0];
		var hijosMenu = menu.getElementsByTagName('a');

		

		function empezar(){
			var menu = document.getElementsByTagName('nav')[0];
			menu.style.display = 'none';

			setTimeout(function(){
				menu.style.display = 'block';
			},intro.duration*1000);

			
			
		}