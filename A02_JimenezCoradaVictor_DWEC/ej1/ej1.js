// Controla que solo se introduzcan numeros
do {
    var radio = parseFloat(prompt("Introduzca el radio de la circunferencia (cm):"));
} while (isNaN(radio) || radio <= 0);

// Calculos
var diametro = 2 * radio
var perimetro = 2 * Math.PI * radio
var areaCirculo = Math.PI * Math.pow(radio, 2)
var areaEsfera = 4 * Math.PI * Math.pow(radio, 2)
var volumenEsfera = (4 / 3) * Math.PI * Math.pow(radio, 3)

// Mostrar resultados
document.write("1. Radio: " + radio.toFixed(2) + " cm<br>");
document.write("2. Diámetro: " + diametro.toFixed(2) + " cm<br>");
document.write("3. Perímetro de la circunferencia: " + perimetro.toFixed(2) + " cm<br>");
document.write("4. Área del círculo: " + areaCirculo.toFixed(2) + " cm²<br>");
document.write("5. Área de la esfera: " + areaEsfera.toFixed(2) + " cm²<br>");
document.write("6. Volumen de la esfera: " + volumenEsfera.toFixed(2) + " cm³<br>");
