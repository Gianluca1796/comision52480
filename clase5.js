// let nombre = "Gianluca"
// let apellido = "Fava"
// let edad = 27
// let ciudad = "Rosario"


// const persona1 = {
//     nombre: "Gianluca",
//     apellido: "Fava",
//     edad: 27,
//     ciudad: "Rosario",
// }

// console.log(persona1.nombre)

// persona1.edad = 36
// persona1["ciudad"] = "Barcelona"

// const edad =20
// const edad =22

// console.log(persona1)

// persona1.dni = 12345678

// console.log(persona1)




// class Simulador {

//     constructor(saldoInicial){
//         this.saldo = saldoInicial
//     }

//     comprar(costo){
//         if(this.saldo < costo){
//             console.log("No tienes suficiente saldo")
//         }else{
//             this.saldo -= costo;
//             console.log("Compra realizada, saldo actual: ", this.saldo)
//         }
//     }
// }

// const miSimulador = new Simulador(1000)

// const costo = Number(prompt("Ingresa el costo del producto"))
// miSimulador.comprar(costo)

//EJEMPLO SENCILLO DE OBJETOS

// let usernameRegister = prompt("Ingrese su nombre de usuario")
// let passwordRegister = prompt("Ingrese su contraseña")

// const userRegister = {
//     username: usernameRegister,
//     password: passwordRegister
// }

// let usernameLogin = prompt("Ingrese su nombre de usuario")
// let passwordLogin = prompt("Ingrese su contraseña")


// const userLogin = {
//     username: usernameLogin,
//     password: passwordLogin
// }


// if((userLogin.username == userRegister.username) && (userLogin.password == userRegister.password)){
//     alert("Haz iniciado sesión")
// }else{
//     alert("Alguno de los datos son incorrectos")
// }


// function saludarUsuario () {
//     let nombreUsuario = localStorage.getItem("Nombre de Usuario")

//     if(nombreUsuario){
//         alert("Bienvenido de nuevo! " + nombreUsuario)
//     }else{
//         nombreUsuario = prompt("¡Es tu primera vez aqui? Ingrese su nombre de usuario")
//         localStorage.setItem("Nombre de Usuario", nombreUsuario)
//         alert("¡Es un gusto tenerte aquí!")
//     }
// }

// saludarUsuario()

// const producto1 = { id: 2, producto: "Arroz" };
// const enJSON    = JSON.stringify(producto1);
// console.log(producto1)
// console.log(enJSON); // {"id":2,"producto":"Arroz"}
// console.log(typeof producto1); // object
// console.log(typeof enJSON);    // string

// localStorage.setItem("producto1", enJSON);
// Se guarda {"id":2,"producto":"Arroz"}


// const enJSON    = '{"id":2,"producto":"Arroz"}';
// const producto1 = JSON.parse(enJSON);

// console.log(typeof enJSON);     // string
// console.log(typeof producto1);  // object
// console.log(producto1.producto); // Arroz

// const producto2 = JSON.parse(localStorage.getItem("producto1"));
// console.log(producto2.id);  // 2  

// const productos = [{
//         id: 1,
//         producto: "Arroz",
//         precio: 125
//     },
//     {
//         id: 2,
//         producto: "Fideo",
//         precio: 70
//     },
//     {
//         id: 3,
//         producto: "Pan",
//         precio: 50
//     },
//     {
//         id: 4,
//         producto: "Flan",
//         precio: 100
//     }
// ];

// localStorage.setItem("listaProductos", JSON.stringify(productos));

// const almacenados = localStorage.getItem("listaProductos")

// console.log(almacenados)


//EJEMPLO GENERAL

// const carritoCompras = JSON.parse(localStorage.getItem("carrito")) || [];


// function agregarProductos(){
//     let nombreProducto = prompt("Ingrese el nombre del producto que desea comprar")
//     let precioProducto = Number(prompt("Ingrese el valor del producto elegido"))

//     const producto = {
//         nombre: nombreProducto,
//         precio: precioProducto
//     }
//     carritoCompras.push(producto)

//     localStorage.setItem("carrito", JSON.stringify(carritoCompras))

//     alert("Producto agregado exitosamente!")
// }

// function mostrarProductos(){
//     if(carritoCompras.length > 0){
//         const CarritoAMostrar  =  formatearProductos()
//         alert("Carrito de compras: \n\n" + CarritoAMostrar)
//     }else{
//         alert("El carrito esta vacío")
//     }
// }

// function formatearProductos() {
//     let carritoFormateado = ""

//     for(let i= 0; i < carritoCompras.length; i++){
//         const producto = carritoCompras[i]
//         carritoFormateado += `${producto.nombre} - ${producto.precio} \n`
//     }

//     return carritoFormateado
// }

// agregarProductos()
// mostrarProductos()



// class Persona {
//     constructor(nombre, apellido, edad, ciudad, numeroTarjeta) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//         this.edad = edad;
//         this.ciudad = ciudad;
//         this.setNumeroTarjeta(numeroTarjeta);
//     }

//     setNumeroTarjeta(numeroTarjeta) {
//         this.#numeroTarjeta = numeroTarjeta;
//     }

//     getNumeroTarjeta() {
//         return this.#numeroTarjeta;
//     }
// }

// const persona1 = new Persona ("gian", "fava", 27, "Rosario", 1234)

// console.log(persona1.setNumeroTarjeta)