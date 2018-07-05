todosDogs = {};

// 
// el objeto con todos los perros
// 

let doggies = [
    {
        raza:"airedale",
        edad:"adulto",
        tamano:"mediano",
        imagen:"/images/airedale_adult.jpg",
        fav:false,
    },
    {
        raza:"airedale",
        edad:"joven",
        tamano:"mediano",
        imagen:"/images/airedale_puppy.jpg",
        fav:false,
    },
    {
        raza:"akita",
        edad:"adulto",
        tamano:"mediano",
        imagen:"/images/akita_adult.jpg",
        fav:false,
    },
    {
        raza:"akita",
        edad:"joven",
        tamano:"mediano",
        imagen:"/images/akita_puppy.jpg",
        fav:false,
    },
    {
        raza:"bulldog",
        edad:"adulto",
        tamano:"mediano",
        imagen:"/images/bulldog_adult.jpg",
        fav:false,
    },
    {
        raza:"bulldog",
        edad:"joven",
        tamano:"mediano",
        imagen:"/images/bulldog_puppy.jpg",
        fav:false,
    },
    {
        raza:"chihuahua",
        edad:"adulto",
        tamano:"pequeno",
        imagen:"/images/chihuahua_adult.jpg",
        fav:false,
    },
    {
        raza:"chihuahua",
        edad:"joven",
        tamano:"pequeno",
        imagen:"/images/chihuahua_puppy.jpg",
        fav:false,
    },
    {
        raza:"chowchow",
        edad:"adulto",
        tamano:"mediano",
        imagen:"/images/chowchow_adult.jpg",
        fav:false,
    },
    {
        raza:"chowchow",
        edad:"joven",
        tamano:"mediano",
        imagen:"/images/chowchow_puppy.jpg",
        fav:false,
    },
    {
        raza:"doberman",
        edad:"adulto",
        tamano:"grande",
        imagen:"/images/doberman_adult.jpg",
        fav:false,
    },
    {
        raza:"doberman",
        edad:"joven",
        tamano:"grande",
        imagen:"/images/doberman_puppy.jpg",
        fav:false,
    },
    {
        raza:"escoces",
        edad:"adulto",
        tamano:"mediano",
        imagen:"/images/escoces_adulto.jpg",
        fav:false,
    },
    {
        raza:"escoces",
        edad:"joven",
        tamano:"mediano",
        imagen:"/images/escoces_puppy.jpg",
        fav:false,
    },
    {
        raza:"jackrussel",
        edad:"adulto",
        tamano:"mediano",
        imagen:"/images/jackrussel_adult.jpg",
        fav:false,
    },
    {
        raza:"jackrussel",
        edad:"joven",
        tamano:"mediano",
        imagen:"/images/jackrussel_puppy.jpg",
        fav:false,
    },
    {
        raza:"pitbull",
        edad:"adulto",
        tamano:"mediano",
        imagen:"/images/pitbull_adult.jpg",
        fav:false,
    },
    {
        raza:"pitbull",
        edad:"joven",
        tamano:"mediano",
        imagen:"/images/pitbull_puppy.jpg",
        fav:false,
    },
    {
        raza:"pomeranian",
        edad:"adulto",
        tamano:"pequeno",
        imagen:"/images/pomeranian_adult.jpg",
        fav:false,
    },
    {
        raza:"pomeranian",
        edad:"joven",
        tamano:"pequeno",
        imagen:"/images/pomeranian_puppy.jpg",
        fav:false,
    },
    {
        raza:"white terrier",
        edad:"adulto",
        tamano:"pequeno",
        imagen:"/images/white_adulto.jpg",
        fav:false,
    },
    {
        raza:"white terrier",
        edad:"joven",
        tamano:"pequeno",
        imagen:"/images/white_puppy.jpg",
        fav:false,
    },
    {
        raza:"yorkshire terrier",
        edad:"adulto",
        tamano:"pequeno",
        imagen:"/images/yorkshire_adult.jpg",
        fav:false,
    },
    {
        raza:"yorkshire terrier",
        edad:"joven",
        tamano:"pequeno",
        imagen:"/images/yorkshire_puppy.jpg",
        fav:false,
    },

// 
// procesar la informacion seleccionada en el form
// 

function datosForm(breed, age, size){

	arrayCoincidencias=[];

	// consulta existe comodin

	if (age!='comodin'){
		console.log('la consulta no es comodin');

		for (let i = 0; i < doggies.length; i++){
			const element = doggies[i];

			if (breed == element.raza && size == element.tamano && age == element.edad){
				console.log('encontro resultado!');
			}else{
				console.log('no hay coincidencias con la busqueda');
			}
		}

		if( Object.keys(arrayCoincidencias).length == 0 ){
			console.log('no hubo coincidencias con su busqueda');
		}else{
			console.log('El array de resultados es...');
            console.log(arrayCoincidencias);
            return arrayCoincidencias;
		}
	}else{
		console.log('la consulta es comodin');

		// buscamos las coincidencias
		for (let i = 0; i < doggies.length; i++){

			if(breed == element.raza && size == element.tamano){

				console.log('encontro el resultado!');
				arrayCoincidencias.push(element);
			}else{
				console.log('no hay coincidencia');

			}
		}

		// consultamos si el objeto del resultado esta vacio

		if ( Object.keys(arrayCoincidencias).length === 0 ){

			console.log('no hubo coincidencias en la busqueda');

		}else{
			console.log('el array de resultados es:');
			console.log(arrayCoincidencias);
			return arrayCoincidencias;
		}

	}

}

// conservamos los datos del form y filtramos de acuerdo al comodin

todosDogs.filtramos = function (req, res, next){

	let raza = req.body.raza.toLowerCase();
	let edad = req.body.edad.toLowerCase();
	let tamano = req.body.tamano.toLowerCase();

	console.log('procesando');
	return datosForm(raza, edad, tamano);
}

module.exports = todosDogs;