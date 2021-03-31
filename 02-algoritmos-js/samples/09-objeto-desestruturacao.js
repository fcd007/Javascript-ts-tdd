// const pessoa = {
//   nome: "Claudeilton",
//   sobrenome: "Dantas",
//   // idade: 31,
//   endereco: {
//     logradouro: "Rua Pedro José Soares, 517",
//     numero: 517,
//   },
// };

// const { nome, idade = 19, endereco } = pessoa;
// console.log(nome, idade, endereco);

const carro = {
  numPortas: 4,
  nome: "Bugatti Veron",
  marca: "Audi",
  ano: 2021,
  motor: {
    velocidade: 400,
    aceleracao: 100,
    cavalos: 512,
  },
};

const { nome: teste = "CarroNome", motor } = carro;
console.log(teste, motor);
//vamos extrair os campos do objeto
const {
  motor: { aceleracao, cavalos, velocidade },
} = carro;
console.log(`Potência do motor: ${aceleracao} ${cavalos} ${velocidade}`);
//pegar o restante dos elementos com o operador resto - rest operator
const pessoa2 = {
  nome: "João",
  idade: 19,
  telefones: {
    celular: "+55 84 9.9999-9999",
    fixo: "84 3331-4547",
  },
};

const { nome, idade, ...resto} = pessoa2
console.log(nome, idade, resto);
