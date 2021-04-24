/**
 * Factory functions | Constructor functions | Classes
 */
const pessoa = new Object();

pessoa.nome = "Dantas";
pessoa.sobrenome = "Francisco";
pessoa.idade = 32;
pessoa.falarNome = function () {
  return `${this.nome} está falando seu nome`;
};

pessoa.getDataNascimento = function () {
  const dataAtual = new Date();
  return `${dataAtual.getFullYear()}` - this.idade;
};

console.log(pessoa.getDataNascimento());
console.log(pessoa.falarNome());
