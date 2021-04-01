/**
 * Função chamada ePaisagem que recebe dois
 * argumentos, largura e altura de uma imagem
 * retorne true se a imagem estiver no modo paisagem
 */

// function ePaisagem(largura, altura) {
//   // altura = 150, largura = 350 = paisagem - tem largura maior que altura
//   return altura > largura;
// }
// const altura = 550;
// const largura = 350;

// console.log(
//   `largura = ${altura} e largura = ${largura}, horizontal = ${ePaisagem(
//     altura,
//     largura
//   )}`
// );

const ePaisagem = (largura, altura) => largura > altura;

console.log(`Modo horizontal = ${ePaisagem(1980, 1920)}`);
