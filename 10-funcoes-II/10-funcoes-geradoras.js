function* generadora1() {
  //código aqui
  yield "Valor1";

  //código aqui
  yield "Valor2";

  //código aqui
  yield "Valor3";
}

const geradora1 = generadora1();
// console.log(geradora1.next()); //mostra o objeto
console.log(geradora1.next().value);
console.log(geradora1.next().value);
console.log(geradora1.next().value); 
console.log(geradora1.next()); //final do objeto
//vamos realizar um iteração no objeto
for (let iterator of geradora1) {
  
}
