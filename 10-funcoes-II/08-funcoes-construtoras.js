// funções cosntrutoras -> objetos
// funções fabricas -> objetos
//construtoras -> nomeclatura - Maiúscula inicial
// Pessoa (new)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  //criando 
}

const pessoa1 = new Pessoa("Claudeilton", "Dantas");
const pessoa2 = new Pessoa("Felipe", "Santos");

console.log(typeof(pessoa1));
console.log(typeof(pessoa2));

console.log(pessoa1);
console.log(pessoa2);