function eliminarReceta() {
    var regex = /^[0-9]+$/

    // Comprobar que el id introducido es correcto
    do {
        const id = prompt("Introduzca el id de la receta que quiere eliminar")
        if (!regex.test(id)) {
            alert("Solo se admiten numeros.")
        } else if (!listaRecetas.includes("receta" + id)) {
            alert("El id de esa receta no existe")
        }
    } while (!regex.test(id) || !listaRecetas.includes("receta" + id))
    const id = prompt("Introduzca el id de la receta que quiere eliminar")
    const receta = document.getElementById(id)
    receta.remove()
}

// Datos recetas
const receta1 = {
    nombre: "Receta 1",
    descripcion: "Descripcion receta 1"
}
const receta2 = {
    nombre: "Receta 2",
    descripcion: "Descripcion receta 2"
}
const receta3 = {
    nombre: "Receta 3",
    descripcion: "Descripcion receta 3"
}
const receta4 = {
    nombre: "Receta 4",
    descripcion: "Descripcion receta 4"
}
const receta5 = {
    nombre: "Receta 5",
    descripcion: "Descripcion receta 5"
}

var listaRecetas = [receta1, receta2, receta3, receta4, receta5]

// Generador de la lista a partir de las propiedades de cada objeto receta
var listaOl = document.createElement('ol')
var divRecetas = document.getElementById("divRecetas")
divRecetas.appendChild(listaOl)


listaRecetas.forEach(receta => {
    var listaLi = document.createElement('li')
    listaLi.id = listaRecetas.indexOf(receta)+1
    
    var titulo = document.createElement('a')
    titulo.href = '#'
    titulo.textContent = receta.nombre
    listaLi.appendChild(titulo)

    var descripcion = document.createElement('p')
    descripcion.textContent = receta.descripcion
    listaLi.appendChild(descripcion)

    listaOl.appendChild(listaLi)
})