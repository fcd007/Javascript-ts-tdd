/**
 * função de recebe um número e retorno o seguinte:
 * Número divisível por 3 = Fizz
 * Número divisível por 5 = Buzz
 * Número divisível por 3 e 5 = FizzBuzz
 * Número não é divisível por 3 e 5 = retorna o próprio número
 * checar se o número é realmente um number
 * Use a função com números de 0 a 100
 */

//solução com uso de if else somente
const checarNumero = (numero) => {
  if (isNaN(numero)) {
    console.log("Não é um número", numero);
  } else if (numero % 3 !== 0 && numero % 5 !== 0) {
    console.log(numero);
  } else if (numero % 3 === 0 && numero % 5 === 0) {
    console.log("FizzBuzz");
  } else if (numero % 5 === 0) {
    console.log("Buzz");
  } else if (numero % 3 === 0) {
    console.log("Fizz");
  }
};
//verificando os valores
const max = 100;
const min = 0;
for (let index = 0; index < max; index++) {
  let numero = Math.floor(Math.random(max - min) * max);
  console.log(`${index + 1} = ${numero}`);
  checarNumero(numero);
}
