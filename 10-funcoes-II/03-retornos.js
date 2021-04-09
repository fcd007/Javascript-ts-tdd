// function falaFrase(comeco) {
//     function falaResto(resto) {
//         return comeco + ' ' + resto;
//     }
//     return falaResto;
// }

// const fala = falaFrase('Ola');
// const resto = fala(`Mundo!`)
// console.log(resto);

function criaMultiplicador(fator) {
    return function(number) {
        return fator * number;
    }
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(2);
const quadruplica = criaMultiplicador(2);

console.log(duplica(2));
console.log(duplica(3));
console.log(duplica(4));
