//criar uma função  que recebe duas números  e retorna o maior deles
// function maiorNumero(numero, numero2) {
//   if (numero > numero2) {
//     return numero;
//   } else if (numero2 > numero) {
//     return numero2;
//   } else {
//     return numero;
//   }
// }
// function mostraValor() {
//   console.log(`O número maior = ${maiorNumero(-4, 0)}`);
// }

// mostraValor();

//rafatorando o valor do número maior
function max(numero, numero2) {
  return numero > numero2 ? numero : numero2;
}

//usando arrow function
const max2 = (num, num2) => {
  return num > num2 ? num : num2;
};

// usando apenas o retorno
const max3 = (num, num2) => num > num2 ? num : num2;
console.log(max3(22, 78));
