const numeros = [50, 50, 80, 10, 20, 30, 50, 80, 70, 11, 15, 22, 27];

numeros.forEach((valor) => {
  console.log(valor);
});

let total = 0;
numeros.forEach((valor) => {
  total += valor;
});
console.log(total);
