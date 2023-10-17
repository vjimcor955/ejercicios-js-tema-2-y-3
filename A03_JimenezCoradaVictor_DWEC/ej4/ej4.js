// Crear clase persona
class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre
        this.edad = edad
        this.genero = genero
    }

    // Metodo que muestra la informacion por pantalla
    getInfo() {
        document.write(`
        <p>- Nombre: ${this.nombre}</p>
        <p>- Edad: ${this.edad}</p>
        <p>- Genero: ${this.genero}</p>`)
    }
}

// Crear clase Estudiante que hereda de Persona
class Estudiante extends Persona {
    constructor(nombre, edad, genero, curso, grupo) {
        super(nombre, edad, genero)
        this.curso = curso
        this.grupo = grupo
    }

    // Metodo que muestra la informacion por pantalla
    matriculado() {
        document.write(`${this.nombre} ha sido matriculado en el modulo de ${this.curso} en el ${this.grupo}.`)
    }
}

// Crear clase Profesor que hereda de Persona
class Profesor extends Persona {
    constructor(nombre, edad, genero, modulo, nivel) {
        super(nombre, edad, genero)
        this.modulo = modulo
        this.nivel = nivel
    }

    // Metodo que muestra la informacion por pantalla
    imparte() {
        document.write(`${this.nombre} da clases de ${this.modulo} a un nivel ${this.nivel}.`)
    }
}

// Crear los objetos
const estudiante1 = new Estudiante("Estudiante 1", 20, "Masculino", "DWES", "Grupo A")
const profesor1 = new Profesor("Profesora 1", 35, "Femenino", "Diseño", "Basico")

// Mostras los resultados por pantalla
document.write('<p>Informacion del estudiante:</p>')
estudiante1.getInfo()
estudiante1.matriculado()

document.write('<br><br><p>Informacion del profesor:</p>')
profesor1.getInfo()
profesor1.imparte()
  