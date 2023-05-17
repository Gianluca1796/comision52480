// function verProductos (){
// }

// function cargarUsuario(){
// }

// function saludar(){
//     console.log("Bienvenidos a la tercera clase de JS");
// }

// saludar();

// function solicitarNombre(){
//     let nombreIngresado = prompt("Ingresar nombre")
//     console.log(nombreIngresado)
//     alert("El nombre ingresado es " + nombreIngresado)
// }

// for(let i = 0; i<=2; i++){
//     solicitarNombre();
// }

// solicitarNombre();
// solicitarNombre();
// solicitarNombre();


// let resultado = 0;


// //Función que suma dos números y asigna a resultado
// function sumar(primerNumero, segundoNumero) {
//     resultado = primerNumero + segundoNumero
// }
// //Función que muestra resultado por consola
// function mostrar(mensaje) {
//     console.log(mensaje)
// }

// //Llamamos primero a sumar y luego a mostrar
// sumar(6, 3);
// mostrar(resultado); 


// function sumar(num1,num2){
//     let resultado = num1 + num2;
//     return resultado
// }

// let resultadoSuma = sumar(16,4)

// function mostrarResultado (){
//     console.log(resultadoSuma)
// }

// mostrarResultado();


// function operacion(num1,num2,operador){
//     switch(operador) {
//         case "+":
//             return num1 + num2;
//         case "-":
//             return num1 - num2;
//         case "*":
//             return num1 * num2;
//         case "/":
//             return num1 / num2;
//     }
// }

// function operacionUsuario(){
//     let num1 = Number(prompt("Ingrese el primer numero"));
//     let num2 = Number(prompt("Ingrese el segundo numero"));

//     while(isNaN(num1) || isNaN(num2))
//     {
//         alert("Ingrese solo números por favor!")
//         num1 = Number(prompt("Ingrese el primer numero"));
//         num2 = Number(prompt("Ingrese el segundo numero"));
//     }

//     let operador = prompt("Ingrese un operador (+, -, * o /)")

//     while(operador !== "+" && operador !== "-" && operador !== "*" && operador !== "/"){
//         alert("Ingrese un operador válido")
//         operador = prompt("Ingrese un operador (+, -, * o /)")
//     }

//     let resultado = operacion(num1,num2,operador)
//     alert("El resultado es: " + resultado)
// }

// operacionUsuario()

// let turnosDisponibles = 4;


// function mostrarTurnosDisponibles(turnosDisponibles){
//     for(let i = 1; i<= turnosDisponibles; i++ )
//     {
//         console.log("Los turnos disponibles para este mes son: " + i)
//     }
// }

// mostrarTurnosDisponibles(turnosDisponibles);




// const suma = function (a, b) { 
//     return a + b 
// }


// const resta = function (a, b) { return a - b }




// console.log( suma(15,20) )



// console.log( resta(15,5) )

// const suma = (a, b) =>  a + b ;
// //Si es una función de una sola línea con retorno podemos evitar 
// // escribir el cuerpo.
// const resta = (a, b) =>  a - b ;
// console.log( suma(15,20) )
// console.log( resta(20,5) )


// const IVA = 1.21;


// const agregarIva = (precioSinIva) => {

//     let precioConIva = precioSinIva * IVA;
//     return precioConIva;

// }

// let precioProductoSinIva = 100

// let precioProductoConIva = agregarIva(precioProductoSinIva)


// console.log("El precio sin IVA de mi producto es de: $" + precioProductoSinIva)

// console.log("El precio con IVA de mi producto es: $" + precioProductoConIva)


// const IVA = 1.21;
// let importe = prompt("Ingresa el importe sobre el cual quieres calcular el IVA:");

// const precioConIVA = (imp, iva) => imp * iva;


// console.log(precioConIVA(importe, IVA))

const valorM2 = 31.83; //valor fijo del seguro por Metro 2
const comision = 1.025; //comisión del 2.5%
const M2 = Number(prompt("Ingresa los Metros cuadrados de la propiedad a cotizar un seguro:"));



const calcularPoliza = m2 => {(m2 * valorM2 * comision)}




const valorPoliza = calcularPoliza(M2);
console.log(valorPoliza)


console.log("El costo de la póliza es: $" + valorPoliza);