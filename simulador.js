//SIMULADOR DE COMPRA

//CUPON DE DESCUENTO 30%: promo
//CUPON DE DESCUENTO 50%: coderhouse

//Funciones
function agregarCarrito(){
    alert(`${productos.toUpperCase()} agregado al carrito.`)
}

function cuponDescuento(total, descuento){
    totalFinal = total*descuento
}

total = 0
//Solicitud nombre cliente
let nombreCliente = prompt("Ingrese su nombre").toUpperCase()
    alert(`Hola ${nombreCliente}, ahora comenzaremos a procesar su compra`)

//Cantidad de producto que cliente desea comprar
let cantidad = parseInt(prompt("¿Cuantos productos necesita?"))
    while(isNaN(cantidad)){ 
        cantidad = parseInt (prompt (`ERROR! Tipo de dato incorrecto. Ingrese la cantidad de productos que necesita`)) //Validacion tipo de dato number 
    }

    for (let i=1 ; i<=cantidad ; i++){
        productos = prompt(`Por favor, ingrese el NOMBRE DEL PRODUCTO N°${i} que desea comprar`)

        productos = productos.toLowerCase()

        while (productos != "gafas" && productos != "zapatillas" && productos != "gorra" && productos != "pulsera" ){
            productos = prompt (`No existe el producto "${productos}". Por favor ingrese el NOMBRE DEL PRODUCTO CORRECTAMENTE`).toLowerCase() //Validacion Producto
        }
        if (productos == "gafas"){
            agregarCarrito(productos)
            total = total + 20
        }
        else if (productos == "gorra" ){
            agregarCarrito(productos)
            total = total + 10
        }
        else if(productos == "zapatillas"){
            agregarCarrito(productos)
            total = total + 45
        }
        else if (productos == "pulsera"){
            agregarCarrito(productos)
            total = total + 8
        }
    }
    //Suma de productos
    alert(`Su total es $${total.toFixed(3)} CLP`)

    //Cupon de Descuento
let respuesta = prompt("¿Usted tiene un CUPON DE DESCUENTO? Escriba SI o NO").toLowerCase()
    while (respuesta != "si" && respuesta != "no"){
        respuesta = prompt("Respuesta inválida, por favor, escriba SI o  NO").toLowerCase()
    }

    if (respuesta == "si"){
        cupon = prompt("Ingrese el CODIGO DEL CUPON").toLowerCase()
        console.log(cupon)
        
        while (cupon != "coderhouse" && cupon != "promo"){
            cupon = prompt("Codigo inválido. Ingrese el CODIGO DEL CUPON").toLowerCase()
        }
        if( cupon == "promo"){
            cuponDescuento(total, 0.7)
            alert(`A obtenido un 30% de descuento. Su total a pagar es $${totalFinal.toFixed(3)} CLP`)
        }
        else if(cupon == "coderhouse"){
            cuponDescuento(total, 0.5)
            alert(`A obtenido un 50% de descuento. Su total a pagar es $${totalFinal.toFixed(3)} CLP`)
        }
        else { //Precio final con descuento
            alert(` Su total a pagar es $${total.toFixed(3)} CLP`)
        }
        }

    alert ('Gracias por su compra, vuelva pronto')