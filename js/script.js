/* Articulos */

class Articulo { 
    constructor(nombre, stock, precio){ 
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;

        this.venta = function(cantidadComprada){
            this.stock -= cantidadComprada
        }
    }

}

let ArticulosMenu = "Productos en tienda"


const articuloA = new Articulo ("remera", 50, 500)
const articuloB = new Articulo ("jean", 50, 800)
const articuloC = new Articulo ("buzo", 50, 750)
const articuloD = new Articulo ("vestido", 50, 830)
const articuloE = new Articulo ("campera", 50, 1500)


const Articulos =  [articuloA, articuloB, articuloC, articuloD, articuloE ];
const menorPrecio = Articulos.filter(Articulo => Articulo.precio <= 750);
const mayorPrecio = Articulos.filter(Articulo => Articulo.precio >= 790);
console.log(menorPrecio);
console.log(mayorPrecio);


for(const articulo of Articulos){
    ArticulosMenu += "\n" +"- " + articulo.nombre
}


/* Envios */

function Envios (nombreValor, precioValor){
    this.nombre = nombreValor;
    this.precio = precioValor;
}

let contador = 0
let listadoEnvios = "Enviamos con estas empresas: "

const EnviosA = new Envios("MercadoFlex", 450)
const EnviosB = new Envios("PeYa", 450)
const EnviosC = new Envios("Retiro en tiendo", 0)


const listaEnvios = [EnviosA, EnviosB, EnviosC]

for(const envios of listaEnvios){
    contador++
    listadoEnvios += "\n" + contador + "- " + envios.nombre + " $" + envios.precio
}

/* Nombre usuario */

let nombreUsurio = prompt("Hola nos prodrias indicar tu nombre y apellido");{
    console.log("Usuario " + nombreUsurio + " se registro")
}

/* Metodo de pago */
function metodo(){
    let opcion = prompt("Seleccione metodo de pago: \n1 - Efectivo \n2 - Debito/Credito \n3- MercadoPago")

    switch(opcion){
        case "1":
            efectivo();
            break;
        case "2":
            debito();
            break;
        case "3":
            MercadoP()
            break;
        default:
            alert("Eliga una opcion correcta")
            metodo()
            break;
    }
}

/* Menu de compra */

function menu(){
    let opcion = prompt("Opciones: \n1 - Ver productos \n2 - Whatsapp \n3 - ShowRoom");

    switch(opcion){
        case "1":
            listaArticulos();
            comprarArticulos();
            metodo();
            listarEnvios();
            break;
        case "2":
            whatsapp();
            break;
        case "3":
            ShowRoom();
            break;
        default:
            alert("Opcion Incorrecta")
            break;
    }
}


let cantidadComprada;
let precioTotalVenta = 0;

/* Funciones de menu  */

function listaArticulos(){
    alert(ArticulosMenu);
}


function stockInsuficiente(stock) {
    alert("Solo contamos con esta cantidad " + stock + " unidades")
}

function stockSuficiente(stock) {
    stock = stock - cantidadComprada
}

function stockRestante(stock, articulo) {
    stock = stock - cantidadComprada + ' ' +articulo.nombre
    console.log("Quedan la siguiente cantidadd: " + stock);
}

function registroVenta(articulo){
    console.log(nombreUsurio + " realizo la compra de " + cantidadComprada + ' ' + articulo.nombre + 's');
}

function calcularPrecio(precio){
    precioTotalVenta += cantidadComprada * precio;
}

function whatsapp(){
    alert("+54 9 11 xxxxx")
}

function ShowRoom(){
    alert("Nos encontramos atendiedo en el horario de 8:00am-12:00pm")
    prompt("Indicar la hora para agendar cita")
}

function compra(stock, precio,  articulo){
    cantidadComprada = prompt("Cuanto productos quiere comprar");
    if(cantidadComprada <= stock){
        articulo.venta(cantidadComprada);
        if (cantidadComprada < 50) {
            calcularPrecio(precio);
            stockRestante(stock, articulo);
            registroVenta(articulo)
        }

    }
    else{
            stockInsuficiente(stock)
        }
}

function listarEnvios(){
    alert(listadoEnvios)
}

function comprarArticulos(){

    let ArticulosComprados = parseInt(prompt("Cuanto productos diferentes quieres comprar"))

    for (let i = 0; i < ArticulosComprados; i++) {

        let nombreArticulo = prompt("Que productos desea comprar:")

        if (nombreArticulo == articuloA.nombre) {
            compra(articuloA.stock, articuloA.precio, articuloA)
        }
        else if (nombreArticulo == articuloB.nombre) {
            compra(articuloB.stock, articuloB.precio, articuloB)
        }
        else if (nombreArticulo == articuloB.nombre) {
            compra(articuloB.stock, articuloB.precio, articuloB)
        }
        else if (nombreArticulo == articuloC.nombre) {
            compra(articuloC.stock, articuloC.precio, articuloC)
        }
        else if (nombreArticulo == articuloD.nombre) {
            compra(articuloD.stock, articuloD.precio, articuloD)
        }
        else {
            alert('No contamos con ese producto, pronto ingresara')
        }
    }

    alert("El precio de su compra es de: $" + precioTotalVenta);
}


function efectivo(){
    prompt("Realizar el pago mediante: \n1- PagoFacil \n2- RapiPago")
    alert("Gracias por su compra, pago realizado con exito")
    console.log("Se acredito el pago de " + nombreUsurio + " por $" + precioTotalVenta)
}

function debito(){
    prompt("Seleccionar tipo de tarjeta: \n1- Debito \n2- Credito")
    alert("Gracias por su compra, pago realizado con exito")
    console.log("Se acredito el pago de " + nombreUsurio + " por $" + precioTotalVenta)
}

function MercadoP(){
    prompt("Le enviaremos un link de pago via Whatsapp, indique su numero")
    alert("Gracias por su compra, pago realizado con exito")
    console.log("Se acredito el pago de " + nombreUsurio + " por $" + precioTotalVenta)
}

menu()



/* Metodo de entrega */

const Direccion = [];
let   cantidad     = 1;
do{
   let entrada = prompt("Ingresar Direccion de entrega o Retiro en tienda");
    console.log ("Entregar en " + entrada);
   Direccion.push(entrada.toUpperCase());
}while(Direccion.length != cantidad)
const compraFinalizada = Direccion.concat(["En el transcurso de 2hs tu pedido estara listo para ser enviado o retirado"]);
alert(compraFinalizada.join("\n"));

/* Finalizar compra */

let entrada = prompt("Indicar 'Finalizar' para terminar la compra");
while(entrada != "Finalizar" ){
    alert("El usuario ingresó "+ entrada);
    entrada = prompt("Ingresar 'Finalizar' para terminar la operacion. Y realizar el pago");
}

console.log("Total venta realiazada a usuario " + nombreUsurio + ' por $' + precioTotalVenta  )