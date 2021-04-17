// function* generadora1() {
//   //código aqui
//   yield "Valor1";

//   //código aqui
//   yield "Valor2";

//   //código aqui
//   yield "Valor3";
// }

// const geradora1 = generadora1();
// console.log(geradora1.next()); //mostra o objeto
// console.log(geradora1.next().value);
// console.log(geradora1.next().value);
// console.log(geradora1.next().value); 
// console.log(geradora1.next()); //final do objeto

//vamos realizar um iteração no objeto
// for (let iterator of geradora1) {
//   console.log(iterator);
// }
/**
 * criando um gerador de valores
 */
// function* gerador2() {
//   let valor = 0;
//   while (true) {
//     yield valor;
//     valor++

//     if(valor >=100) return;
//   }
// }
// const gera2 = gerador2();

// for (let iterator of gera2) {
//   console.log(iterator);
// }

function* geradora2() {
  yield 1;
  yield 2;
  yield 3;
}

function* geradora3() {
  yield* geradora2();
  yield 4;
  yield 5;
}

// const gera3 = geradora3();
// for (let iterator of gera3) {
//   console.log(iterator);
// }

function* geradora4() {
  yield function() {
    console.log('valor do yield 1');
  };

  yield function() {
    console.log('valor do yield 2');
  };
}
const g5 = geradora4();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1(); //mostrando o log1
func2(); //mostrando o log2
