// const frutas = ["Maça", "Uva", "Melão", "Abacaxi", "Banana", "Pêra"];

// for (const key in frutas) {
//   console.log(`${key} = ${frutas[key]}`);
// }
//iterando sobre objetos
const pessoa = {
  nome: "Dantas",
  sobrenome: "Francisco",
  idade: 31,
};
// // iterando sobre o objeto
// for (const key in pessoa) {
//   console.log(key);
// }
// //mostrando dados dos elementos do objeto
// console.log(pessoa.nome, pessoa.sobrenome, pessoa.idade);
// console.log(pessoa["nome"], pessoa["sobrenome"], pessoa["idade"]);

// const chaveNome = 'nome';
// console.log(pessoa[chaveNome]);

for( let chaveNome in pessoa) {
  console.log(chaveNome, pessoa[chaveNome]);
}

