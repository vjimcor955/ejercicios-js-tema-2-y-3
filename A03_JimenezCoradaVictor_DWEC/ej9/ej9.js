function calcular(expresion) {
    // Resuelve los parentesis
    const calcularParentesis = (exp) => {
        const regex = /\(([^()]+)\)/
        while (regex.test(exp)) {
            exp = exp.replace(regex, (_, subExp) => {
            return calcularSubxpresion(subExp)
            })
        }
        return calcularSubxpresion(exp)
    }

    // Separa las subexpresiones en numeros y operadores y las calcula
    const calcularSubxpresion = (expresion) => {
        const elementos = expresion.split(/([\+\-\*\/])/)
        const numeros = []
        const operadores = []
        elementos.forEach(elemento => {
            elemento = elemento.trim()
            if (!elemento) return
            if (elemento.match(/[\+\-\*\/]/)) {
            operadores.push(elemento)
            } else {
            numeros.push(parseFloat(elemento))
            }
        })

        // Realiza el calculo en funcion del operador
        const operaciones = ['*', '/', '+', '-']
        operaciones.forEach(operacion => {
            for (let i = 0; i < operadores.length; i++) {
                if (operadores[i] === operacion) {
                    if (operacion === '*') {
                    numeros[i] *= numeros[i + 1]
                    } else if (operacion === '/') {
                    numeros[i] /= numeros[i + 1]
                    } else if (operacion === '+') {
                    numeros[i] += numeros[i + 1]
                    } else if (operacion === '-') {
                    numeros[i] -= numeros[i + 1]
                    }
                    operadores.splice(i, 1)
                    numeros.splice(i + 1, 1)
                    i--
                }
            }
        })

        return numeros[0]
    }
  
    return calcularParentesis(expresion)
}

// Mostrar los resultados
const expresion = prompt("Introduzca una expresion aritmetica para saber su resultado:")
const resultado = calcular(expresion)

document.write(`${expresion} = ${resultado}`)
  