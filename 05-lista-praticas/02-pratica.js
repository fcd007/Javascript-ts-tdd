/**
 * Função chamada ePaisagem que recebe dois
 * argumentos, largura e altura de uma imagem
 * retorne true se a imagem estiver no modo paisagem
 */

function ePaisagem(altura, largura) {
  // altura = 150, largura = 350 = paisagem - tem largura maior que altura
  if(altura > largura) return true;
  if(largura > altura) return false;
}
const altura = 550;
const largura = 350;
console.log(`largura = ${altura} e largura = ${largura}, horizontal = ${ePaisagem(altura, largura)}`);