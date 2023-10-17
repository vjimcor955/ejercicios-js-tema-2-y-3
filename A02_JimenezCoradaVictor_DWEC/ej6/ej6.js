clasificacion = {
    "Atletico de Madrid": 16,
    "Barcelona": 20,
    "Real Madrid": 19
}

// Funcion que ordena las propiedades de un objeto de mayor a menor en funcion de su valor 
function ordernarObjeto(obj) {
    const objOrdenado = Object.entries(obj)
    .sort(([,a],[,b]) => b-a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {})  

    return objOrdenado
}

// Funcion que borra la tabla y crea una nueva actualizada
function actualizarTabla() {    
    if (verificarInfo() == true) {
        const equipo = document.getElementById('equipo').value
        const puntos = document.getElementById('puntos').value

        clasificacion[equipo] = parseInt(puntos) // Si el equipo no esta en el objeto crea una propiedad y le da valor, si el equipo ya existe actualiza el valor.

        // Crea la nueva tabla y el encabezado
        var tabla = document.getElementById('tabla')
        tabla.remove()
    
        var div = document.getElementById('clasificacion')
        tabla = document.createElement('table')
        tabla.id = 'tabla'
        div.appendChild(tabla)
    
        var tr = document.createElement('tr')
        tabla.appendChild(tr)
        var thPosicion = document.createElement('th')
        thPosicion.textContent = 'Posicion'
        var thEquipo = document.createElement('th')
        thEquipo.textContent = 'Equipo'
        var thPuntos = document.createElement('th')
        thPuntos.textContent = 'Puntos'
        tr.appendChild(thPosicion)
        tr.appendChild(thEquipo)
        tr.appendChild(thPuntos)
    
        // Recorro las propiedades del objeto ordenado y por cada una creo una fila para la tabla
        let posicion = 1
        for (const property in ordernarObjeto(clasificacion)) {
            var tr = document.createElement('tr')
            tabla.appendChild(tr)
            var tdPosicion = document.createElement('td')
            tdPosicion.textContent = posicion
            var tdEquipo = document.createElement('td')
            tdEquipo.textContent = property
            var tdPuntos = document.createElement('td')
            tdPuntos.textContent = ordernarObjeto(clasificacion)[property]
            tr.appendChild(tdPosicion)
            tr.appendChild(tdEquipo)
            tr.appendChild(tdPuntos)
    
            posicion++
        }
    } 
}

var regexEquipo = /^[A-Za-z]+$/
var regexpuntos = /^[0-9]+$/
function verificarInfo() {
    // Compruebo que los valores que se introducen son correctos
    const equipo = document.getElementById('equipo').value
    const puntos = document.getElementById('puntos').value

    if (!regexEquipo.test(equipo) || !regexpuntos.test(puntos)){
        alert("En el equipo solo pueden introducirse letras y en los puntos numeros.")
        return false
    } else {
        return true
    }
}