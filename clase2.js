true // Verdadero
false // falso



// let edadPermitida = 16;



// if(edadPermitida >= 25){
//     console.log("Puede pasar al VIP del boliche")
// }else if(edadPermitida >= 18){
//     console.log("Puede pasar al boliche");
// }else{
//     console.warn("No puedes pasar al boliche")
// }



// let nombreUsuario = prompt("Ingrese su nombre");

// if(nombreUsuario == ""){
//     alert("Acceso denegado, ingresa un nombre")
// }else{
//     alert("Bienvenida " + nombreUsuario)
// }



// Diferencias entre igualdad e igualdad estricta

// if(2 == "2"){
//     console.log("Esto es correcto!")
// }

// if(2 === "2"){
//     console.log("Esto es correcto!")
// }

// console.log(2 != 2) //False
// console.log(2 !== "2") //True
// console.log( 2 != "2") //False


// let precio = 40;

// if(precio <20){
//     alert("El precio es menor que 20")
// }else if (precio < 50){
//     alert("El precio es menor que 50")
// }else if(precio < 100){
//     alert("El precio es menor que 100")
// }else{
//     alert("El precio es mayor que 100")
// }


// let nombre = prompt("Ingrese su nombre");
// let apellido = prompt("Ingrese su apellido")

// if(nombre == "" || apellido == ""){
//     alert("Ingrese todos los campos")
// }

// if(nombre != "" && apellido != ""){
//     alert("Bienvenido " + nombre + " " + apellido)
// }else{
//     alert("Ingrese todos los campos")
// }


// let nombreIngresado = prompt("Ingrese su nombre").toLowerCase();
// console.log(nombreIngresado)

// if(nombreIngresado == "valentina"){
//     alert("Bienvenida Valentina")
// }else{
//     alert("No sos Valentina!")
// }


// for(desde; hasta; actualización){
//     Código a ejecutar
// }
// i++
// i = i +1
// i-- 
// i = i - 1


// for(let i = 0; i<=5; i++){
//     alert(i)
// }

// for(let i = 1; i<=5; i++){
//     let nombre = prompt("Ingresa un nombre")
//     alert("Truno N° " + i  + "Nombre: " + nombre)
//     if(i == 5){
//         alert("No hay mas turnos")
//     }
// }

// let usuario = prompt("Ingrese su nombre de usuario")

// while(usuario != "salir"){

//     alert("Usuario guardado" + usuario)

//     usuario = prompt("Ingrese su nombre de usuario")
// }

// let entrada = prompt("Ingrese un nombre").toUpperCase()

// while (entrada != "ESC") {
//     switch (entrada) {
//         case "ANA":
//             alert("Bienvenida Ana!");
//             break;
//         case"JUAN":
//             alert("BIenvenido Juan!")
//             break;
//         default:
//             alert("Usuario incorrecto")
//             break;
//     }
//     entrada = prompt("Ingrese un nombre").toUpperCase()
// }

//DESAFIOS CLASE 2//
// let cantidad = prompt('INGRESE CANTIDAD DE REPETICIONES');
// let texto = prompt('INGRESE TEXTO A REPETIR');
// for (let index = 0; index < cantidad; index++) {
//     console.log(texto);
// }


// let lados = prompt('INGRESE CANTIDAD DE LADOS');
// for (let index = 0; index < lados; index++) {
//     if (index > 3) {
//         alert("El poligono es un cuadrilatero");
//     }
// }



// let producto = "";
// let precioDelProducto = 0;
// let cantidad = 0;
// let precioTotalCompra = 0;
// let flag = false;

// do {
//     producto = prompt("¿Qué producto desea llevar? \n1) Yerba \n2) Mate \n3) Termo \n4) Combo").toUpperCase()
//     cantidad = prompt("¿Cuántas unidades quieres llevar?")
//     switch (producto) {
//         case "YERBA":
//             precioDelProducto = 600;
//             break;
//         case "MATE":
//             precioDelProducto = 500;
//             break;
//         case "TERMO":
//             precioDelProducto = 6000;
//             break;
//         case "COMBO":
//             precioDelProducto = 6900;
//             break;
//         default:
//             alert("Datos incorrectos");
//             precioDelProducto = 0;
//             cantidad = 0;
//     }
//     precioTotalCompra += precioDelProducto * cantidad
//     // precioTotalCompra = precioTotalCompra + precioDelProducto * cantidad
//     flag = confirm("¿Quieres continuar comprando?")
// } while (flag)

// alert("El total de la compra es de " + precioTotalCompra)



// function explainVar(){
//     var a = 10;

//     console.log(a);

//     if(true){
//         var a = 20;
//         console.log(a)
//     }

//     console.log(a)
    
// }

// explainVar()


// function explainLet(){
//     let a = 10;

//     console.log(a);

//     if(true){
//         let a = 20;
//         console.log(a)
//     }

//     console.log(a)
    
// }

// explainLet()