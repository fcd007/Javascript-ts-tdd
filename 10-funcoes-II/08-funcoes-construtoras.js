// funções cosntrutoras -> objetos
// funções fabricas -> objetos
//construtoras -> nomeclatura - Maiúscula inicial
// Pessoa (new)
function Pessoa(nome, sobrenome) {
  const id = 1234567978; //variables privates

  const metodoInterno = function () {
    
  }

  this.nome = nome;
  this.sobrenome = sobrenome;

  this.meuMetodo1 = function() {
    //usando função padrão
    console.log(this.nome + ": método com função");
  };
  this.meuMetodo2 = () => {
    //usando arrow function
    console.log(this.nome + ": método com arrow function");
  };
}

const pessoa1 = new Pessoa("Claudeilton", "Dantas");
pessoa1.meuMetodo1();
pessoa1.meuMetodo2();
// const pessoa2 = new Pessoa("Felipe", "Santos");

// console.log(typeof pessoa1);
// console.log(typeof pessoa2);

// console.log(pessoa1);
// console.log(pessoa2);
