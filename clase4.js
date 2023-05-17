// const numeros = ["Hola",2,3,7,"JavaScript",5,"Otro elemento","Otro Mas", "otro"]

// // console.log(numeros[2]);

// // const resultado = numeros[0] + numeros[3];
// // // console.log(numeros[7]);
// // console.log(resultado);



// for(let i = 0; i < numeros.length; i++){
//     alert(numeros[i])
// }


//METODO PUSH



// // console.log(miArray)

// miArray.push(100);

//  console.log(miArray)
// console.log(miArray.length)

//METODO UNSHIFT
// miArray.unshift(100)
//  console.log(miArray)


//METODO SHIFT
// miArray.shift()
// let elementoEliminado = miArray.pop()

// console.log(elementoEliminado)
// console.log(miArray)


//METODO SPLICE
// const miArray = ["Juan", "Martin", "Maria", "Julieta", "Roberto"]
//  miArray.splice(Desde la Posicion que quiero eliminar, Cuantas posiciones incluyendo esa posicion quiero eliminar)

// // miArray.splice(2,1)
// // console.log(miArray)


// // alert(miArray.join(" / "))
// // alert(miArray)

// //METODO INCLUDES
// console.log(miArray.includes("Juan"))


const miArray = ["Juan", "Martin", "Maria", "Julieta", "Roberto"]

let nuevoUsuario = ""


// do {
//     if (nuevoUsuario !== "") {
//         if (miArray.indexOf(nuevoUsuario) !== -1) {
//             alert("El usuario ya existe!")
//         } 
//     }

//     nuevoUsuario = prompt("Ingrese un nuevo nombre de  usuario")

// } while (miArray.indexOf(nuevoUsuario) !== -1 || nuevoUsuario == "")

// alert("El nombre de usuario " + nuevoUsuario + " fue cargado con éxito!")

// do {
//     if (nuevoUsuario !== "") {
//         if (miArray.includes(nuevoUsuario)) {
//             alert("El usuario ya existe!")
//         } 
//     }

//     nuevoUsuario = prompt("Ingrese un nuevo nombre de  usuario")

// } while (miArray.includes(nuevoUsuario)|| nuevoUsuario == "")

// alert("El nombre de usuario " + nuevoUsuario + " fue cargado con éxito!")


// const productos = [];

// function cargarProducto(){

//     let nombreProducto = prompt("Ingrese el nombre del producto:")

//     while(nombreProducto.trim() === ""){
//         nombreProducto = prompt("No puedes dejar el campo vacío, ingresa un producto:")
//     }

//     if(productos.includes(nombreProducto)){
//         alert("El producto ya existe")
//         return
//     }

//     productos.push(nombreProducto)
//     alert("El producto se agregó correcamente!")
//     let productosParaMostrar = productos.join(" / ")
//     console.log(productosParaMostrar)
//     return productosParaMostrar
// }


// let seguirAgregando = true;

// while(seguirAgregando){
//     let productosRecuperados = cargarProducto()
//     seguirAgregando = confirm("¿Desea agregar otro producto?")

//     if(!seguirAgregando){
//         alert("Los productos son: " + productosRecuperados)
//     }
// }

const productos = [
    {
        id:1,
        nombre: "Notebook HP",
        precio: 100000,
        stock: 4,
        categoria: "Notebooks"
    },
    {
        id:2,
        nombre:"Auriculares Logitech",
        precio: 20000,
        stock:4,
        categoria:"Auriculares"
    },
    {
        id:3,
        nombre: "Mouse Logitech",
        precio: 2000,
        stock: 10,
        categoria:"Mouses",
    }
]


for(let producto of productos){
    console.log(producto.nombre)
}


