//filter
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
//retorne todos os valores maiores que 10
/**
 * let numerosMaioresDez = [];
//fazendo uma iteração - filtrando
for (let iterator of numeros) {
  if (iterator > 10) {
    numerosMaioresDez.push(iterator);
  }
}
console.log(numerosMaioresDez);
 */
//usando o filter
// function callbackFilter(valor, indice, array) {
//   return valor > 10 ? true : false;
// }
//realizando o filtro do array
// const numerosFiltrados = numeros.filter((valor) => valor > 10);
// console.log(numerosFiltrados);
const nomes = [
  { nome: "Dantas", idade: 31 },
  { nome: "Luiz", idade: 19 },
  { nome: "Diana", idade: 22 },
  { nome: "Duda", idade: 30 },
  { nome: "Lucas", idade: 51 },
  { nome: "Maria", idade: 53 },
];
// console.log(nomes);
//retorne as pessoas que tem o nome com 5 letras ou mais
const nomesLetrasMaior5 = nomes.filter((nomes) => {
  return nomes.nome.length >= 5;
});
console.log(nomesLetrasMaior5);

// retorne as pessoas com mais de 50 anos
const idadeMaiores50 = nomes.filter((nomes) => {
  return nomes.idade > 50;
});
console.log(idadeMaiores50);

//retorne as pessoas cujo nome termina com a letra "a"
// const nomeTerminaLetraA = nomes.filter((nomes) => {
//   return nomes.nome[nomes.nome.length - 1] === "a";
// });
const nomeTerminaLetraA = nomes.filter((nomes) => {
  return nomes.nome.toLocaleLowerCase().endsWith("a");
});
console.log(nomeTerminaLetraA);
