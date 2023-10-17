// Funcion que aplana la matriz introduciendo cada uno de sus elementos en un nuevo array
function aplanarMatriz(matriz) {
    var matrizAplanada = []
    for (let i = 0; i < matriz.length; i++) {
        var subMatriz = matriz[i]
        for (let j = 0; j < subMatriz.length; j++) {
            matrizAplanada.push(subMatriz[j])
        }
    }

    return matrizAplanada
}

// Funcion que ordena el array comparando los elementos del mismo
function ordenarAscendente(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }   
        }   
    }
    return array;
}

const matriz = [[5, 4, 6], [2, 9, 3], [8, 1, 7]];

document.write('<p>- Matriz original: ' + JSON.stringify(matriz, null, 2) + '</p>');
document.write('<p>- Matriz aplanada: ' + JSON.stringify(aplanarMatriz(matriz), null, 2) + '</p>');
document.write('<p>- Matriz ordenada: ' + JSON.stringify(ordenarAscendente(aplanarMatriz(matriz)), null, 2) + '</p>');