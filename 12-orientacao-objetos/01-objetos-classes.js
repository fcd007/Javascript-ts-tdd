// class Pessoa {
//   constructor(nome, sobrenome) {
//     this.nome = nome;
//     this.sobrenome = sobrenome;
//   }

//   falar() {
//     console.log(`Olá ${this.nome}`);
//   }
// }

// const pessoa1 = new Pessoa("Marcus", "Lucena");
// const pessoa2 = new Pessoa("Claudeilton", "Dantas");
// const pessoa3 = new Pessoa("Fernanda", "Bezerra");
// console.log(pessoa1);
// console.log(pessoa2);
// console.log(pessoa3);
// pessoa1.falar();
// pessoa2.falar();
// pessoa3.falar();
//função construtora
function PessoaFactory(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

//cuidado ao usar arrow function
PessoaFactory.prototype.falar = function () {
  console.log(`Olá ${this.nome}`);
};

const p2 = new PessoaFactory("Lucas", "Lima");
p2.falar();
