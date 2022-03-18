let cantidadComprada = 0;
let precioTotalVenta = 0;


/* Estructura de Articulos */
class Articulo {
    constructor(nombre, stock, precio, imagenes, categoria, id) {
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
        this.imagenes = imagenes;
        this.categoria = categoria;
        this.id = id;
        this.venta = function (cantidadComprada) {
            this.stock -= cantidadComprada;
            console.log("El stock remanente es de: " + this.stock + " " + this.nombre);
        };
    }
}

/* Articuloos Tienda */

const articuloA = new Articulo(
    "Remera",
    50,
    500,
    "./imagenes/remera.jpg",
    "remera",
    1
);




const articuloB = new Articulo(
    "Jean",
    50,
    800,
    "./imagenes/jean.jpg",
    "jean",
    2,
);



const articuloC = new Articulo(
    "Buzo",
    50,
    750,
    "./imagenes/buzo.jpg",
    "buzo",
    3)


const articuloD = new Articulo(
    "Vestido",
    50,
    830,
    "./imagenes/vestido.jpg",
    "vestido",
    4
)


const articuloE = new Articulo(
    "Campera",
    50,
    1500,
    "./imagenes/campera.jpg",
    "campera",
    5
)


const articuloF = new Articulo(
    "Remera",
    50,
    500,
    "./imagenes/remera.jpg",
    "remera",
    6
)


const articuloG = new Articulo(
    "Jean",
    50,
    800,
    "./imagenes/jean.jpg",
    "jean",
    7
)


const articuloH = new Articulo(
    "Buzo",
    50,
    750,
    "./imagenes/buzo.jpg",
    "buzo",
    8
)


const articuloI = new Articulo(
    "Vestido",
    50,
    830,
    "./imagenes/vestido.jpg",
    "vestido",
    9
)


const articuloJ = new Articulo(
    "Campera",
    50,
    1500,
    "./imagenes/campera.jpg",
    "campera",
    10
)

const Articulos = [articuloA, articuloB, articuloC, articuloD, articuloE, articuloF, articuloG, articuloH, articuloI, articuloJ];
const carrito = [];


/* Clase Articulos por categoria */


let remera = document.querySelector('.remeras')
let jean = document.querySelector('.jeans')
let buzo = document.querySelector('.buzos')
let vestido = document.querySelector('.vestidos')
let campera = document.querySelector('.camperas')


/* Articulos mostrados en pantalla */

function mostrarProductos() {
    let ArticulosPantalla = document.querySelector(".ArticulosPantalla");

    ArticulosPantalla.innerHTML = ''

    for (const Articulo of Articulos) {
        let contenedor = document.createElement("div");

        contenedor.innerHTML = `<div class="card-articulo border">
                            <img src=${Articulo.imagenes} class="imagen"/>
                            <h3 id= "nombre">  ${Articulo.nombre}</h3>
                            <b>$${Articulo.precio}</b>
                            <p>Disponible: ${Articulo.stock} unidades</p>
                            <button id="boton${Articulo.id}" type="button" class= "btn btn-outline-dark" onclick="addToCart(${Articulo.precio},${Articulo.id},${Articulo.stock})"> COMPRAR </button>
                            </div>`
        ArticulosPantalla.appendChild(contenedor);
    }
}

/* Seleccion de articulos por categoria */

remera.addEventListener('click', function () { renderProductos("remera") })
jean.addEventListener('click', function () { renderProductos("jean") })
vestido.addEventListener('click', function () { renderProductos("vestido") })
campera.addEventListener('click', function () { renderProductos("campera") })
buzo.addEventListener('click', function () { renderProductos("buzo") })


/* Articulos por categoria */
function renderProductos(categoria) {
    let ArticulosPantalla = document.querySelector('.ArticulosPantalla')

    ArticulosPantalla.innerHTML = ''

    const productos = Articulos.filter(x => x.categoria == categoria)
    for (const Articulo of productos) {
        let contenedor = document.createElement("div");

        contenedor.className = "card col-lg-3";
        contenedor.id = Articulo.id;
        contenedor.innerHTML = `
                            <img src=${Articulo.imagenes} class="imagen"/>
                            <h3 id= "nombre">  ${Articulo.nombre}</h3>
                            <b>$${Articulo.precio}</b>
                            <p>Quedan: ${Articulo.stock} unidades</p>
                            <button id="boton${Articulo.id}" type="button" class= "btn btn-primary" onclick="addToCart(${Articulo.precio},${Articulo.id},${Articulo.stock})"> COMPRAR </button>
                                `
        ArticulosPantalla.appendChild(contenedor);
    }
}

/* Funcion Agregar carrito */

function addToCart(precio, id, stock) {
    for (const Articulo of Articulos) {
        if (Articulo.id === id) {
            if (stock > 0) {
                carrito.push(precio);
                Articulo.venta(1);

                precioTotalVenta = carrito.reduce((partialSum, a) => partialSum + a, 0);
                PrecioTotal();
                mostrarProductos();
            } else {
                stockInsuficiente(Articulo);
            }
        }
    }
}

/* Funcion Stock Insuficiente */

function stockInsuficiente(Articulo) {
    let inputPrecio = document.querySelector(".total-2");
    inputPrecio.innerHTML = "";

    let contenedor = document.createElement("div");

    contenedor.innerHTML = `<div class="elTotal-2"">
                            <b>Stock Agotado de ${Articulo.nombre}</b>`;
    inputPrecio.appendChild(contenedor);
}

/* Total de la venta */
function PrecioTotal() {
    let inputPrecio = document.querySelector(".total");
    inputPrecio.innerHTML = "";

    let contenedor = document.createElement("div");

    contenedor.innerHTML = `<div class="elTotal"">
                            <b>Total Agregado: $${precioTotalVenta}</b>`;
    inputPrecio.appendChild(contenedor);
}

mostrarProductos();
PrecioTotal();

console.log(carrito);


localStorage.setItem("listaDeArticulos", JSON.stringify(Articulos)) 
