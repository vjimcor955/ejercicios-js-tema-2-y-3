class Persona {
    constructor (id, nombre, apellidos, fecha_nacimiento) {
        this.setInfo(id, nombre, apellidos, fecha_nacimiento)
    }

    setInfo(id, nombre, apellidos, fecha_nacimiento) {
        this.id = id
        this.nombre = nombre
        this.apellidos = apellidos
        this.fecha_nacimiento = fecha_nacimiento
    }

    concentrarse() {
        return `${this.nombre} se ha concentrado.`
    }
}

class CEO extends Persona {
    constructor (id, nombre, apellidos, fecha_nacimiento, jefes_asignados) {
        super (id, nombre, apellidos, fecha_nacimiento)
        this.jefes_asignados = jefes_asignados
    }

    viajar(lugar) {
        return `El CEO ${this.nombre} ha viajado a ${lugar}.`
    }

    anadir_jefe(equipo) {
        return `El CEO ${this.nombre} ha añadido un nuevo jefe al equipo ${equipo}.`
    }

    dirigir_jefe(jefe) {
        return `El CEO ${this.nombre} le ha asignado trabajo a ${jefe}.`
    }
}

class Jefe extends Persona {
    constructor (id, nombre, apellidos, fecha_nacimiento, dpto_responsable, equipo) {
        super (id, nombre, apellidos, fecha_nacimiento)
        this.dpto_responsable = dpto_responsable
        this.equipo = equipo
    }

    anadir_al_equipo(equipo) {
        return `El jefe ${this.nombre} ha añadido un nuevo trabajador al equipo ${equipo}.`
    }

    reunirse_con_el_equipo(equipo) {
        return `El jefe ${this.nombre} se ha reunido con el equipo ${equipo}.`
    }
}

class Programador extends Persona {
    constructor (id, nombre, apellidos, fecha_nacimiento, titulacion, experiencia) {
        super (id, nombre, apellidos, fecha_nacimiento)
        this.titulacion = titulacion
        this.experiencia = experiencia 
    }

    programar() {
        return `El programador ${this.nombre} ha completado una jornada de programacion.`
    }
}

// Mostrar resultados
const programador1 = new Programador(1, "Programador1", "Apellidos1", '1/1/2001', "Tecnico DAW", 1)
const programador2 = new Programador(2, "Programador2", "Apellidos2", '2/2/2002', "Tecnico DAW", 2)
const programador3 = new Programador(3, "Programador3", "Apellidos3", '3/3/2003', "Tecnico DAW", 3)
const programador4 = new Programador(4, "Programador4", "Apellidos4", '4/4/2004', "Tecnico DAW", 4)

var equipo1 = [programador1, programador2]
var equipo2 = [programador3, programador4]

const jefe1 = new Jefe(1, "Jefe1", "Apellidos1", '1/1/1991', "Diseño", equipo1)
const jefe2 = new Jefe(2, "Jefe2", "Apellidos2", '2/2/1992', "Frontend", equipo2)

var jefes = [jefe1, jefe2]

const ceo = new CEO(1, "Ceo01", "Apellidos1", '12/10/1972', jefes)


document.write(`<p>${programador1.concentrarse()}</p>`)
document.write(`<p>${programador3.programar()}</p>`)

document.write(`<br><p>${jefe1.concentrarse()}</p>`)
document.write(`<p>${jefe1.anadir_al_equipo("equipo1")}</p>`)
document.write(`<p>${jefe2.reunirse_con_el_equipo("equipo2")}</p>`)

document.write(`<br><p>${ceo.concentrarse()}</p>`)
document.write(`<p>${ceo.viajar("Estados Unidos")}</p>`)
document.write(`<p>${ceo.anadir_jefe("equipo2")}</p>`)
document.write(`<p>${ceo.dirigir_jefe("jefe1")}</p>`)