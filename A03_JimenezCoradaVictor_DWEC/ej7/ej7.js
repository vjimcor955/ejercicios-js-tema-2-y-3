class CesarCipher {
    constructor(posiciones) {
        this.posiciones = posiciones
    }

    // Metodo que cifra un texto
    encode(texto) {
        return this.codificarTexto(texto, this.posiciones)
    }

    // Metodo que descifra un texto
    decode(texto) {
        return this.codificarTexto(texto, -this.posiciones)
    }

    // Metodo que desplaza cada letra de un texto dado el numero de posiciones dadas
    codificarTexto(texto, posiciones) {
        texto = texto.toUpperCase().split('')

        let textoCifrado = texto.map((chr) => {
            if (chr >= 'A' && chr <= 'Z') {
                const letra = chr.charCodeAt(0) 
                const letraCifrada = ((letra - 65 + posiciones + 26) % 26 ) + 65 // Desplaza la letra las posiciones dadas usando el codigo ASCII
                return String.fromCharCode(letraCifrada)
            } else {
                return chr // Si no es una letra no lo modifica
            }
        })

        return textoCifrado.join('')
    }
}

// Mostrar resultados
let userText = "DWEC"

const cifrado = new CesarCipher(5)
const text_encoded = cifrado.encode(userText)
const rext_decoded = cifrado.decode(text_encoded)

document.write(`<p>- User text: ${userText}</p>`)
document.write(`<p>- Texto codificado: ${text_encoded}</p>`)
document.write(`<p>- Texto decodificado: ${rext_decoded}</p>`)