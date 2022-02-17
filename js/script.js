let nombreArticuloA = "Remera";
let stockArticuloA = 40;
let precioArticuloA = "500";

let nombreArticuloB = "Jean";
let stockArticuloB = 25;
let precioArticuloB = "1000";

let nombreArticuloC = "Buzo";
let stockArticuloC = 30;
let precioArticuloC = "850";
let metodos = "PagoFacil , MercadoP , Debito, Credito";


let nombreUsurio = prompt("Hola nos prodrias indicar tu nombre");{
    console.log("Usuario " + nombreUsurio + " se registro")
}

let cantidadProductosComprados = parseInt(prompt("Cuantos productos diferentes quieres comprar: \n - Remera \n - Jean \n - Buzo"))
let cantidadComprada;
let precioTotalVenta = 0;


for( let i = 0 ; i < cantidadProductosComprados; i++ ){
    let nombreCompra = prompt("Ingrese el nombre del articulo que desea comprar (Elegi primero los nombres y luego la cantidad)")

if ( nombreCompra == nombreArticuloA) {
    cantidadComprada = parseInt (prompt("Ingrese la cantidad que quiere comprar"));
    if (cantidadComprada <= stockArticuloA){
        stockArticuloA = stockArticuloA - cantidadComprada;
        precioTotalVenta += cantidadComprada * precioArticuloA;
        console.log(nombreUsurio + " realizo la compra de " + cantidadComprada + ' ' + nombreCompra + 's');
        console.log("Quedan " + stockArticuloA + " remeras en stock");
    }
    else {
        alert ("Solo contamos con esta cantidad " + stockArticuloA + " unidades")
    }
}

if ( nombreCompra == nombreArticuloB) {
    cantidadComprada = parseInt (prompt("Ingrese la cantidad que quiere comprar"));
    if (cantidadComprada <= stockArticuloB){
        stockArticuloB = stockArticuloB - cantidadComprada;
        precioTotalVenta += cantidadComprada * precioArticuloB;
        console.log(nombreUsurio + " realizo la compra de " + cantidadComprada + ' ' + nombreCompra + 's');
        console.log("Quedan " + stockArticuloB + " jean en stock");
    }
    else {
        alert ("Solo contamos con esta cantidad " + stockArticuloB + " unidades")
    }
}

if ( nombreCompra == nombreArticuloC) {
    cantidadComprada = parseInt (prompt("Ingrese la cantidad que quiere comprar"));
    if (cantidadComprada <= stockArticuloC){
        stockArticuloC = stockArticuloC - cantidadComprada;
        precioTotalVenta += cantidadComprada * precioArticuloC;
        console.log(nombreUsurio + " realizo la compra de " + cantidadComprada + ' ' + nombreCompra + 's');
        console.log("Quedan " + stockArticuloC + " jean en stock");
    }
    else {
        alert ("Solo contamos con esta cantidad " + stockArticuloC + " unidades")
    }
}

}

let entrada = prompt("Indicar 'Finalizar' para terminar la compra");
while(entrada != "Finalizar" ){
    alert("El usuario ingresó "+ entrada);
    entrada = prompt("Ingresar 'Finalizar' para terminar la operacion. Y realizar el pago");
}

console.log("Total venta realiazada a usuario " + nombreUsurio + ' por $' + precioTotalVenta  )

alert("Muchas Gracias por elegirnos " + nombreUsurio +  ", El precio de su compra es " + '$' + precioTotalVenta);
function metodo(){
    let opcion = prompt("Seleccione metodo de pago: \n1 - Efectivo \n2 - Debito/Credito \n3- MercadoP")

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

metodo()
