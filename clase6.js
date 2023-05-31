// function mayorQue(n) {
//     return (m) => m > n
// }

// let mayorQueDiez = mayorQue(10)

// console.log( mayorQueDiez(12) )  
// console.log( mayorQueDiez(8) )  

// let mayorQueDiez = (m) => m > 10



// const numeros = [1,2,3,4]
// const duplicado = []

// function porCadaUno(array,funcion){
//     for(let i = 0; i < array.length; i++){
//         funcion(array[i])
//     }
// }

// porCadaUno(numeros,console.log)

// porCadaUno(numeros, (el)=> {
//     duplicado.push(el * 2)
// })

// console.log(duplicado)



//Ejemplo forEach

// const numeros = [1, 2, 3, 4, 5, 6]

// numeros.forEach((num) => {
//     console.log(num)
// })

// numeros.forEach(function (num) {
//     console.log(num)
// })


// const cursos = [{
//         nombre: "JavaScript",
//         precio: 15000,
//         categoria: "Programacion"
//     },
//     {
//         nombre: "React Js",
//         precio: 22000,
//         categoria: "Programacion"
//     },
//     {
//         nombre: "Angular Js",
//         precio: 22000,
//         categoria: "Programacion"
//     },
//     {
//         nombre: "Desarrollo Web",
//         precio: 16000,
//         categoria: "Programacion"
//     },
//     {
//         nombre: "Marketing de redes",
//         precio: 20000,
//         cateogria: "Marketing"
//     },
//     {
//         nombre: "Publicidad en Facebook ADS",
//         precio: 25500,
//         cateogria: "Marketing"
//     },
// ]


// cursos.forEach((curso) => {
//     console.log(curso.nombre)
// })

// cursos.forEach((curso) => {
//     console.log(curso.precio)
// })

// const nombresCurso = []

// cursos.forEach((curso) => {
//     //Crea una tarjetia hermosa como las de mercado libre
//     nombresCurso.push(curso.nombre + " " + curso.precio)
// })
// console.log(nombresCurso)

//Ejemplo find y filter
// const cursoEncontrado = cursos.find((curso) => curso.nombre == "React Js")

// const cursosEnPromo = cursos.filter((curso) => curso.precio < 20000)

// const cursosFrameworks = cursos.filter((curso) => curso.nombre.includes('Js'))


// console.log(cursoEncontrado)
// console.log(cursosEnPromo)
// console.log(cursosFrameworks)


//Ejemplo Map
// const porcentajeDeAumento = 1.25


// const cursosConAumento = cursos.map((curso) => {
//     return {
//         nombre:curso.nombre,
//         precio: curso.precio * porcentajeDeAumento,
//         categoria:curso.categoria
//     }
// })

// console.log(cursosConAumento)
// console.log(cursos)


//Ejemplo de reduce

// const total = cursos.reduce((acc,ite) => acc + ite, 0)

// console.log(total)


//Ejemplo de sort
// console.log(cursos)
// cursos.sort((objetoA,objetoB) => {
//     if(objetoA.precio > objetoB.precio){
//         return -1 //Quiere decir que el objeto B es mayor que el objeto A
//     }else if(objetoA.precio < objetoB.precio){
//         return 1 //Quiere decir que el objeto A es mayor que el B
//     }else{
//         return 0 //Quiere decir que son exactamente iguales
//     }
// })

// console.log(cursos)

class Hamburguesa {
    constructor(nombre,precio,ingredientes,numeroCombo){
        this.nombre= nombre;
        this.precio = precio;
        this.ingredientes = ingredientes;
        this.numeroCombo = numeroCombo
    }
}

const hamburguesas = []

hamburguesas.push(new Hamburguesa("Krusty Burger", 150.00, ['Carne', 'Queso'], 1))
hamburguesas.push(new Hamburguesa("Krusty Burger Doble", 225.00, ['Carne', 'Queso', 'Panceta'], 2))
hamburguesas.push(new Hamburguesa("Krusty Pollo", 150.00, ['Pollo', 'Queso'], 3))
hamburguesas.push(new Hamburguesa("Krusty Mega balde de Pollo", 140.00, ['Pollo', 'Queso',
'Aderezo'], 4))
hamburguesas.push(new Hamburguesa("Super Krusty", 150.00, ['Carne', 'Queso', 'huevo'], 5))
hamburguesas.push(new Hamburguesa("Super Krusty Doble", 180.00, ['Carne', 'Queso', 'huevo'], 6))
hamburguesas.push(new Hamburguesa("Super Krusty Triple", 205.00, ['Carne', 'Queso', 'huevo'], 7))
hamburguesas.push(new Hamburguesa("Krusty Vegan", 125.00, ['Espinaca', 'Soja'], 8))

const hamburguesasMillonarias = hamburguesas.filter((hamburguesa) => hamburguesa.precio > 200.00)

console.table(hamburguesasMillonarias)


const resultadoAlitas = hamburguesas.find((hamburguesa) => hamburguesa.nombre.includes("alitas"))

// if(resultadoAlitas){
//     alert(`Combo encontrado: ${resultadoAlitas.nombre}`)
// }else{
//     console.warn("No se encontraron combos con alitas")
// }

const hamburguesasDobles = hamburguesas.filter((hamburguesa) => hamburguesa.nombre.includes("Doble"))
if(hamburguesasDobles.length > 0){
    console.table(hamburguesasDobles)
}else{
    console.warn("No hay combos dobles")
}