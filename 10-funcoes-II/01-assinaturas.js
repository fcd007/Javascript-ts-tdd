function mostraSaudacao() {
  console.log("Oi estou sendo chamada!");
}
//function hoisting - joga para o top as funções criadas
mostraSaudacao();

//function express - objetos de primeira classe
const souUmDado = function () {
  console.log("Sou um dado");
};

souUmDado();

function executaFuncao(funcao) {
  funcao();
}
//chamada de fun
executaFuncao(souUmDado);

//arrow function
const funcaoArrow = () => {
  console.log("Sou uma Arrow Function");
};
//fazendo chamada da arrow function
funcaoArrow();

//dentro de um objeto
const pessoa = {
  falar() {
    console.log("Oi mundo");
  },
};
//fazendo chamada do atributo
pessoa.falar();


