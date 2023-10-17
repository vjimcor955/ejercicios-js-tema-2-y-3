const nombre = prompt('Escribe tu nombre: ')
const hora = prompt('Que hora es? (0-23): ')

if (hora < 0 || hora > 24) {
    alert('La hora no es correcta.')
} else if (hora <= 11) {
  alert(`Hola ${nombre}! Es por la mañana.`)
} else if (hora >= 12 && hora <= 20) {
  alert(`Hola ${nombre}! Es por la tarde.`)
} else if (hora >= 21) {
  alert(`Hola ${nombre}! Es por la noche.`)
} 