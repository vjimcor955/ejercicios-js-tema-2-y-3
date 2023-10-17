class Ghost {
    static colores = ["white", "black", "red", "green", "blue", "yellow", "purple", "orange", "pink", "gray"]
    
    // Constructor por el que se genera un color aleatorio por cada instancia
    constructor() {
        const colorId = Math.floor(Math.random() * Ghost.colores.length);
        this.color = Ghost.colores[colorId];  
    }
  
    // Crea y le da estilo al contenedor con un color
    crearColor() {
        const divColores = document.getElementById("colores")
        const color = document.createElement("div")
        color.style.width = "100px"
        color.style.height = "100px"
        color.style.backgroundColor = this.color
        color.style.margin = "10px"
        color.style.textAlign = "center"
        color.textContent = this.color
    
        divColores.appendChild(color)
    }
}
  
// Mostrar resultado
for (let i = 0; i < 1000; i++) {
    const ghost = new Ghost()
    ghost.crearColor()
}
  