todosDogs = {}

var servicio = require('../services/servicio')

todosDogs.renIndex = function(req, res, next) {
    res.render('index', { title: 'Perritos' });
}

todosDogs.keepData = function(req, res){
    
    console.log('La consulta es: ');
    console.log(req.body);

    if(!req.body)
        return res.status(400).send('error de busqueda.')

    let consulta = servicio.busqFiltro(req);
    
    console.log('Lo que traigo es...');
    console.log(consulta);

    res.render('filtrado');

}

module.exports = todosDogs;