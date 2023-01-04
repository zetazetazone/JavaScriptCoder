/*  Algoritmo para calcular el precio de los servicios ofrecidos a valor constante,
    aplicando descuentos segun el medio de pago y si supera cierto monto total
*/

//Valores de los servicios
const servicio1 = 100
const servicio2 = 200
const servicio3 = 300

//Valores default de las variables de precio
let serv1 = ""
let serv2 = ""
let serv3 = ""
let sum1 = 0
let sum2 = 0
let sum3 = 0
let crypto = 0

//Alerta para anunciar los descuentos
function saludar(){
    alert("Bienvenido! Seleccione que servicios desea adquirir. Tambien le ofrecemos un descuento del 10% si opta por Crypto como medio de pago y un 10% de descuento si supera los $300")
}

saludar()

//Preguntamos a usuario que servicio desea y nos aseguramos que la respuesta sea solo [y/n]
while (serv1 !== "y" && serv1 !== "n"){
    serv1 = prompt("Desea adquirir el servicio 1 por un valor de $"+ servicio1 +"? [y/n]").toLowerCase()
    console.log("serv1: "+ serv1)
 }
while (serv2 !== "y" && serv2 !== "n"){
    serv2 = prompt("Desea adquirir el servicio 2 por un valor de $"+ servicio2 +"? [y/n]").toLowerCase()
    console.log("serv2: "+ serv2)
}
while (serv3 !== "y" && serv3 !== "n"){
    serv3 = prompt("Desea adquirir el servicio 3 por un valor de $"+ servicio3 +"? [y/n]").toLowerCase()
    console.log("serv3: "+ serv3)
}

//Sumar los precios de servicios solo si el cliente ingreso 'y'
if(serv1 == "y"){
    sum1 = servicio1
}
if(serv2 == "y"){
    sum2 = servicio2
}
if(serv3 == "y"){
    sum3 = servicio3
}

let precioSinDesc = sum1 + sum2 + sum3

console.log("costo total: "+ precioSinDesc)

//Alerta por el subtotal del monto y prompt de medio de pago.
// Realizar el descuento si supera los $300
if( precioSinDesc < 300){
    let crypto = Number(prompt("El subotal es de: $" + precioSinDesc + ".\nQue medio de pago va a utlizar? \n[1] Tarjeta de credito \n[2] Tarjeta de debito \n[3] Crypto (10% de descuento)"))
    if (crypto == 3){
        let precioFinal = precioSinDesc - (precioSinDesc *0.1)
        alert("El precio final es de: $" + precioFinal)
    }
    else{
        alert("El precio final es de: $" + precioSinDesc)
    }
}
else{
    let precioDcto = precioSinDesc - (precioSinDesc * 0.1)
    let crypto = Number(prompt("El subotal es de: $" + precioDcto + " tras superar el monto de $300.\nQue medio de pago va a utlizar? \n[1] Tarjeta de credito \n[2] Tarjeta de debito \n[3] Crypto (10% de descuento)"))
    if (crypto == 3){
        let precioFinal = precioDcto - (precioDcto *0.1)
        alert("El precio final es de: $" + precioFinal)
    }
    else{
        alert("El precio final es de: $" + precioDcto)
    }
}

// !! Falta checkear si el prompt de crypto es menor a 1 y mayor a 3








