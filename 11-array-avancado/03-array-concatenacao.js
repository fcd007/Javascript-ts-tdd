const numeros = [1, 2, 3, 4, 5];
const temperaturas = [27, 36, 25, 29, 34];
//unindo os valores em um novo array
// const numTemp = numeros.concat(temperaturas);
// console.log(numTemp);
// ...rest => spread
const numTemp = [...numeros, "Dantas", ...temperaturas, ...[4, 78, 41, 10]];
console.log(numTemp);
