/* =========== Cargar el juego ======== */

window.addEventListener("load", function() {
    var fichas = document.getElementById('fichas'); 
    //Obtenemos el DIV del juego
    if(!fichas) //Si no se ha encontrado el div fichas
        return; //cerrar el programa

    /*fichas.innerHTML = ''; //Limpiar el contenido del DIV*/
});



/* ====== Todas las imagenes de las tarjetas ======= */

var tarjetas = [//hacemos un array con las imagenes de las tarjetas

	'img/Ficha1.jpg',
	'img/Ficha2.jpg',
	'img/Ficha3.jpg',
	'img/Ficha4.jpg',
	'img/Ficha5.jpg',
	'img/Ficha6.jpg',
	'img/Ficha7.jpg',
]

/* =========== Donde se ubican las imagenes ============ */

    //Si son 2 directorios, significa que hay dos imágenes por pareja
    var parejas = [ 'imagenes/par1', 'imagenes/par2' ];

    const max_score = tarjetas.length; 
    //Obtener la cantidad de parejas (puntaje máximo)
    var score = 0; //Puntaje actual: 0 

/* =========== Todas las tarjetas =========*/

    var todasTarjetas = [];
// i y j son las parejas que se forman
    for(var i = 0; i < parejas.length; i++) {
        for(var j = 0; j < tarjetas.length; j++) {
        //aqui se muestran las imagenes, es el reverso de la tarjeta

            todasTarjetas.push( {
                name:  tarjetas[j], 
                path: parejas[i] +  '/' + tarjetas[j]
            });
        }
    }
    todasTarjetas = shuffle(todasTarjetas); //Desordenamos la lista







/* ============MOSTRAR LAS CARDS====== */

var memotest = ['1','1','2','2','3','3','4','4','5','5','6','6']; //todas las cards

var valorMemo = []; //sin voltear

var cards = [];

var cardTiro = 0;

function mostrar(){

	var mostrarCards = $('#memotest');
	console.log("Todas las fichas",memotest.length);
	while(--memotest > 0){

		j = Math.floor(Math.random() * (i+1));
		temp = this[j];
		this[j] = this[i];
		this[i] = temp;

	}
}

mostrar();


/* ======Aleatoriedad======= */

function irandom(n){

	return Math.floor(Math.random() * n); //hace que se desordenen las piezas de manera aleatoria
}


function shuffle( memotest ) { //Devolver una copia desordenada del arreglo dado del memotest
    var copy = memotest.slice(); //Creamos una copia del arreglo dado, para no modificar el original.

    var shuf = []; //Un arreglo vacío donde irán los valores desordenados.

    while(copy.length) { //Mientras que el arreglo original tenga valores
        var pos = irandom(copy.length); 
        //Obtener una posición aleatoria del arreglo
        shuf.push(copy[ pos ]); 
        //Añadir el valor en esta posición al vacío,
        copy.splice(pos, 1); 
        //Eliminar el valor del original
    }
    return shuf; //Devolver el arreglo nuevo (desordenado)
}


/* =============== EJECUTANDO =========== */

for(var i = 0; i < todasTarjetas.length; i++) {
        //Ahora, recorremos esta lista e imprimimos en el DOM cada imagen

        var img = document.createElement( 'img' );

            /*img.setAttribute('class', 'image-box');*/

            //Un par de propiedades para guardar el nombre y ruta de la imagen
            img.img_path = todasTarjetas[i].path;
            img.img_name = todasTarjetas[i].name;

            img.src = 'img/Ficha7.jpg'; 

            img.on = false;

        fichas.appendChild(img);
    }

/* ============= GUARDAR LA IMAGEN EN EL ARREGLO ============= */

