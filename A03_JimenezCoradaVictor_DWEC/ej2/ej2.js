// Funcion que genera un numero aleatorio entre un numero minimo y maximo dado
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max+1 - min) + min)
}

// Generador de sumas
let sumas = []
for (let i = 0; i < 36000; i++) {
    let suma = getRandomInt(1, 6) + getRandomInt(1, 6)
    sumas.push(suma)    
}

// Conteo de los resultados
const resultados = []
for (const numero of sumas) {
    if (resultados[numero]) {
        resultados[numero]++
    } else {
        resultados[numero] = 1
    }
}

// Muestra los resultados por pantalla
for (const numero in resultados) {
    document.write(`<p>- Numero ${numero}: ${resultados[numero]} veces</p>`)
}