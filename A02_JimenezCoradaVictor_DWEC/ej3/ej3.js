var regex = /^[0-9-]+$/

// Controla que solo se introduzcan numeros y guiones
do {
    var fecha = prompt("Introduzca una fecha (YYYY-MM-DD):")

    if (!regex.test(fecha)) {
        alert("Introduzca solo numeros y guiones.")
    }
} while (!regex.test(fecha))

const Fecha = new Date(fecha)
const dia = Fecha.getUTCDay()
const mes = Fecha.getUTCMonth()
const ano = Fecha.getUTCFullYear()

const semana1 = new Date(ano, 0, 1)
const diaSemana1 = semana1.getUTCDay() // Numero de dia que es el primer jueves del año introducido
const hastaJueves = (diaSemana1 <= 4) ? 4 - diaSemana1 : 7 - diaSemana1 + 4 // Calcular la diferencia de dias que hay hasta ese jueves

const diferenciaDias = (Fecha - semana1) / (24 * 60 * 60 * 1000) + 1 // Calcular la diferencia en dias entre la fecha dada y el primer jueves de enero

let numeroSemana = Math.ceil((diferenciaDias - hastaJueves) / 7) + 1 // Calculo para el numero de semana

// Variante para los años bisiestos
if (mes === 11 && dia >= 29) {
    const ultimoDia = new Date(ano, mes, 31).getUTCDay()
    if (ultimoDia === 3 || (ultimoDia === 4 && dia === 0)) {
        numeroSemana = 1 // Si el último día de diciembre es miércoles o jueves es la primera semana del próximo año.
    }
}

// Mostrar el resultado
document.write(`El dia ${fecha} cae en la semana numero ${numeroSemana}.`)