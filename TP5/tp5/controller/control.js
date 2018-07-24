correr = {}

var servicio = require('../services/servicio');

correr.cargarPagina = function(req, res, next) {
    res.render('index', { title: 'Perritos' });
}

correr.pedidoDatos = function(req, res){
    
    console.log('La consulta es: ');
    console.log(req.body);

    if(!req.body)
        return res.status(400).send('error de busqueda.')

    let consulta = servicio.filtro(req);
    
    console.log('Lo que traigo es...');
    console.log(consulta);

    res.render('filtrado');

}

module.exports = correr;