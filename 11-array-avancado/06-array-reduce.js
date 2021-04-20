const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// some todos os números (reduce)
const total = numeros.reduce((acumulador, valor) => {
  return (acumulador += valor);
});

// retorne um array com os pares (filter)
const pares = numeros.reduce((acumulador, valor) => {
  if (valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []);
console.log(pares);

// retorne um array com o dobro dos valores(Map)
const dobro = numeros.reduce((acumulador, valor) => {
  acumulador.push(valor * 2);
  return acumulador;
}, []);
console.log(dobro);

const pessoas = [
  { nome: "Dantas", idade: 31 },
  { nome: "Luiz", idade: 19 },
  { nome: "Diana", idade: 22 },
  { nome: "Duda", idade: 30 },
  { nome: "Lucas", idade: 51 },
  { nome: "Maria", idade: 53 },
];
