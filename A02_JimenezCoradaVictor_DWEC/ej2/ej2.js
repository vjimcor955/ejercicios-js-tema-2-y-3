var nombre
var regex = /^[A-Za-z\s]+$/

// Controla que solo se introduzcan letras
do {
    nombre = prompt("Introduzca su nombre y apellidos:")

    if (!regex.test(nombre)) {
        alert("Introduzca solo letras y espacios.")
    }
} while (!regex.test(nombre))

var tamanoNombre = nombre.replace(" ", "").length // Tamaño del nombre y apellidos sin espacios

var minusculas = nombre.toLowerCase() // Nombre a mayúsculas
var mayusculas = nombre.toUpperCase() // Nombre a minúsculas

var splitNombre = nombre.split(" ") // Dividir el nombre y los apellidos

var usuario1 = (splitNombre[0].charAt(0) + splitNombre[1] + splitNombre[2].charAt(0)).toLowerCase() // Propuesta de usuario 1
var usuario2 = splitNombre[0].charAt(0).toUpperCase() + (splitNombre[0].substring(1, 3) + splitNombre[1].substring(0, 3) + splitNombre[2].substring(0, 3)).toLowerCase() // Propuesta de usuario 2


// Mostrar resultados
document.write("1. Tamaño del nombre y apellidos (sin contar espacios): " + tamanoNombre + "<br>")
document.write("2. Nombre en minúsculas: " + minusculas + "<br>")
document.write("   Nombre en mayúsculas: " + mayusculas + "<br>")
document.write("3. Nombre: " + splitNombre[0] + "<br>")
document.write("   Primer apellido: " + splitNombre[1] + "<br>")
document.write("   Segundo apellido: " + splitNombre[2] + "<br>")
document.write("4. Propuesta de usuario 1: " + usuario1 + "<br>")
document.write("5. Propuesta de usuario 2: " + usuario2 + "<br>")