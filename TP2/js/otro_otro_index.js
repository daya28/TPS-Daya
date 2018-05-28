// crear una seccion para fichas para luego hacer una grilla o malla
const fichas = document.getElementById('fichas');

// hacer una seccion con la clase grid 
const grid = document.createElement('section');
grid.setAttribute('class','grid');
// apendeamos la grilla al div fichas que se encuentra en el html
fichas.appendChild(grid);

/******************* mostrar las imagenes *********************/
cards.forEach(item => {
    // crear un div para el reverso de la tarjeta
    const reverso = createElement('div');
    reverso.classList.add('reverso');
    reverso.dataset.name = item.name;

    // aplicar la imagen que sera el fondo
    reverso.style.backgroundImage = "url('img/Ficha7.jpg')"; /*==== PORQUE NO SE VEN????? ====*/

    // apendear esta ficha a la seccion de la grilla
    grid.appendChild(reverso);

});



/******************* arreglo de las tarjetas *********************/
var cardsArray = [
    {
    'nombre' = 'thebeatles';
    'img' = 'img/Ficha1.jpg';
    },
    {
    'nombre' = 'acdc';
    'img' = 'img/Ficha2.jpg',
    },
    {
    'nombre' = 'coldplay';
    'img' = 'img/Ficha3.jpg',
    },
    {
    'nombre' = 'foofighters';
    'img' = 'img/Ficha4.jpg',
    },
    {
    'nombre' = 'queen';
    'img' = 'img/Ficha5.jpg',
    },
    {
    'nombre' = 'rhcp';
    'img' = 'img/Ficha6.jpg',
    }
];


