function reloj() {
    const reloj = document.getElementById("reloj")
    const hora = new Date()
    let horas = hora.getHours()
    let minutos = hora.getMinutes()
    let segundos = hora.getSeconds()
    let periodo = "AM"

    // Formato 12 horas y comprobar que el periodo sea el correct0
    if (horas >= 12) {
        periodo = "PM"
        if (horas > 12) {
            horas -= 12
        }
    }

    // Añadir ceros en caso de un solo digito
    horas = (horas < 10) ? "0" + horas : horas
    minutos = (minutos < 10) ? "0" + minutos : minutos
    segundos = (segundos < 10) ? "0" + segundos : segundos

    reloj.textContent = `${horas}:${minutos}:${segundos} ${periodo}`
}

// Mostrar y actualizar el reloj cada segundo
setInterval(reloj, 1000)
reloj()