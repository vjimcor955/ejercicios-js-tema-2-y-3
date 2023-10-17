// NOMBRES Y APELLIDOS
let nombreRegex = /^[a-záéíóúüñ\s]+$/i
let nombre
do {
    nombre = prompt("Introduce un nombre:")
} while (!nombreRegex.test(nombre))
console.log("Nombre valido:", nombre)

// NORMALIZAR NOMBRES
function normalizarNombre(nombre) {
    const palabras = nombre.split(/\s+/)
  
    const nombreNormalizado = palabras
        .map((palabra) => 
            palabra.normalize("NFD").toLowerCase()
        )
        .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1))
        .join(" ")

    return nombreNormalizado
}


// NUMERO DE TELEFONO
let telefonoRegex = /^\+\d{2}\d{9}$/ // incuyendo prefijo
let telefono
do {
    telefono = prompt("Introduce un numero de telefono (formato: +34123456789):")
} while (!telefonoRegex.test(telefono))
console.log("Numero de telefono valido:", telefono)


// FECHA
let fechaRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/
let fechaa
do {
    fechaa = prompt("Introduce una fecha (formato: dd/mm/aaaa):")
} while (!fechaRegex.test(fechaa))
console.log("Fecha valida:", fechaa)

// AÑO BISIESTO
// Los años bisiestos son dibisibles entre 4.
// Los años divisibles por 100 no son bisiestos, a no ser que sean divisibles por 400, en ese caso son bisiestos.
function esAnoBisiesto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0
}


// EMAIL
let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
let email
do {
  email = prompt("Introduce una direccion de correo electronico:")
} while (!emailRegex.test(email))
console.log("Direccion de correo electronico valida:", email)


// CODIGO POSTAL
let codigoPostalRegex = /^\d{5}$/
let codigoPostal
do {
    codigoPostal = prompt("Introduce un código postal (formato: 12345):")
} while (!codigoPostalRegex.test(codigoPostal))
console.log("Codigo postal valido:", codigoPostal)