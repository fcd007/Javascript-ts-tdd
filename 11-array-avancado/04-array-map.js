//retorna um novo array modificado
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// //dobrar os valores dos números
// const numerosDobro = numeros.map((valor) => {
//   return valor * 2;
// });
// console.log(numerosDobro);

const pessoas = [
  { nome: "Dantas", idade: 31 },
  { nome: "Luiz", idade: 19 },
  { nome: "Diana", idade: 22 },
  { nome: "Duda", idade: 30 },
  { nome: "Lucas", idade: 51 },
  { nome: "Maria", idade: 53 },
];
// //para cada elemento
// //retorne apenas uma string com o nome da pessoa
// const nomes = pessoas.map(({ nome })=> {
//   return nome;
// });

// console.log(nomes);
// //remova apenas a chave "nome" do objeto
const idades = pessoas.map(({ idade }) => {
  return { idade: idade };
});
console.log(idades);
// const removeNomes = pessoas.map(({ idade }) => {
//   return idade;
// });
// console.log(removeNomes);
// //adicione uma chave id em casa objeto
// const idPessoas = pessoas.map(({ nome, idade }, indice) => {
//   return { id: indice, nome: nome, idade: idade };
// });
const idPesoas = pessoas.map((obj, indice)=> {
  const arrayID = {...obj};
  arrayID.id = indice;
  return arrayID;
});

console.log(idPesoas);
console.log(pessoas);
// const idPessoas = pessoas.map(({nome, idade}, indice)=> {
//   return `id:${indice} nome:${nome} idade: ${idade}`
// });

// console.log(idPessoas);
