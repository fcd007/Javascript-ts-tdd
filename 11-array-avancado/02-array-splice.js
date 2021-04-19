//               -5        -4     -3       -2       -1
//                0        1       2        3        4
const nomes = ["Lucas", "João", "Maria", "Carla", "Paula"];
//nome.splice(indice, delete, addElement01, addElement02,addElement03);
// const nome = nomes.splice(1, 1)
// const nome1 = nomes.splice(-1, 1)
// const nome2 = nomes.splice(-1, Number.MAX_VALUE) //remover todos até limite

// console.log(nome);
// console.log(nome1);
// console.log(nome2);
//adicionando elemento no array
// const removido = nomes.splice(3, 2, 'Olivia');
// console.log('removidos do array: ', removido, '\nAdd no array: ', nomes);
//vamos simular remover elementos - o pop final do array e shift inicio
// let nome = nomes.shift(); nome = nomes.pop();
// let nomeRemovido = nomes.splice(0,1); //remove shift
// let nomeRemovido2 = nomes.splice(-1,1); //remove shift
// console.log(nomeRemovido, nomeRemovido2); //retornando como array
//vamos simular agora o push e o unshift - adicionar elementos final e início
nomes.splice(0, 0, "Ricardo"); //add elemento no início do array
nomes.splice(nomes.length, 0, "Renata"); //add elemento no final do array
console.log(nomes);
