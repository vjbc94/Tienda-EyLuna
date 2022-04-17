let cantidadComprada = 0;
let precioTotalVenta = 0;
let listaProductos = [];

/* Estructura de Articulos */
function Producto (nombre, stock, precio, imagenes, categoria, id) {
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

    fetch("../productos.json")
	.then(response => response.json())
	.then(data => {
		data.forEach(producto =>
			listaProductos.push(
				new Producto(
					producto.nombre,
                    producto.stock,
					producto.precio,
                    producto.imagenes,
					producto.categoria,
					producto.id,
				)
			)
		);
		mostrarProductos();
		console.log(listaProductos);
	});





/* Articuloos Tienda */

/* const articuloA = new Articulo(
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

const Articulos = [articuloA, articuloB, articuloC, articuloD, articuloE, articuloF, articuloG, articuloH, articuloI, articuloJ]; */
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

    for (const producto of listaProductos) {
        let nombre = producto.nombre;
        let imagenes = producto.imagenes;
        let precio =  producto.precio;
        let id = producto.id;
        let stock = producto.stock;


        let contenedor = document.createElement("div");

        contenedor.innerHTML = `<div class="card-articulo border">
                            <img src=${imagenes} class="imagen"/>
                            <h3 id= "nombre">  ${nombre}</h3>
                            <b>$${precio}</b>
                            <p>Disponible: ${stock} unidades</p>
                            <button id="boton${id}" type="button" class= "btn btn-outline-dark" onclick="addToCart(${precio},${id},${stock})"> COMPRAR </button>
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
        /* Agregado desestructuracion */
        let nombre = Articulo.nombre;
        let imagenes = Articulo.imagenes;
        let precio =  Articulo.precio;
        let id = Articulo.id;
        let stock = Articulo.stock;


        let contenedor = document.createElement("div");

        contenedor.innerHTML = `<div class="card-articulo border">
                            <img src=${imagenes} class="imagen"/>
                            <h3 id= "nombre">  ${nombre}</h3>
                            <b>$${precio}</b>
                            <p>Disponible: ${stock} unidades</p>
                            <button id="boton${id}" type="button" class= "btn btn-outline-dark" onclick="addToCart(${precio},${id},${stock})"> COMPRAR </button>
                            </div>`
        ArticulosPantalla.appendChild(contenedor);
    }
}

/* Funcion Agregar carrito */

function addToCart(precio, id, stock) {
    for (const producto of listaProductos) {
        if (producto.id === id) {
            if (stock > 0) {
                carrito.push(precio);
                producto.venta(1);

                precioTotalVenta = carrito.reduce((partialSum, a) => partialSum + a, 0);
                PrecioTotal();
                mostrarProductos();
                alertAgregado("Agregaste '" + Articulo.nombre + "' a tu carrito");
            } else {
                stockInsuficiente(Articulo);
            }
        }
    }
}

/* Funcion Stock Insuficiente */

function stockInsuficiente(producto) {
    let inputPrecio = document.querySelector(".total-2");
    inputPrecio.innerHTML = "";
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<div class="elTotal-2"">
                            <b>Stock Agotado de ${producto.nombre}</b>`;
    inputPrecio.appendChild(contenedor);
}

/* Total de la venta */
function PrecioTotal() {
    console.log('Total agregado ' + '$' + precioTotalVenta);
    let inputPrecio = document.querySelector(".total");
    inputPrecio.innerHTML = "";
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<div class="elTotal"">
                            <b>Total Agregado: $${precioTotalVenta}</b>`;
    inputPrecio.appendChild(contenedor);
}

/* Vaciar Carrito */

function clearStorage() {
    localStorage.clear();
    precioTotalVenta = carrito.reduce((partialRest, ) => - partialRest, 0);
  
    /* Agregado Sweeet */
    Swal.fire({
        title: 'ESTAS POR VACIAR CARRITO',
        text: 'Aceptar para finalizar',
        icon: 'error',
        confirmButtonText: 'Aceptar'
    })
    PrecioTotal(); 
}

function vaciarCarro() {
    let vaciador = document.querySelector(".vaciarCarro");
    vaciador.innerHTML = "";
    vaciador.innerHTML = `<button id="vaciadorCarrito" type="button" class="btn btn-primary" onclick="clearStorage()">Vaciar carrito</button>`;
}

/* Por los momento para vaciar carrito tengo que clickear 2 veces, pero al agregar otro articulo aparece la sumatoria anterior */


/* Agregado Toastify */
function alertAgregado(text) {
	Toastify({
		text,
		duration: 3000,
		position: "right",
		style: {
			background: "linear-gradient(to right, #00ff, #000)"
		}
	}).showToast();
}




mostrarProductos();
PrecioTotal();
vaciarCarro();
console.log(carrito);

