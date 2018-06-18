// despues de contar los turno pregunto los intentos.

		//Si termina el juego

		if(nivel == 'facil' && turnos == 0 || nivel == 'intermedio' && turnos == 0 || nivel == 'experto' && turnos == 0){
			ganador = finjuego(j1,j2);
			alert('Ohhh! Perdiste!');
		}

		//Ganar el juego

		if(nivel == 'facil' && turnos <= 18 || nivel == 'intermedio' && turnos <= 12 || nivel == 'experto' && turnos <= 6){
			alert('Siiii ganaste!');
		}

		//si no hay ganador

		if(ganador==0){
			jugador=tratarjugador(turnos);
		}