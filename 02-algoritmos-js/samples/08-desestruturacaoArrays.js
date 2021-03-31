// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const letras = [b, c, a];
// [a,b,c] = letras;
// console.log(a,b,c);
// const numeros = [1000, 2000, 3000, 4000, 5 , 6 , 7, 8, 9 , 10];
// //rest operator  - pegar o resto dos elementos
// //spread - espalhar os elementos
// const [primeiro, segundo, ...resto] = numeros
// console.log(primeiro, segundo);
// console.log(resto);
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [1, 2, 3] ];
// const [,[,,seis]] = numeros
// console.log(seis);

// const [list1, lista2, lista3] = numeros
// const [,,seis2] = lista2
// console.log(seis2);

const [lista1, lista2, lista3] = numeros
console.log(lista2[2]);
