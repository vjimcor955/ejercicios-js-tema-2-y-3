// Array Destructuring -
// Al igual que los objetos algunas veces quieres crear la variable y el valor del array,
// veamos algunos ejemplos:

const numeros = [10, 20, 30, 40, 50];

// const [] = numeros;
// const [primero] = numeros;
// const [PuedoLlamarloComoquiera] = numeros;  // Puedo llamarle como quiera, lo que manda es la posición

// console.log(primero);

// const [primero, segundo, tercero ] = numeros;

// console.log(numeros);
// console.log(primero);
// console.log(segundo);
// console.log(tercero);

// Si quieres saltarte un valor, pon una coma....
// const [primero, , tercero, cuarto ] = numeros;

// Ahora, queremos extraer el primero, segundo y todos los demas que sigan en el array...

const [primero, segundo, ...tercero] = numeros; // Muy usada en React
console.log(tercero);
