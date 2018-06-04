/* DECLARO MIS VARIABLES */

var path = "img/";
arrayImagenes = new array(24);
var first = true;
var turno = 0;
var j1 = 0;
var j2 = 0;
var pid;
var total = 0;
var ganador = 0;

/* CREAMOS EL ARRAY CON EL PATH DE IMAGENES */

function crearImagenes(){
	for (var i=0; i<=12; i++){

		if(i<= 11){
			arrayImagenes[i] = path+i+'.jpg';
		}else{
			j= i-12;
			arrayImagenes[i] = path+j+'.jpg';
		}
	} 

	shuffle(arrayImagenes);
}

/* ALEATORIO */

function shuffle(array){
	var i=array.length;
	while(i--){
		var j=Math.floor(Math.random()*(i+1));
		var tmp=array[i];
		array[i]=array[j];
		array[j]=tmp;
	}
}

/* JUGAR */

function jugar(){
	crearImagenes();
	document.getElementById('fichas').style.display = "block";
	document.getElementById("jugador1").style.color = "#03BF35";
	document.getElementById("jugar").style.display="none";

}

function imgcheck(imagen){
	id=imagen.id;
	imagen.src = arrayImagenes[id];


	// Turno del jugador

	jugador = tratarjugador(turno);

	if(first){
		prim=imagen;
		first=false;
		pid=prim.id;
		pid.src=arrayImagenes[id];
		imagen.id="si";
	}else{
		// Verificamos si son iguales
		if(imagen.id!="si" && arrayImagenes[pid]==arrayImagenes[id]){
			total++;
			if(jugador==1){
				j1=j1+1;
				document.getElementById("j1").innetHTML = j1;
			}else{
				j2++;
				document.getElementById("j2").innetHTML = j2;
			}

			//Si termina el juego
			if(total == 12){
				ganador = finjuego(j1,j2);
			}

			// elimina el onclick si ya fueron encontrados
			imagen.onclick="";
			prim.onclick="";
		}else{
			if(prim.id=="si"){
				prim.id=pid;
				setTimeout(function(){changeimages(imagen)},800);
				setTimeout(function(){changeimages(prim)}, 800);
			}

		}

		first=true;
		turno++;

		//si no hay ganador
		if(ganador==0){
			jugador=tratarjugador(turno);
		}
	}

}

var changeimages = function(imagen){
	imagen.src = path+"Fichas-01.jpg";
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
	if(j1==j2){
		document.getElementById("anotador").innerHTML = "es un empate";
	}else{
		if(j1>j2){
			ganador="1";
		}else{
			ganador="2";
		}
	}

	document.getElementById("anotador").innerHTML = "ganaste" +ganador;
	return ganador;
}