var correr = {}

const doggies = [
    {
        id: "01",
        raza:"airedale",
        edad:"adulto",
        tamano:"mediano",
        imagen:"/images/airedale_adult.jpg",
        fav:false,
    },
    {
        id: "02",
        raza:"airedale",
        edad:"cachorro",
        tamano:"mediano",
        imagen:"/images/airedale_puppy.jpg",
        fav:false,
    },
    {
        id: "03",
        raza:"akita",
        edad:"adulto",
        tamano:"mediano",
        imagen:"/images/akita_adult.jpg",
        fav:false,
    },
    {
        id: "04",
        raza:"akita",
        edad:"cachorro",
        tamano:"mediano",
        imagen:"/images/akita_puppy.jpg",
        fav:false,
    },
    {
        id: "05",
        raza:"bulldog",
        edad:"adulto",
        tamano:"mediano",
        imagen:"/images/bulldog_adult.jpg",
        fav:false,
    },
    {
        id: "06",
        raza:"bulldog",
        edad:"cachorro",
        tamano:"mediano",
        imagen:"/images/bulldog_puppy.jpg",
        fav:false,
    },
    {
        id: "07",
        raza:"chihuahua",
        edad:"adulto",
        tamano:"pequeno",
        imagen:"/images/chihuahua_adult.jpg",
        fav:false,
    },
    {
        id: "08",
        raza:"chihuahua",
        edad:"cachorro",
        tamano:"pequeno",
        imagen:"/images/chihuahua_puppy.jpg",
        fav:false,
    },
    {
        id: "09",
        raza:"chowchow",
        edad:"adulto",
        tamano:"mediano",
        imagen:"/images/chowchow_adult.jpg",
        fav:false,
    },
    {
        id: "10",
        raza:"chowchow",
        edad:"cachorro",
        tamano:"mediano",
        imagen:"/images/chowchow_puppy.jpg",
        fav:false,
    },
    {
        id: "11",
        raza:"doberman",
        edad:"adulto",
        tamano:"grande",
        imagen:"/images/doberman_adult.jpg",
        fav:false,
    },
    {
        id: "12",
        raza:"doberman",
        edad:"cachorro",
        tamano:"grande",
        imagen:"/images/doberman_puppy.jpg",
        fav:false,
    },
    {
        id: "13",
        raza:"escoces",
        edad:"adulto",
        tamano:"mediano",
        imagen:"/images/escoces_adulto.jpg",
        fav:false,
    },
    {
        id: "14",
        raza:"escoces",
        edad:"cachorro",
        tamano:"mediano",
        imagen:"/images/escoces_puppy.jpg",
        fav:false,
    },
    {
        id: "15",
        raza:"jackrussel",
        edad:"adulto",
        tamano:"mediano",
        imagen:"/images/jackrussel_adult.jpg",
        fav:false,
    },
    {
        id: "16",
        raza:"jackrussel",
        edad:"cachorro",
        tamano:"mediano",
        imagen:"/images/jackrussel_puppy.jpg",
        fav:false,
    },
    {
        id: "17",
        raza:"pitbull",
        edad:"adulto",
        tamano:"mediano",
        imagen:"/images/pitbull_adult.jpg",
        fav:false,
    },
    {
        id: "18",
        raza:"pitbull",
        edad:"cachorro",
        tamano:"mediano",
        imagen:"/images/pitbull_puppy.jpg",
        fav:false,
    },
    {
        id: "19",
        raza:"pomeranian",
        edad:"adulto",
        tamano:"pequeno",
        imagen:"/images/pomeranian_adult.jpg",
        fav:false,
    },
    {
        id: "20",
        raza:"pomeranian",
        edad:"cachorro",
        tamano:"pequeno",
        imagen:"/images/pomeranian_puppy.jpg",
        fav:false,
    },
    {
        id: "21",
        raza:"white terrier",
        edad:"adulto",
        tamano:"pequeno",
        imagen:"/images/white_adulto.jpg",
        fav:false,
    },
    {
        id: "22",
        raza:"white terrier",
        edad:"cachorro",
        tamano:"pequeno",
        imagen:"/images/white_puppy.jpg",
        fav:false,
    },
    {
        id: "23",
        raza:"yorkshire terrier",
        edad:"adulto",
        tamano:"pequeno",
        imagen:"/images/yorkshire_adult.jpg",
        fav:false,
    },
    {
        id: "24",
        raza:"yorkshire terrier",
        edad:"cachorro",
        tamano:"pequeno",
        imagen:"/images/yorkshire_puppy.jpg",
        fav:false,
    }]

    /**
     * Función mostrar perros
     */

    correr.mostrarPerros = function(req,res,next){
        res.render('homeDogs', {title: 'Perros', doggies: doggies})
    }

    /*==============================================================================================*/

    /**
     * Función obtener elementos del option
     */

    correr.obtenerFiltros = function(raza,tamano,edad){
        // si la raza, el tamano y la edad no es igual a "seleccionar" los elementos entonces empiezo a filtrar
        console.log(doggies);

        var filtrado = [];

        if(raza !== "seleccionar" && tamano !== "seleccionar" && edad !== "seleccionar"){
            filtrado = doggies.filter(item => item.raza === raza && item.tamano === tamano && item.edad === edad);
            console.log('filtrado por 3 parametros :' +filtrado);

        }else if(raza !== "seleccionar" && tamano === "seleccionar" && edad !== "seleccionar"){
            filtrado = doggies.filter(item => item.raza === raza && item.edad === edad);
            console.log('filtrado por raza y por edad :' +filtrado);  

        }else if(raza !== "seleccionar" && tamano === "seleccionar" && edad === "seleccionar"){
            console.log("raza");
            filtrado = doggies.filter(item => item.raza === raza);
            // filtrado = doggies.filter(item =>{if(item.raza == raza.toLowerCase()) return item});
            //person => { if (person.age > 18) return person}
            console.log('filtrado por raza :' +filtrado);

        }else if(raza !== "seleccionar" && tamano !== "seleccionar" && edad === "seleccionar"){
            filtrado = doggies.filter(item => item.raza === raza && item.tamano === tamano);
            console.log('filtrado por raza y tamano :' +filtrado);

        }else if(raza === "seleccionar" && tamano !== "seleccionar" && edad === "seleccionar"){
            filtrado = doggies.filter(item => item.tamano === tamano);
            console.log('filtrado por tamano :' +filtrado);

        }else if(raza === "seleccionar" && tamano === "seleccionar" && edad !== "seleccionar"){
            filtrado = doggies.filter(item => item.edad === edad);
            console.log('filtrado por edad :' +filtrado);

        }else if(raza === "seleccionar" && tamano !== "seleccionar" && edad !== "seleccionar"){
            filtrado = doggies.filter(item => item.tamano === tamano && item.edad === edad);
            console.log('filtrado por tamano y edad :' +filtrado);

        }else {
            filtrado = doggies;
        }

        console.log('filtrados');
        
        return filtrado;
    }

    /*==============================================================================================*/

     /**
     * Función filtrar por característica del perro
     */


    correr.filtrarPerros = function(req, res, next){

        let raza = req.body.raza;
        let tamano = req.body.tamano;
        let edad = req.body.edad;
        console.log('filtrados: '+raza+tamano+edad);  

        let filtros = correr.obtenerFiltros(raza,tamano,edad);
        console.log('filtros', filtros);

        if(filtros.length == 0){
            res.render('error',{'message':"No hay resultados para su busqueda"});
        
        }else{
            res.render('filtrados',{
                'perros': filtros});
            
        }
    }

/*==============================================================================================*/

/**
 * Función para paginar (dividir las imagenes)
 */

 var pagina;

 correr.paginas = function (req, res, next){

    if(req.params.pagina){
        pagina = req.params.pagina;
    }else{
        pagina = 1;
    }

    let cadaPagina = 3;

    let perrosPorPagina = [];
    // en este arreglo se guardarán la cantidad de perros que se mostraran por página

    for(let i = (parseInt(pagina) - 1) * cadaPagina ; i < ((parseInt(pagina) - 1) * cadaPagina) + cadaPagina ; i++){
        if (doggies[i]) {
            perrosPorPagina.push(doggies[i]);
            // pusheo los doggies por pagina
        }
    }

    let totalPaginado = Math.ceil(doggies.length / cadaPagina);
    let numeroDePagina = 0;
    let paginas = [];

    while (numeroDePagina < totalPaginado) {
        numeroDePagina++;
        paginas.push(numeroDePagina);
    }


 }

 /*==============================================================================================*/







    module.exports = correr;