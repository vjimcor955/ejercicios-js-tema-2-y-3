let width = 400
let height = 400
let encoger = true

function openPopup() {
    // Posicion aleatoria de la ventana
    let left = Math.floor(Math.random() * (window.innerWidth - width) + width)
    let top = Math.floor(Math.random() * (window.innerHeight - height) + height)
    console.log(left + " " + top)

    // Crear ventana
    let ventana = window.open("", "", `width=${width}, height=${height}, left=${left}, top=${top}`)

    // Cambiar el tamaño de la ventana a cada segundo
    const timer = setInterval(function() {
        if (encoger == true) {
            width -= 40
            height -= 40
        } else {
            width += 40
            height += 40
        }
        ventana.resizeTo(width, height)

        if ((width <= 160 && height <= 160) || (width >= 400 && height >= 400)) {
            encoger = !encoger
        }
    }, 1000)

    // Detener el temporizador cuando se cierra la ventana
    ventana.onbeforeunload = function() {
        clearInterval(timer)
    }
}