const valores = [true, 5, false, 'hola', 'adios', 2]

// Parte 1
let longest = "default"
let length = 0

valores.forEach(value => {if (typeof(value) === "string") {
    let value_length = value.length
    if (value_length > length) {
        length = value_length
        longest = value
    }
}})
console.log(longest);

// Parte 2
if (valores[0] === true || valores[2] === true) {
    alert(true)
} else if (valores[0] === false || valores[2] === false) {
    alert(false)
}

// Parte 3
let num1 = valores[1]
let num2 = valores[5]

let suma = num1 + num2
let resta = num1 - num2
let producto = num1 * num2
let division = num1 / num2
let resto = num1 % num2

console.log(suma);
console.log(resta);
console.log(producto);
console.log(division);
console.log(resto);
