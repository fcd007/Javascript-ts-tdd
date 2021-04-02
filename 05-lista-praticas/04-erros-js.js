// try {
//   console.log(erro);
// } catch (error) {
//     console.log('Criar variável ao início do código!');
//     console.log(error);
// }
function soma(numero, numero2) {
  if (typeof numero !== "number" || typeof numero2 !== "number") {
    throw new Error("Numero ou numero2 precisam ser números");
  }

  return numero + numero2;
}

try {
  console.log(soma(2, 4));
  console.log(soma(1, "o"));
} catch (error) {
  // console.log(error);
}
