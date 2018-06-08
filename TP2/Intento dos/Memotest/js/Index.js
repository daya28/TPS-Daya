/* DECLARO MIS VARIABLES */

var path = "img/";
var primera = true;
var turno = 0;
var j1 = 0;
var j2 = 0;
var pid;
var total = 0;
var ganador = 0;

/* CREAMOS EL ARRAY CON EL PATH DE IMAGENES */

var arrayImagenes=[
	{'iconos':'mouse','img':'img/01.jpg'},
	{'iconos':'mouse','img':'img/01.jpg'},
	{'iconos':'mundo','img':'img/02.jpg'},
	{'iconos':'mundo','img':'img/02.jpg'},
	{'iconos':'megusta','img':'img/03.jpg'},
	{'iconos':'megusta','img':'img/03.jpg'},
	{'iconos':'mail','img':'img/04.jpg'},
	{'iconos':'mail','img':'img/04.jpg'},
	{'iconos':'sms','img':'img/05.jpg'},
	{'iconos':'sms','img':'img/05.jpg'},
	{'iconos':'nube','img':'img/06.jpg'},
	{'iconos':'nube','img':'img/06.jpg'},
]

/*
function crearImagenes(){
	for (var i=0; i<=12; i++){

		if(i<= 11){
			arrayImagenes[i] = path+i+'.jpg';
		}else{
			j= i-12;
			arrayImagenes[i] = path+j+'.jpg';
		}
	} 

	
}
*/

/* ALEATORIO */
/*
function shuffle(arrayImagenes){
	for (var i=0; i<=12; i++){
	var i=array.length;
	while(i--){
		var j=Math.floor(Math.random()*(i+1));
		var tmp=array[i];
		array[i]=array[j];
		array[j]=tmp;
	}
	console.log(i)	
}
}
*/

function shuffle(arrayImagenes) {
	var j, x, i;
    for (i = arrayImagenes.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arrayImagenes[i].img;
        arrayImagenes[i].img = arrayImagenes[j].img;
        arrayImagenes[j].img = x;
    }
    return arrayImagenes;
    console.log(arrayImagenes);
    console.log('hola');
}



/* JUGAR */

function jugar(){
	//crearImagenes();
	document.getElementById('fichas').style.display = "block";
	document.getElementById("jugador1").style.color = "#03BF35";
	//document.getElementById("jugar").style.display="none";

}

function imgcheck(imagen){
	id=imagen.id;
	imagen.src = arrayImagenes[id].img;

	// Turno del jugador

	jugador = tratarjugador(turno);
primera
	if(primera){
		prim=imagen;
		primera=false;
		pid=prim.id;
		pid.src=arrayImagenes[id].img;
		//imagen.id="si";
	}else{
		// Verificamos si son iguales
		if(arrayImagenes[pid].img == arrayImagenes[id].img){ //preguntar si las imagenes son iguales, si no lo son deben voltearse nuevamente
			total++;
			console.log('total: '+total);  
			if(jugador == 1){
				j1=j1+1;
				document.getElementById("j1").innerHTML = j1;
			}else{
				j2++;
				document.getElementById("j2").innerHTML = j2;
			}

			// //Si termina el juego
			// if(turno == 12){
			// 	ganador = finjuego(j1,j2);
			// 	console.log('fin');
			// } Esto aqui no funcionaba porque contamos los turnos mas abajo
			//

			// elimina el onclick si ya fueron encontrados
			imagen.onclick="";
			prim.onclick="";
		}else{
			if(prim.id != arrayImagenes[id].img){
				//if(prim.id=="si")
				prim.id=pid;
				setTimeout(function(){changeimages(imagen)},800);
				setTimeout(function(){changeimages(prim)}, 800);
				turno++; //ponemos turno++ aqui para que no cuente con el total
				console.log('turno: '+turno);
			}

		}

		primera=true;
		//turno++; //aqui cotaba un intento con todos los click
		

		// despues de contar los turno pregunto los intentos.
		//Si termina el juego
		if(turno == 12){
			ganador = finjuego(j1,j2);
			alert('Ohhh! Perdiste!');
		}

		//Ganar el juego
		if(total == 6){
			alert('Siiii ganaste!');
		}

		//si no hay ganador
		if(ganador==0){
			jugador=tratarjugador(turno);
		}
	}

}

var changeimages = function(imagen){
	imagen.src = path+"Fichas-13.jpg"; // Esto es lo mismo que decir 'img/Ficha-13.jpg'
	//imagen.src = path+"Fichas-01.jpg";
}

function tratarjugador(turno){
	var jugador=turno%2==0?1:2;
	if(jugador==1){
		document.getElementById("jugador1").style.color = "#03BF35";
		document.getElementById("jugador2").style.color = "black";
	}else{
		document.getElementById("jugador1").style.color = "black";
		document.getElementById("jugador2").style.color = "#03BF35";
	}
	return jugador;
}



function finjuego(j1,j2){
	var ganador;
	if(j1 == j2){
		document.getElementById("anotador").innerHTML = "es un empate";
	}else{
		if(j1 > j2){
			ganador="1";
		}else{
			ganador="2";
		}
	}

	document.getElementById("anotador").innerHTML = "ganaste" +ganador;
	return ganador;
}

shuffle(arrayImagenes);
