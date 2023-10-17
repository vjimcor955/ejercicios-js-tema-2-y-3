let frase = prompt('Introcude una frase: ')
// La ruta nos aporto otro paso natural 

frase = frase.replace(/ /g, '')

let first_half = frase.toLowerCase().slice(0, frase.length/2)
let second_half = frase.toLowerCase().slice(frase.length/2, frase.length).split("").reverse().join("")

if (first_half === second_half) {
    alert('Es un palindromo.')
} else {
    alert('No es un palindromo.')
}