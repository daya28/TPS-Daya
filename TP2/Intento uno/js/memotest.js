
function shuffle(array) { //Devolver una copia desordenada de el arreglo
    var copy = array.slice(); //Creamos una copia del arreglo dado, seleccionara elementos del array y creará nuevo arreglo.
    var shuf = []; //Un arreglo vacío donde irán los valores desordenados.

    while(copy.length) { //Mientras que el arreglo original tenga valores
        var pos = irandom(copy.length); //Obtener una posición aleatoria del arreglo
        shuf.push(copy[pos]); //Añadir el valor en esta posición al vacío,
        copy.splice(pos, 1); //Eliminar el valor del original
    }
    return shuf; //Devolver el arreglo nuevo (desordenado)
}

/*=========================== INICIAR EL JUEGO =============================*/

window.addEventListener("load", function() {
    var jugar = document.getElementById('jugar'); //Obtenemos el DIV del juego
    if(!jugar) //Si no se ha encontrado el div
        return; //cerrar el programa

    jugar.innerHTML = ''; //Limpiar el contenido del DIV

});

//Crearemos un arreglo donde colocaremos los nombres de todas las imágenes
    //Como las parejas tienen el mismo nombre pero están en directorios distintos,
    //sólo será necesario guardar el nombre de la imagen

    var images = [
       
        {'img/Ficha1.jpg'},
        {'img/Ficha2.jpg'},
        {'img/Ficha3.jpg'},
        {'img/Ficha4.jpg'},
        {'img/Ficha5.jpg'},
        {'img/Ficha6.jpg'},

    ]


//Los directorios donde se ubican las imágenes
    //Si son 2 directorios, significa que hay dos imágenes por pareja, una en cada uno.
    var pairs = [ 'imagenes/par1', 'imagenes/par2' ];

    const max_score = images.length; //Obtener la cantidad de parejas (puntaje máximo)
    var score = 0; //Puntaje actual: 0 


 //Aquí se guardarán todas las imágenes: Si hay 6 parejas y dos imágenes por cada una, entonces habrá un total de 12: 6 con el primer directorio, y 6 con el segundo
    var all_images = [];

    for(var i = 0; i < pairs.length; i++) {
        for(var j = 0; j < images.length; j++) {

            //Guardaremos en el arreglo las imágenes como objetos con dos propiedades:
            //El nombre de la imagen, y la ruta completa (el nombre más el directorio)
            all_images.push( {
                name:  images[j], 
                path: pairs[i] +  '/' + images[j]
            });
        }
    }
    all_images = shuffle(all_images); //Desordenamos la lista


/* ============================ CREAR IMGS =====================*/

for(var i = 0; i < all_images.length; i++) {
        //Ahora, recorremos esta lista e imprimimos en el DOM cada imagen

        var img = document.createElement( 'img' );

            //Para el estilo CSS
            img.setAttribute('class', 'image-box');

            //Un par de propiedades para guardar el nombre y ruta de la imagen
            img.img_path = all_images[i].path;
            img.img_name = all_images[i].name;

            img.src = 'img/Ficha7.jpg'; //La imagen que se mostrará, será la del "signo desconocido".
            img.on = false; //¿El usuario ha abierto la imagen?

        jugar.appendChild(img);

         img.addEventListener( 'click', function() {
                //Aquí estará todo el comportamiento de las imágenes
    }

    all_images[i].image = img; //Añadimos la imagen creada al arreglo



    /* ========================= OCULTAR LAS TARJETAS SI NO COINCIDEN ====================*/

    if(!this.on) { //Sólo si la imagen no se ha desplegado
                    this.on = true;
                    this.src = this.img_path;


                    //Todo esto para desactivar la imagen dentro de 2s
                    var self = this; //Un alias de la imagen actual para poder acceder desde el timeout
 
                    //Hay que guardar el timeout en una propiedad, para poderlo detener si
                    //se llega a armar una pareja con la imagen
                    this.timeout = window.setTimeout( function() {
                        self.on = false; //Desactivar la imagen
                        self.src = 'imagenes/unknown.png'; //Volver a ícono de desconocido
                    }, 2000);
                }


/*======================= FIJAR LAS IMAGENES SI SON IGUALES ===========================*/

for(var j = 0; j < all_images.length; j++) { //Recorrer todas las imágenes

    //Si la imagen que se está revisando NO es igual a la que está ejecutando el evento,
    //y está activado
    if( all_images[j].image !== this && all_images[j].image.on 
        && all_images[j].image.img_name == this.img_name //Y pertenece a la pareja
    ){
        //Entonces se ha armado la pareja
        //Aquí detendremos los timeout y subiremos el puntaje
    }
}




