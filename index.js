//
//  PreEntrega 2
//

const servicios = [
    {
        id: 1,
        nombre: "Copywriting",
        precio: 100,
        descripcion: "escribiremos 5 paginas de productos"
    },
    {
        id: 2,
        nombre: "Ad creatives",
        precio: 300,
        descripcion: "recibiras 10 imagenes para utilizar en tus anuncios"
    },
    {
        id: 3,
        nombre: "SEO",
        precio: 200,
        descripcion: "Auditaremos tu sitio y propondremos mejoras en SEO"
    }
]

function saludar(){
    alert("Bienvenido! Seleccione que servicios desea adquirir.")
}
saludar()

let servicioUsuario

while (!servicioUsuario || servicioUsuario > 3 || servicioUsuario < 0){
    servicioUsuario = Math.trunc(parseInt(prompt(servicios.map((servicio, i) => i+1 + ") " + servicio.nombre + ". $"+ servicio.precio ).join('\n'))))
}

alert("Usted eligió el servicio número: ("+ servicioUsuario + ") por el valor de : $"+ servicios[servicioUsuario - 1].precio)
