/**
 * métodos ou propriedades do Arrays
 */
//                     0        1        2        3         4         5         6
const listaNomes = ["Lucas", "Maria", "Joana", "Lilian", "Paula", "Tatiana", "Micaeli"];
//                    -7        -6      -5       -4        -3         -2        -1       

/**
 * Como funciona o splice?
 * nomes.splice(índice, delete, elementosInseridos);
 */

/** Simulando o pop - remover o último elemento do array */
let INDICE_TAMANHO_DA_LISTA = listaNomes.length-1;
//Vamos remover apenas um elemento do final da lista
let listaNomeRemovidos = listaNomes.splice(INDICE_TAMANHO_DA_LISTA, 1);
console.log('====================================');
console.log(listaNomeRemovidos);
console.log('====================================');

INDICE_TAMANHO_DA_LISTA = listaNomes.length-1;
listaNomeRemovidos = listaNomes.splice(INDICE_TAMANHO_DA_LISTA, 1);
console.log('====================================');
console.log(listaNomeRemovidos);
console.log('====================================');

/**
 * lista de nomes
 */
//                -4        -3        -2         -1
//                 0         1         2          3
const nomes = ["Luana", "Mariana", "Fabiana", "Paula"];

const removidos = nomes.splice(-2, 1);
console.log('====================================');
console.log(nomes, removidos);
console.log('====================================');
