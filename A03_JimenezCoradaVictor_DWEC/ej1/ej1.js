// Funcion que repite una palabra un numero de veces dado
const repetirPalabra = (string, repeticiones) => {
    for (let i = 0; i < repeticiones; i++) {
        document.write(string + " ")
    } 
}

repetirPalabra("bauuuba", 5)