// console.log(document)
// console.log(document.body)

// *** Diferentes Selectores *** //

// const contenido = document.getElementById("contenido")
// console.log(contenido)

// const parrafos = document.getElementsByClassName("parrafo")
// console.log(parrafos)

// const contenido1 = document.querySelector("#contenido")
// console.log(contenido1)

// const parrafos1 = document.querySelectorAll(".parrafo")
// console.log(parrafos1)

// // *** Diferencias entre comillas *** //
// "" == ''
// "" && '' !== ``


// *** Ejemplo de inneHTML e innerText *** /

// parrafos[0].innerText = "Hola Mundo! Esto es un enlace <a href='#'>Enlace</a>"

// parrafos[1].innerHTML = 'Hola Mundo! Esto es un enlace <a href="#">Enlace</a>'

// contenido.innerHTML = "<h2>Hola mundo!</h2>"
// console.log(contenido.innerHTML)
// console.log(contenido.innerText)

// classList
// className

// const titulo = document.getElementById("titulo")
// console.log(titulo.className)
// console.log(titulo.classList)
// titulo.classList.remove("border-red")
// console.log(titulo.classList)

// const frutas = ["Ananá", "Banana", "Durazno", "Kiwi", "Manzana", "Papaya", "Pera"]

// function cargarDom() {

//     const titulo = document.getElementById("titulo")
//     const lista = document.querySelector("#listado")

//     titulo.innerHTML = "Ingresá a <a href='#'>www.mandafruta.com</a>"

//     frutas.forEach(fruta => {
//         lista.innerHTML += `<li>${fruta}</li>`
//     })
// }

// cargarDom()
// const contenedorPeliculas = document.getElementById("contenedorPeliculas")

// const peliculas = [{
//         id: 1,
//         titulo: "El señor de los anillos",
//         director: "Peter Jasckson",
//         duracion: 120
//     },
//     {
//         id: 2,
//         titulo: "El padrino",
//         director: "Fracis Coppola",
//         duracion: 120
//     },
//     {
//         id: 3,
//         titulo: "Pulp Fiction",
//         director: "Quentin Tarantino",
//         duracion: 120
//     }
// ]


// for (const pelicula of peliculas) {
//     let contenedor = document.createElement("div")
//     contenedor.innerHTML = `<div class="card" style="width: 18rem;">
//                     <div id="${pelicula.id}">
//                             <h5 class="card-title">${pelicula.titulo}</h5>
//                             <p class="card-text">${pelicula.director}</p>
//                             <p class="card-text">${pelicula.duracion} minutos</p>
//                             <a href="#" class="btn btn-primary">VER!</a>
//                     </div>
//                     </div>`;
//                     contenedorPeliculas.appendChild(contenedor)
//                     const div = document.getElementById(`${pelicula.id}`)
//                     console.log(div)
//                     div.classList.add("bordes-rojos")
// }



// *** Eventos del mouse *** //
const btnAlerta = document.querySelector("#alerta")
const btnConsola = document.getElementById("consola")
const btnDarkMode = document.getElementById("color-mode")


btnAlerta.addEventListener("click", mostrarAlerta)
btnConsola.addEventListener("click",mostrarConsola)
btnDarkMode.addEventListener("click", cambiarDarkMode)
const body = document.body


function mostrarAlerta() {
    alert("El botón de alerta esta funcionando!")
}
function mostrarConsola(){
    console.log("El boton de la consla funciona!")
}

function cambiarDarkMode(){
    body.classList.toggle("dark-mode")

    if(body.classList.contains("dark-mode")){
        btnDarkMode.innerText = "Cambiar a Light Mode"
    }else{
        btnDarkMode.innerText = "Cambiar a Dark Mode"
    }
}


const formAlerta = document.getElementById("alerta-input")
const formAbajo = document.getElementById("abajo-input")
const parrafoAbajo = document.getElementById("abajo")
const form = document.getElementById("alerta-form")

formAlerta.addEventListener("change", () => {
    console.log(formAlerta.value)
})


formAbajo.addEventListener("input", () => {
    parrafoAbajo.innerText = formAbajo.value
})

form.addEventListener("submit", (e) =>{
    e.preventDefault
    console.log(formAlerta.value)
})