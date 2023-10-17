class Monedero {
    constructor(nombre, billetes5, billetes10, billetes20) {
        this.setNombre(nombre)
        this.setBilletes5(billetes5)
        this.setBilletes10(billetes10)
        this.setBilletes20(billetes20)
    }

    // Setters
    setNombre(nombre) {
        this.nombre = nombre
    }
    setBilletes5(billetes5) {
        this.billetes5 = billetes5
    }
    setBilletes10(billetes10) {
        this.billetes10 = billetes10
    }
    setBilletes20(billetes20) {
        this.billetes20 = billetes20
    }

    // Getters
    getNombre() {
        return this.nombre
    }
    getBilletes5() {
        return this.billetes5
    }
    getBilletes10() {
        return this.billetes10
    }
    getBilletes20() {
        return this.billetes20
    }

    // Metodo que calcula cuanto dinero hay en un monedero
    totalBilletes() {
        return this.billetes5 * 5 + this.billetes10 * 10 + this.billetes20 * 20
    }

    // Metodo que calcula que monedero tiene mas dinero
    monederoMayor(monederos) {
        let mayorMonedero = monederos[0]
        let mayorDinero = monederos[0].totalBilletes()

        for (let i = 1; i < monederos.length; i++) {
            let dinero = monederos[i].totalBilletes()
            if (dinero > mayorDinero) {
                mayorMonedero = monederos[i]
                mayorDinero = dinero
            }
        }

        if (mayorDinero === 0) {
            return "Cualquiera"
        } else {
            return mayorMonedero
        }
    }
}

// Mostrar resultados
const m1 = new Monedero("Monedero 1", 0, 0, 2)
const m2 = new Monedero("Monedero 2", 0, 4, 0)
const m3 = new Monedero("Monedero 3", 8, 1, 0)
const m4 = new Monedero("Monedero 4", 2, 0, 1)
const m5 = new Monedero("Monedero 5", 0, 2, 1)
const m6 = new Monedero("Monedero 6", 2, 2, 0)
const m7 = new Monedero("Monedero 7", 0, 3, 0)

const monederos = [m1, m2, m3, m4, m5, m6, m7]

monederos.forEach(monedero => {
    document.write(`<p>- ${monedero.getNombre()}: ${monedero.getBilletes5()} billetes de 5, ${monedero.getBilletes10()} billetes de 10, ${monedero.getBilletes20()} billetes de 20.</p>`)
})

const monederoMayor = Monedero.monederoMayor(monederos)
document.write(`<br>El ${monederoMayor.getNombre()} es el monedero con mas dinero.`)