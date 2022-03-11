/* Articulos */

class Articulo {
    constructor(nombre, stock, precio, imagenes, categoria) {
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
        this.imagenes = imagenes;
        this.categoria = categoria;
        this.venta = function (cantidadComprada) {
            this.stock -= cantidadComprada
        }
    }

}

let ArticulosMenu = "Productos en tienda"


const articuloA = new Articulo("Remera", 50, 500, "./imagenes/remera.jpg", "remera")
const articuloB = new Articulo("Jean", 50, 800, "./imagenes/jean.jpg", "jean")
const articuloC = new Articulo("Buzo", 50, 750, "./imagenes/buzo.jpg", "buzo")
const articuloD = new Articulo("Vestido", 50, 830, "./imagenes/vestido.jpg", "vestido")
const articuloE = new Articulo("Campera", 50, 1500, "./imagenes/campera.jpg", "campera")
const articuloF = new Articulo("Remera", 50, 500, "./imagenes/remera.jpg", "remera")
const articuloG = new Articulo("Jean", 50, 800, "./imagenes/jean.jpg", "jean")
const articuloH = new Articulo("Buzo", 50, 750, "./imagenes/buzo.jpg", "buzo")
const articuloI = new Articulo("Vestido", 50, 830, "./imagenes/vestido.jpg", "vestido")
const articuloJ = new Articulo("Campera", 50, 1500, "./imagenes/campera.jpg", "campera")


const Articulos = [articuloA, articuloB, articuloC, articuloD, articuloE, articuloF, articuloG, articuloH, articuloI, articuloJ];
const menorPrecio = Articulos.filter(Articulo => Articulo.precio <= 750);
const mayorPrecio = Articulos.filter(Articulo => Articulo.precio >= 790);
console.log(menorPrecio);
console.log(mayorPrecio);


/* lista filtro */


let remera = document.querySelector('.remeras')
let jean = document.querySelector('.jeans')
let buzo = document.querySelector('.buzos')
let vestido = document.querySelector('.vestidos')
let campera = document.querySelector('.camperas')

/* Productos menu */

let ArticulosPantalla = document.querySelector('.ArticulosPantalla')

ArticulosPantalla.innerHTML = ''

for (const Articulo of Articulos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<div class="card-articulo border">
                            <img src=${Articulo.imagenes} class="imagen"/>
                            <h3 id= "nombre">  ${Articulo.nombre}</h3>
                            <h5 class="text-warning bg-dark"> ${Articulo.precio}</h5>
                            <input type="number" min="1" max="50" value="1" name="" id="" class="cantidad">
                            <button type="button" class="btnn" id="2"> COMPRAR </button>
                            </div>`
    ArticulosPantalla.appendChild(contenedor);

}

/* Boton carrito (Falta añadir a todos los botones ) */

let boton = document.getElementById('2')
boton.addEventListener('click', comprar)

function comprar() {
    alert('articulo agregado')
}


/* Filtro productos */

remera.addEventListener('click', function () { renderProductos("remera") })
jean.addEventListener('click', function () { renderProductos("jean") })
vestido.addEventListener('click', function () { renderProductos("vestido") })
campera.addEventListener('click', function () { renderProductos("campera") })
buzo.addEventListener('click', function () { renderProductos("buzo") })



function renderProductos(categoria) {
    let ArticulosPantalla = document.querySelector('.ArticulosPantalla')

    ArticulosPantalla.innerHTML = ''

    const productos = Articulos.filter(x => x.categoria == categoria)
    for (const Articulo of productos) {

        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<div class="card-articulo border">
                                <img src=${Articulo.imagenes} class="imagen"/>
                                <h3 id= "nombre">  ${Articulo.nombre}</h3>
                                <h5 class="text-warning bg-dark"> ${Articulo.precio}</h5>
                                <input type="number" min="1" max="50" value="1" name="" id="" class="cantidad">
                                <button type="button" class="btnn" id="2"> COMPRAR </button>
                                </div>`
        ArticulosPantalla.appendChild(contenedor);
    }
}
