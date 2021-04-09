function retornoFuncao() {
  const nome = "Dantas";
  return function () {
    return nome;
  };
}

const funcao = retornoFuncao();
console.log(funcao);

function retornoFuncao2(nome) {
  return function () {
    return nome;
  };
}

const funcao = retornoFuncao2('Dantas');
const funcao2 = retornoFuncao2('Luiz');
console.log(funcao());
console.log(funcao2());
