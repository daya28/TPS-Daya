correr.obtenerFiltros = function(raza,tamano,edad){

        // si la raza, el tamano y la edad no es igual a "seleccionar" los elementos entonces empiezo a filtrar
        console.log(doggies);
        var filtrado = [];

        if(raza !== "seleccionar" && tamano !== "seleccionar" && edad !== "seleccionar"){
            filtrado = doggies.filter(item => item.raza === raza && item.tamano === tamano && item.edad === edad) return item;
            console.log('filtrado por 3 parametros :' +filtrado);

        }else if(raza !== "seleccionar" && tamano === "seleccionar" && edad !== "seleccionar"){
            filtrado = doggies.filter(item => item.raza === raza && item.edad === edad) return item;
            console.log('filtrado por raza y por edad :' +filtrado);  

        }else if(raza !== "seleccionar" && tamano === "seleccionar" && edad === "seleccionar"){
            console.log("raza");
            filtrado = doggies.filter(item => item.raza === raza) return item;
            // filtrado = doggies.filter(item =>{if(item.raza == raza.toLowerCase()) return item});
            //person => { if (person.age > 18) return person}
            console.log('filtrado por raza :' +filtrado);

        }else if(raza !== "seleccionar" && tamano !== "seleccionar" && edad === "seleccionar"){
            filtrado = doggies.filter(item =>item.raza === raza && item => item.tamano === tamano) return item;
            console.log('filtrado por raza y tamano :' +filtrado);

        }else if(raza === "seleccionar" && tamano !== "seleccionar" && edad === "seleccionar"){
            filtrado = doggies.filter(item => item.tamano === tamano) return item;
            console.log('filtrado por tamano :' +filtrado);

        }else if(raza === "seleccionar" && tamano === "seleccionar" && edad !== "seleccionar"){
            filtrado = doggies.filter(item => item.edad === edad) return item;
            console.log('filtrado por edad :' +filtrado);

        }else if(raza === "seleccionar" && tamano !== "seleccionar" && edad !== "seleccionar"){
            filtrado = doggies.filter(item => item.tamano === tamano && item => item.edad === edad) return item;
            console.log('filtrado por tamano y edad :' +filtrado);

        }else {
            filtrado = doggies;
        }

        console.log('filtrados');
        
        return filtrado;
    }

    /*=====================================================================================*/
    /**
     * Función obtener elementos del option
     */

    correr.obtenerFiltros = function(raza,tamano,edad){

        // si la raza, el tamano y la edad no es igual a "seleccionar" los elementos entonces empiezo a filtrar
        console.log(doggies);
        var filtrado = [];

        if(raza !== "seleccionar" && tamano !== "seleccionar" && edad !== "seleccionar"){
            filtrado = doggies.filter(item => {if(item.raza === raza.toLowerCase() && item.tamano === tamano.toLowerCase() && item.edad === edad.toLowerCase())}) return item;
            console.log('filtrado por 3 parametros :' +filtrado);

        }else if(raza !== "seleccionar" && tamano === "seleccionar" && edad !== "seleccionar"){
            filtrado = doggies.filter(item => {if(item.raza === raza.toLowerCase() && item.edad === edad.toLowerCase())}) return item;
            console.log('filtrado por raza y por edad :' +filtrado);  

        }else if(raza !== "seleccionar" && tamano === "seleccionar" && edad === "seleccionar"){
            console.log("raza");
            filtrado = doggies.filter(item => {if(item.raza === raza.toLowerCase()) return item});
            // filtrado = doggies.filter(item =>{if(item.raza == raza.toLowerCase()) return item});
            //person => { if (person.age > 18) return person}
            console.log('filtrado por raza :' +filtrado);

        }else if(raza !== "seleccionar" && tamano !== "seleccionar" && edad === "seleccionar"){
            filtrado = doggies.filter(item => {if(item.raza === raza.toLowerCase() && item => item.tamano === tamano.toLowerCase())}) return item;
            console.log('filtrado por raza y tamano :' +filtrado);

        }else if(raza === "seleccionar" && tamano !== "seleccionar" && edad === "seleccionar"){
            filtrado = doggies.filter(item => {if(item.tamano === tamano.toLowerCase())}) return item;
            console.log('filtrado por tamano :' +filtrado);

        }else if(raza === "seleccionar" && tamano === "seleccionar" && edad !== "seleccionar"){
            filtrado = doggies.filter(item => {if(item.edad === edad.toLowerCase())}) return item;
            console.log('filtrado por edad :' +filtrado);

        }else if(raza === "seleccionar" && tamano !== "seleccionar" && edad !== "seleccionar"){
            filtrado = doggies.filter(item => {if(item.tamano === tamano.toLowerCase() && item => item.edad === edad.toLowerCase())}) return item;
            console.log('filtrado por tamano y edad :' +filtrado);

        }else {
            filtrado = doggies;
        }

        console.log('filtrados');
        
        return filtrado;
    }