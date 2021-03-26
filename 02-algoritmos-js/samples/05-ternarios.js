// operador ternário ?
const pontuacao = 999
let usuario = pontuacao > 999 ? 'Usuario VIP' : 'Usuario Padrão';
console.log(usuario);
//equivale a o mesmo código
let usuario2 = '';
if(pontuacao > 999) {
  usuario2 = 'Usuário VIP';
}else {
  usuario2 = 'Usuário Padrão';
}