//argumentos que sustenta todos os argumentos enviados
function funcao(a, b, c) {
  let total = 0;
  for (const iterator of arguments) {
    total += iterator;
  }
  console.log(a, b, c, total);
}

//argumento sendo enviado, o js ignora
funcao(1, 2, 3, 4, 5);

//falta de argumentos na passagem de parâmetros
function funcaoRetorno(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}
//retorno de valores undefined
funcaoRetorno(1, 2, 3);

//valores padrão
function soma(numero = 1, numero2 = 2, numero3 = 0) {
  console.log(numero + numero2 + numero3);
}
//para poder usar valores padrões apenas com valores indefinidos
soma(1, undefined, 6); // retorno do valor padrão de numero2
soma(1, "undefined", 6); //retorno de estring
soma(1, null, 6); //numero2 = 0 - assume zero

//usando valores desestruturados na passagem de parâmetros
function pessoaFuncao({ nome, idade }) {
  console.log(nome, idade);
}
//passagem de objeto com os atributos do objeto para a função
let objetoPessoa = { nome: "Leticia Valencia", idade: 45 };
pessoaFuncao({ nome: "Lucas Padro", idade: 21 });
pessoaFuncao(objetoPessoa);

//desestruturação do array para função
function arrayFuncao([valor1, valor2, valor3, valor4]) {
  console.log(valor1, valor2, valor3, valor4);
}
//realizando passagem de parâmetros via array desestruturado
arrayFuncao([1, 2, 3, 4]);
// criando um array e passando como parâmentro
const numeros = [10, 20, 30, 40];
arrayFuncao(numeros);

// funcao para operar valores
function contaValores(operador, acumulador, ...numeros) { //usar o rest operator , last param
  // console.log(operador, acumulador, numeros);
  for (const numero of numeros) {
    if (operador === '+') {
      acumulador += numero;
    } else if(operador === '-') {
      acumulador -= numero;
    } else if (operador === '*') {
      acumulador *= numero;
    }else if (operador === '/') {
      acumulador /= numero;
    }
  }
  console.log(acumulador);
}

contaValores("+", 0, 20, 30, 40, 50);
contaValores("+", 0, 20, 30, 40, 50);
contaValores("*", 1, 20, 30, 40, 50);
contaValores("/", 1, 20, 30, 40, 50);
