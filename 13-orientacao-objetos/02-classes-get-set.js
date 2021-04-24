// //Symbol gera um id aleatório
// //add variável privada
// const _velocidade = Symbol("velocidade");

// class Carro {
//   constructor(nome) {
//     this.nome = nome;
//     this[_velocidade] = 0;
//   }

//   set velocidade(valor) {
//     console.log("SETTER");
//     if (typeof valor !== "number") return;
//     if ((valor) > 100 || valor <= 0) return;
//     this[_velocidade] = valor;
//   }

//   get velocidade() {
//     console.log("GETTER");
//     return this[_velocidade];
//   }

//   acelerar() {
//     if (this.velocidade >= 100) return;
//     this[_velocidade]++;
//   }

//   frear() {
//     if (this.velocidade <= 0) return;
//     this.velocidade--;
//   }
// }

// const carro1 = new Carro("Palio Sporting");
// // for (let index = 0; index < 120; index++) {
// //   carro1.acelerar();
// // }
// // console.log(carro1.velocidade);

// // for (let index = 0; index <= 70; index++) {
// //   carro1.frear();
// // }

// carro1.velocidade = 80;
// console.log(carro1.velocidade);

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  get nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`;
  }

  set nomeCompleto(valor) {
    valor = valor.split(" ");
    this.nome = valor.shift();
    this.sobrenome = valor.join(" ");
  }
}

const pessoa1 = new Pessoa("Claudeilton", "Dantas");
console.log(pessoa1.nome, pessoa1.sobrenome);
pessoa1.nomeCompleto = "Francisco Claudeilton Dantas";
console.log(pessoa1.nome, pessoa1.sobrenome);