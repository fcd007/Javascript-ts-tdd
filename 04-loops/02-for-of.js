// const nome = "Claudeilton Dantas";

// for (const iterator of nome) {
//   console.log(iterator);
// }

const frutas = ["Banana", "Uva", "Maça"];

// for (const iterator of frutas) {
//   console.log(iterator);
// }

console.log('------------------------');
frutas.forEach(function (valor, indice, array) {
  console.log(valor, indice);
  console.log(array);
})
