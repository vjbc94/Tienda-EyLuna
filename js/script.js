let cantidadComprada = 0;
let precioTotalVenta = 0;
let listaProductos = [];

/* Estructura de Productos */
function Producto(nombre, stock, precio, imagenes, categoria, id) {
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

/* Productos Cargados del Json */

fetch("productos.json")
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
    });

const carrito = [];


/* Clase Productos por categoria */

let remera = document.querySelector('.remeras')
let jean = document.querySelector('.jeans')
let buzo = document.querySelector('.buzos')
let vestido = document.querySelector('.vestidos')
let campera = document.querySelector('.camperas')


/* Productos mostrados en pantalla */

function mostrarProductos() {
    let ArticulosPantalla = document.querySelector(".ArticulosPantalla");
    ArticulosPantalla.innerHTML = ''

    for (const producto of listaProductos) {
        let nombre = producto.nombre;
        let imagenes = producto.imagenes;
        let precio = producto.precio;
        let id = producto.id;
        let stock = producto.stock;
        let contenedor = document.createElement("div");

        contenedor.innerHTML = `<div class="card-articulo border">
                            <img src=${imagenes} class="imagen"/>
                            <h3 id= "nombre">  ${nombre}</h3>
                            <b>$${precio}</b>
                            <p>Disponible: ${stock} unidades</p>
                            <button id="boton${id}" type="button" class= "btn btn-outline-dark" onclick="card(${precio},${id},${stock})"> COMPRAR </button>
                            </div>`
        ArticulosPantalla.appendChild(contenedor);
    }
}

/* Seleccion de productos por categoria */

remera.addEventListener('click', function () { renderProductos("remera") })
jean.addEventListener('click', function () { renderProductos("jean") })
vestido.addEventListener('click', function () { renderProductos("vestido") })
campera.addEventListener('click', function () { renderProductos("campera") })
buzo.addEventListener('click', function () { renderProductos("buzo") })


/* Productos por categoria */
function renderProductos(categoria) {
    let ArticulosPantalla = document.querySelector('.ArticulosPantalla')
    ArticulosPantalla.innerHTML = ''
    const productos = listaProductos.filter(x => x.categoria == categoria)
    for (const producto of productos) {
        /* Agregado desestructuracion */
        let nombre = producto.nombre;
        let imagenes = producto.imagenes;
        let precio = producto.precio;
        let id = producto.id;
        let stock = producto.stock;
        let contenedor = document.createElement("div");
        contenedor.innerHTML = `<div class="card-articulo border">
                            <img src=${imagenes} class="imagen"/>
                            <h3 id= "nombre">  ${nombre}</h3>
                            <b>$${precio}</b>
                            <p>Disponible: ${stock} unidades</p>
                            <button id="boton${id}" type="button" class= "btn btn-outline-dark" onclick="card(${precio},${id},${stock})"> COMPRAR </button>
                            </div>`
        ArticulosPantalla.appendChild(contenedor);
    }
}

/* Funcion Agregar carrito */

function card(precio, id, stock) {
    for (const producto of listaProductos) {
        if (producto.id === id) {
            if (stock > 0) {
                carrito.push(precio);
                producto.venta(1);
                precioTotalVenta = carrito.reduce((partialSum, a) => partialSum + a, 0);
                PrecioTotal();
                mostrarProductos();
                alertAgregado("Agregaste '" + producto.nombre + "' a tu carrito");
            } else {
                stockInsuficiente(producto);
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
    precioTotalVenta = carrito.reduce((partialRest,) => - partialRest, 0);
    /*  Sweeet */
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



/* Toastify */
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