function cookies() {
    // Comprueba si las cookies existen
    const cookieNombre = comprobarCookie("nombre")
    const cookieDireccion = comprobarCookie("direccion")
    const cookieEdad = comprobarCookie("edad")
    const cookieTrabajo = comprobarCookie("trabajo")

    if (cookieNombre && cookieDireccion && cookieEdad && cookieTrabajo) {
        // Si los datos existen los muestra por pantalla y borra las cookies
        const div = document.getElementById("datos")
        div.textContent = `(COOKIES)
            Nombre: ${cookieNombre} |
            Dirección: ${cookieDireccion} |
            Edad: ${cookieEdad} |
            Profesión: ${cookieTrabajo}`

        document.cookie = "nombre=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        document.cookie = "direccion=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        document.cookie = "edad=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
        document.cookie = "trabajo=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    } else {
        // Si los datos no existen los pide y los guarda
        const nombre = prompt("Introduzca su nombre:")
        const direccion = prompt("Introduzca su direccion:")
        const edad = prompt("Introduzca su edad:")
        const trabajo = prompt("Introduzca su trabajo:")

        document.cookie = `nombre=${nombre}`
        document.cookie = `direccion=${direccion}`
        document.cookie = `edad=${edad}`
        document.cookie = `trabajo=${trabajo}`
    }
}

function localstorage() {
    // Comprueba si los datos existen en localstorage
    const localstorageNombre = localStorage.getItem("nombre")
    const localstorageDireccion = localStorage.getItem("direccion")
    const localstorageEdad = localStorage.getItem("edad")
    const localstorageTrabajo = localStorage.getItem("trabajo")

    if (localstorageNombre && localstorageDireccion && localstorageEdad && localstorageTrabajo) {
        // Si los datos existen los muestra por pantalla
        const div = document.getElementById("datos")
        div.textContent = `(LOCALSTORAGE)
            Nombre: ${localstorageNombre} |
            Dirección: ${localstorageDireccion} |
            Edad: ${localstorageEdad} |
            Trabajo: ${localstorageTrabajo}`
    } else {
        // Si los datos no existen los pide y los guarda
        const nombre = prompt("Introduzca su nombre:")
        const direccion = prompt("Introduzca su direccion:")
        const edad = prompt("Introduzca su edad:")
        const trabajo = prompt("Introduzca su trabajo:")

        localStorage.setItem("nombre", nombre)
        localStorage.setItem("direccion", direccion)
        localStorage.setItem("edad", edad)
        localStorage.setItem("trabajo", trabajo)
    }
}

// Funcion que comprueba si una cookie existe o no
function comprobarCookie(name) {
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim()
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return null
}