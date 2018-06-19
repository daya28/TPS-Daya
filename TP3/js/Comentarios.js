if(nivel == 'facil' && total == 0 || nivel == 'intermedio' && total == 0 || nivel == 'experto' && total == 0){
			ganador = finjuego(j1,j2);
			alert('Ohhh! Perdiste!');
		}

		//Ganar el juego

		if(nivel == 'facil' && total == 6 || nivel == 'intermedio' && total == 6 || nivel == 'experto' && total == 6){
			alert('Siiii ganaste!');
		}

		//si no hay ganador

		if(ganador == 0){
			jugador=tratarjugador(turnos);
		}